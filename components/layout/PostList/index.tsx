import React from 'react'
import Post from '../Post'
import useStyles from './css'
import { Type as FeaturedMediaType } from '../../../fields/featuredMedia'
import { formatLinkUrl } from '../../../utilities/formatRelationUrl'
import { Grid, Cell } from '@faceless-ui/css-grid'
import GridContainer from '../GridContainer'
import ExpandedPost from '../ExpandedPost'
import TextPost from '../TextPost'
import EmptyPost from '../EmptyPost'

type Props = {
    items: {
        type: 'relation' | 'text' | 'empty'
        text?: string
        article?: {
            link: { 
                title: string
                datePublished?: Date
                featuredMedia?: FeaturedMediaType
                slug: string
                excerpt?: string
                category: 'general' | 'project'
            }
            expanded: boolean
            showImage?: boolean
            showDate?: boolean
        },
        role?: {
            link: {
                title: string,
                datePublished?: Date
                featuredMedia?: FeaturedMediaType
                slug: string
                excerpt?: string
                location: {
                    company: string
                }
                date: {
                    ongoing: boolean
                    start: Date
                    end?: Date
                }
            }
            expanded: boolean
        }
    }[]
}

export const PostList: React.FC<Props> = ({ items }) => {
    const classes = useStyles()

    return (
        <GridContainer>
            <Grid>
                <Cell cols={12}>
                    <div className={classes.postList}>
                        {items.map((p, i) => {
                            if (p.type === 'relation') {
                                if (p.article !== null && p.article !== undefined) {
                                    return p.article.expanded ? 
                                        <ExpandedPost
                                            key={i}
                                            title={p.article.link.title}
                                            excerpt={p.article.link.excerpt}
                                            datePublished={p.article.link.datePublished} 
                                            featuredMedia={p.article.link.featuredMedia.image} 
                                            url={formatLinkUrl('articles', p.article.link.slug)}
                                            dashed={p.article.link.category === 'general'} /> :
                                        <Post
                                            key={i}
                                            title={p.article.link.title}
                                            datePublished={p.article.link.datePublished} 
                                            featuredMedia={p.article.link.featuredMedia.image} 
                                            url={formatLinkUrl('articles', p.article.link.slug)}
                                            dashed={p.article.link.category === 'general'}
                                            showImage={p.article.showImage !== undefined ? p.article.showImage : true}
                                            showDate={p.article.showDate !== undefined ? p.article.showDate : true} />
                                } else if (p.role !== null && p.role !== undefined) {
                                    return p.role.expanded ? 
                                        <ExpandedPost
                                            key={i}
                                            title={p.role.link.title}
                                            excerpt={p.role.link.excerpt}
                                            datePublished={p.role.link.datePublished} 
                                            featuredMedia={p.role.link.featuredMedia.image} 
                                            url={formatLinkUrl('roles', p.role.link.slug)}
                                            company={p.role.link.location.company}
                                            dateRange={p.role.link.date}
                                             /> :
                                        <Post
                                            key={i}
                                            title={p.role.link.title}
                                            datePublished={p.role.link.datePublished} 
                                            featuredMedia={p.role.link.featuredMedia.image} 
                                            url={formatLinkUrl('roles', p.role.link.slug)}
                                            company={p.role.link.location.company}
                                            dateRange={p.role.link.date} />
                                }
                            } else if (p.type === 'text') {
                                return <TextPost key={i} text={p.text}/>
                            } else {
                                return <EmptyPost key={i} />
                            }
                        })}
                    </div>
                </Cell>
            </Grid>
        </GridContainer>
    )
}