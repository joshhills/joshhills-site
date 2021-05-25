import { Cell, Grid } from "@faceless-ui/css-grid"
import { GetServerSideProps } from "next"
import React from "react"
import { Component as RichText } from "../../blocks/RichText"
import { Type as ArticleType } from '../../collections/Article'
import Head from "../../components/Head"
import Cover from "../../components/layout/Cover"
import FeaturedPost from "../../components/layout/FeaturedPost"
import GridContainer from "../../components/layout/GridContainer"
import InsetC from "../../components/layout/InsetC"
import { PostList } from "../../components/layout/PostList"
import Template from "../../components/layout/Template"
import NotFound from "../../components/NotFound"
import Pagination from "../../components/Pagination"
import { formatLinkUrl } from "../../utilities/formatRelationUrl"
import createUseStyles from './css'

type Props = {
    posts: ArticleType[]
    totalPages: number
}

const BlogIndex: React.FC<Props> = ({ posts, totalPages }) => {

    if (!posts) {
        return <NotFound />
    }

    const classes = createUseStyles()

    const contentLeft = [
        {
            "children": [
                {
                    "text": "I try to post often, on various recurring themes - from personal challenges, to hackathon retrospectives, tutorials and anecdotes. It's all very free-form and home-brewed."
                }
            ]
        }
    ]

    const normalPosts = []
    for (let i = 1; i < posts.length; i++) {
        if (i === 3) {
            normalPosts.push(
                {
                    type: 'empty'
                }
            )
        }

        if (i === 7) {
            normalPosts.push(
                {
                    type: 'text',
                    text: 'blah'
                }
            )
        }

        normalPosts.push(
            {
                type: 'relation',
                article: {
                    link: posts[i],
                    expanded: i === 6,
                    showImage: [2, 3, 5, 7, 9].includes(i),
                    showDate: [2, 7].includes(i)
                }
            }
        )
    }

    return (
        <Template>
            <Head
                title='Blog'
                description='Tech writing'
            />

            <Cover contentWidth='half'>
                <div className={classes.cover}>
                    <h2>Blog</h2>
                    <h4>Technological tattle, design documents, and miscellaneous musings written during various projects.</h4>
                    <br/><br/>
                </div>
            </Cover>

            {posts.length > 0 &&
                <FeaturedPost title={posts[0].title} excerpt={posts[0].excerpt} datePublished={posts[0].datePublished} url={formatLinkUrl('articles', posts[0].slug)} featuredMedia={posts[0].featuredMedia?.image} />} 

            <div className={classes.page}>
                <GridContainer>
                    <Grid>
                        <Cell cols={12}>
                            {posts.length === 0 && <h3>No posts found</h3>}
                            <PostList items={normalPosts} />
                        </Cell>
                    </Grid>
                </GridContainer>
                <InsetC insetTop={true} insetBottom={false} contentLeft={<RichText blockType='richText' content={contentLeft} />} backgroundColor='dark' />
                <GridContainer>
                    <Grid>
                        <Cell cols={12}>
                            <Pagination currentIndex={0} totalPages={totalPages} baseUrl={`${process.env.NEXT_PUBLIC_SERVER_URL}/blog/`} />
                        </Cell>
                    </Grid>
                </GridContainer>
            </div>
        </Template>
    )
}

export default BlogIndex

export const getServerSideProps: GetServerSideProps = async () => {
    const articleReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/articles?limit=11&sort=-publishedDate`)
    const articleData = await articleReq.json()
    
    return {
        props: {
            posts: articleData.docs || null,
            totalPages: articleData.totalPages
        }
    }
}