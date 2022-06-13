import React from 'react'
import Head from '../../components/Head'
import NextHead from 'next/head'
import { GetServerSideProps } from 'next'
import { Type as ArticleType } from '../../collections/Article'
import Template from '../../components/layout/Template'
import NotFound from '../../components/NotFound'
import dateFormat from 'dateformat'
import RenderBlocks from '../../components/RenderBlocks'
import ProjectDetails from '../../components/article/ProjectDetails'
import Cover from '../../components/layout/Cover'
import createUseStyles from './css'
import { FaBackspace, FaArrowUp } from 'react-icons/fa'
import { useRouter } from 'next/router'
import getConfig from 'next/config'
import Post from '../../components/layout/Post'
import { formatLinkUrl } from '../../utilities/formatRelationUrl'
import formatMediaUrl from '../../utilities/formatMediaUrl'
import License from '../../components/article/License'
import ShareButton from '../../components/article/ShareButton'

export type Props = {
    article?: ArticleType
}

const { publicRuntimeConfig: { SERVER_URL } } = getConfig();

const readTime = (content: Array<object>) => {

    let numWords = 0

    if (!content)
        return 1

    for (let block of content as any) {
        if (block.content) {
            for (let parent of block.content as any) {
                if (parent.children) {
                    for (let child of parent.children as any) {
        
                        if (child.type) {
                            if (child.type === 'li' && child.children) {
                                for (let subChild of child.children as any) {
                                    if (subChild.text) {
                                        numWords += subChild.text.split(' ').filter((r:any) => r !== "").length
                                    }
                                }
                            } else if (child.text) {
                                numWords += child.text.split(' ').filter((r:any) => r !== "").length
                            }
                        } else if (child.text) {
                            numWords += child.text.split(' ').filter((r:any) => r !== "").length
                        }
                    }
                }
            }
        }
    }

    const timeToReadMinutes: number = Math.ceil(numWords / 200)

    return timeToReadMinutes
}

const Article: React.FC<Props> = (props) => {

    const { article } = props
    const classes = createUseStyles()
    const router = useRouter()

    if (!article) {
        return <NotFound />
    }

    // Get the featured media URLs
    const featuredImagePath = article.featuredMedia?.image?.filename
    const featuredImageUrl = featuredImagePath ? `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${featuredImagePath}` : null

    const datePublishedStr = dateFormat(article.publishedDate, 'dddd, mmmm dS, yyyy')
    const formattedPublishedStr = dateFormat(article.publishedDate, 'isoDateTime')
    const readTimeNum = readTime(article.content)

    return (
        <Template>
            <Head
                title={article.title}
                description={article.excerpt}
                ogImage={featuredImageUrl}
                ogVideo={formatMediaUrl(article.featuredMedia?.video)}
                ogPublishDate={formattedPublishedStr}
            />
            <NextHead>
                <meta property='og:type' content='article' />
                <meta property='article:author' content='Josh Hills' />
                <meta property='article:section' content={article.project !== undefined ? 'project' : 'general'} />
                <meta property='article:published_time' content={formattedPublishedStr} />
                
                <meta name='twitter:label1' content='Date published' />
                <meta name='twitter:data1' content={datePublishedStr} />
                <meta name='twitter:label1' content='Est. reading time' />
                <meta name='twitter:data2' content={readTimeNum === 1 ? `${readTimeNum} minute` : `${readTimeNum} minutes`} />
            </NextHead>

            <div itemScope itemType="http://schema.org/Article">
                {/* Cover */}
                <Cover fullScreen={true} backgroundImageSrc={featuredImageUrl} backgroundImageAlt={article.featuredMedia?.image.alt} backgroundVideoSrc={formatMediaUrl(article.featuredMedia?.video)} contentWidth='full'>
                    <div className={classes.cover}>
                        <p>
                            <button className={`${classes.button} ${classes.back}`} onClick={() => router.back()}><span className={classes.icon}><FaBackspace/></span>Back</button>&nbsp;
                            Posted <time itemProp="datePublished" dateTime={formattedPublishedStr}>{datePublishedStr}</time> <ShareButton title={article.title} url={`${SERVER_URL}${router.asPath}`} />
                            {article.project?.length && ` • ${article.project.length} project`}
                        </p>
                        <h2 itemProp="name headline">{article.title}</h2>
                        <div>
                            {article.excerpt && <p>{article.excerpt}</p>}
                        </div>
                        <div>
                            {readTimeNum} minute read
                        </div>
                        <br/>
                    </div>
                </Cover>

                <div className={classes.grid}>
                    <div className={classes.content} itemProp="articleBody">
                        {article.category === 'project' && article.project?.resources?.length > 0 && <ProjectDetails {...article.project}/>}
            
                        <RenderBlocks layout={article.content} />
                    </div>
                </div>

                {article.related && article.related.length > 0 && <div className={classes.related}>
                    <div className={classes.grid}>
                        <div className={classes.relatedWrapper}>
                            <h4 className={classes.relatedTitle}>Related Posts</h4>
                            <div className={classes.relatedPostsWrapper}>
                                {article.related.map((p, i) => 
                                <Post
                                    key={i}
                                    title={p.value.title}
                                    publishedDate={p.value.publishedDate} 
                                    featuredMedia={p.value.featuredMedia} 
                                    url={formatLinkUrl('articles', p.value.slug)} />)}
                            </div>
                        </div>
                    </div>
                </div>}

                {/* Meta & Controls */}
                <div className={classes.controlWrapper}>
                    <div className={classes.grid}>
                        <div className={classes.control}>
                            <button className={classes.button} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <FaArrowUp />
                                Scroll Up
                            </button>&nbsp;
                            {/* <button>
                                <FaLink />
                                Copy link
                            </button> */}
                            <License/>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}

export default Article

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const slug = ctx.params?.slug
    const preview = ctx.query?.preview || false

    if (!slug) {
        return {
            props: {
                article: null
            }
        }
    }

    const articleReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/articles?where[slug][equals]=${slug}&preview=${preview}`)
    const articleData = await articleReq.json()

    if (!articleData || !articleData.docs || !articleData.docs[0]) {
        return {
            redirect: {
                destination: '/404',
                permanent: false
            }
        }
    }

    return {
        props: {
            article: articleData.docs[0] || null
        }
    }
}