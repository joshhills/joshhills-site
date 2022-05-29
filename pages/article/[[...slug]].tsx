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
import Post from '../../components/layout/Post'
import { formatLinkUrl } from '../../utilities/formatRelationUrl'
import formatMediaUrl from '../../utilities/formatMediaUrl'

export type Props = {
    article?: ArticleType
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

    return (
        <Template>
            <Head
                title={article.title}
                description={article.excerpt}
                ogImage={featuredImageUrl}
                ogVideo={formatMediaUrl(article.featuredMedia?.video)}
            />
            <NextHead>
                <meta property="og:type" content="article" />
                <meta name='article:author' content='Josh Hills' />
                <meta name='article:section' content={article.project !== undefined ? 'project' : 'general'} />
                <meta name="article:published_time" content={article.publishedDate} />
            </NextHead>

            {/* Cover */}
            <Cover fullScreen={true} backgroundImageSrc={featuredImageUrl} backgroundImageAlt={article.featuredMedia?.image.alt} backgroundVideoSrc={formatMediaUrl(article.featuredMedia?.video)} contentWidth='full'>
                <div className={classes.cover}>
                    <p>
                        <button className={`${classes.button} ${classes.back}`} onClick={() => router.back()}><span className={classes.icon}><FaBackspace/></span>Back</button>&nbsp;
                        Posted {dateFormat(article.publishedDate, 'dddd, mmmm dS, yyyy')}
                        {article.project?.length && ` • ${article.project.length}`}
                    </p>
                    <h2>{article.title}</h2>
                    <div>
                        {article.excerpt && <p>{article.excerpt}</p>}
                    </div>
                </div>
            </Cover>

            <div className={classes.grid}>
                <div>
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

    return {
        props: {
            article: articleData.docs[0] || null
        }
    }
}