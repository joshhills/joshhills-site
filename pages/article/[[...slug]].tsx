import React from 'react'
import Head from '../../components/Head'
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
            />

            {/* Cover */}
            <Cover backgroundImageSrc={featuredImageUrl} backgroundImageAlt={article.featuredMedia?.image.alt} contentWidth='full'>
                <div className={classes.cover}>
                    <p>
                        <button className={`${classes.button} ${classes.back}`} onClick={() => router.back()}><span className={classes.icon}><FaBackspace/></span>Back</button>&nbsp;
                        Posted {dateFormat(article.datePublished, 'dddd, mmmm dS, yyyy')}
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
                    {article.category === 'project' && <ProjectDetails {...article.project}/>}
        
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
                                datePublished={p.value.datePublished} 
                                featuredMedia={p.value.featuredMedia.image} 
                                url={formatLinkUrl('articles', p.value.slug)} />)}
                        </div>
                    </div>
                </div>
            </div>}

            {/* Meta & Controls */}
            <div className={classes.controlWrapper}>
                <div className={classes.grid}>
                    <div className={classes.control}>
                        <button className={classes.button} onClick={() => window.scrollTo(0, 0)}>
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

    if (!slug) {
        return {
            props: {
                article: null
            }
        }
    }

    const articleReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/articles?where[slug][equals]=${slug}`)
    const articleData = await articleReq.json()

    return {
        props: {
            article: articleData.docs[0] || null
        }
    }
}