import { Cell, Grid } from "@faceless-ui/css-grid"
import { GetServerSideProps, GetStaticPaths } from "next"
import React from "react"
import { Type as ArticleType } from '../../collections/Article'
import Head from "../../components/Head"
import Cover from "../../components/layout/Cover"
import GridContainer from "../../components/layout/GridContainer"
import { PostList } from "../../components/layout/PostList"
import Template from "../../components/layout/Template"
import NotFound from "../../components/NotFound"
import Pagination from "../../components/Pagination"
import createUseStyles from './css'

type Props = {
    posts: ArticleType[]
    totalPages: number
    activeIndex: number
}

const BlogPage: React.FC<Props> = ({ posts, totalPages, activeIndex }) => {

    if (!posts) {
        return <NotFound />
    }

    const classes = createUseStyles()

    const items = posts.map((p) => {
        return {
            type: 'relation' as 'relation',
            article: {
                link: p,
                expanded: false
            }
        } 
    })

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

            <GridContainer>
                <Grid>
                    <Cell cols={12}>
                        {posts.length === 0 && <h3>No posts found</h3>}
                        <PostList items={items} />
                        <Pagination currentIndex={activeIndex} totalPages={totalPages} baseUrl={`${process.env.NEXT_PUBLIC_SERVER_URL}/blog/`} />
                    </Cell>
                </Grid>
            </GridContainer>
        </Template>
    )
}

export default BlogPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const page = +ctx.params?.page

    const articleReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/articles?limit=11&sort=-publishedDate&page=${page}`)
    const articleData = await articleReq.json()
    
    return {
        props: {
            posts: articleData.docs || null,
            totalPages: articleData.totalPages,
            activeIndex: page - 1
        }
    }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}