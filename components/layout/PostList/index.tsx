import React from 'react'
import Post from '../Post'
import useStyles from './css'
import { Type as FeaturedMediaType } from '../../../fields/featuredMedia'
import { formatLinkUrl, formatRelationUrl } from '../../../utilities/formatRelationUrl'
import { Grid, Cell } from '@faceless-ui/css-grid'
import GridContainer from '../GridContainer'
import ExpandedPost from '../ExpandedPost'
import TextPost from '../TextPost'

type Props = {
    items: {
        type: 'relation' | 'text'
        text?: string
        article?: {
            link: { 
                title: string,
                datePublished?: Date
                featuredMedia?: FeaturedMediaType,
                slug: string,
                excerpt?: string
            },
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
                        {items.map((p, i) =>
                            p.type === 'relation' ?
                                (p.article.expanded ? 
                                    <ExpandedPost
                                        key={i}
                                        title={p.article.link.title}
                                        excerpt={p.article.link.excerpt}
                                        datePublished={p.article.link.datePublished} 
                                        featuredMedia={p.article.link.featuredMedia.image} 
                                        url={formatLinkUrl('articles', p.article.link.slug)} /> :
                                    <Post
                                        key={i}
                                        title={p.article.link.title}
                                        datePublished={p.article.link.datePublished} 
                                        featuredMedia={p.article.link.featuredMedia.image} 
                                        url={formatLinkUrl('articles', p.article.link.slug)} />)
                                : <TextPost key={i} text={p.text}/>)}
                    </div>
                </Cell>
            </Grid>
        </GridContainer>
    )
}