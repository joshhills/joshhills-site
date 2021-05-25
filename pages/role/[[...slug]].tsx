import React from 'react'
import Head from '../../components/Head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Type as RoleType } from '../../collections/Role'
import Template from '../../components/layout/Template'
import NotFound from '../../components/NotFound'
import dateFormat from 'dateformat'
import { Component as RichText } from '../../blocks/RichText'
import GridContainer from '../../components/layout/GridContainer'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { FaArrowUp, FaBackspace } from 'react-icons/fa'
import Cover from '../../components/layout/Cover'
import createUseStyles from './css'
import { useRouter } from 'next/router'
import Post from '../../components/layout/Post'
import { formatLinkUrl } from '../../utilities/formatRelationUrl'

export type Props = {
    role?: RoleType
}

const Role: React.FC<Props> = (props) => {

    const { role } = props

    if (!role) {
        return <NotFound />
    }

    const classes = createUseStyles()
    const router = useRouter()

    // Get the featured media URLs
    const featuredImagePath = role.featuredMedia?.image?.filename
    const featuredImageUrl = featuredImagePath ? `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${featuredImagePath}` : null

    const dateFormatStr = 'mmmm, yyyy'

    return (
        <Template>
            <Head
                title={`${role.title} @ ${role.location.company}`}
                ogImage={featuredImageUrl}
            />

            {/* Cover */}
            <Cover backgroundImageSrc={featuredImageUrl} backgroundImageAlt={role.featuredMedia?.image?.alt} contentWidth='full'>
                <div className={classes.cover}>
                    <p>
                        <button className={`${classes.button} ${classes.back}`} onClick={() => router.back()}><span className={classes.icon}><FaBackspace/></span>Back</button>&nbsp;
                        {role.date.ongoing ? 
                        <span>Since {dateFormat(role.date.start, dateFormatStr)}</span> :
                        <span>{dateFormat(role.date.start, dateFormatStr) === dateFormat(role.date.end, dateFormatStr) ? dateFormat(role.date.start, dateFormatStr) : `${dateFormat(role.date.start, dateFormatStr)} to ${dateFormat(role.date.end, dateFormatStr)}`}</span>}
                    </p>
                    <h2>{role.title} @ <a href={role.location.link} target="_blank">{role.location.company}</a></h2>
                    <div>
                        {role.excerpt && <p>{role.excerpt}</p>}
                    </div>
                </div>
            </Cover>
            
            {/* Content */}
            <GridContainer>
                <Grid>
                    <Cell cols={12}>
                        <div className={classes.contentWrapper}>
                            <h4 className={classes.content}>Responsibilities</h4>
                            <RichText blockType='richText' backgroundColor='none' content={role.responsibilities} />
                            <h4 className={classes.content}>Achievements</h4>
                            <RichText blockType='richText' backgroundColor='none' content={role.achievements} />
                        </div>
                    </Cell>
                </Grid>
            </GridContainer>

            {role.related && role.related.length > 0 && <div className={classes.related}>
                <GridContainer>
                    <Grid>
                        <Cell cols={12}>
                            <div className={classes.relatedWrapper}>
                                <h4 className={classes.relatedTitle}>Related Posts</h4>
                                <div className={classes.relatedPostsWrapper}>
                                    {role.related.map((p, i) => 
                                        <Post
                                            key={i}
                                            title={p.value.title}
                                            datePublished={p.value.datePublished} 
                                            featuredMedia={p.value.featuredMedia?.image} 
                                            url={formatLinkUrl('articles', p.value.slug)} />)}
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                </GridContainer>
            </div>}

            {/* Meta & Controls */}
            <div className={classes.controlWrapper}>
                <GridContainer>
                    <Grid>
                        <Cell cols={12}>
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
                        </Cell>
                    </Grid>
                </GridContainer>
            </div>
        </Template>
    )
}

export default Role

export const getStaticProps: GetStaticProps = async (ctx) => {

    const slug = ctx.params?.slug

    if (!slug) {
        return {
            props: {
                role: null
            }
        }
    }

    const roleReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/roles?where[slug][equals]=${slug}&depth=3`)
    const roleData = await roleReq.json()

    console.log(roleData.docs[0].related)

    return {
        props: {
            role: roleData.docs[0] || null
        }
    }
}

// export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

//     return {
//         paths: [], //indicates that no page needs be created at build time
//         fallback: 'blocking' //indicates the type of fallback
//     }
// }