import { GetServerSideProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import qs from "qs"
import React, { useState } from "react"
import { Type as ArticleType } from '../../collections/Article'
import Head from "../../components/Head"
import Cover from "../../components/layout/Cover"
import { PostList } from "../../components/layout/PostList"
import Template from "../../components/layout/Template"
import NotFound from "../../components/NotFound"
import Pagination from "../../components/Pagination"
import Search from "../../components/search"
import createUseStyles from './css'

type Props = {
    posts: ArticleType[]
    totalPages: number
    activeIndex: number
    searchStr?: string
}

const BlogPage: React.FC<Props> = ({ posts, totalPages, activeIndex, searchStr }) => {

    if (!posts) {
        return <NotFound />
    }

    const router = useRouter()
    
    let [searchText, setSearchText] = useState(searchStr)

    const handleSearchText = (e) => {
        const newSearchStr = e.target.value.trim()
        setSearchText(newSearchStr)

        if (newSearchStr !== '') {
            router.push(`/blog?search=${encodeURI(newSearchStr)}`, null, { scroll: false })
        } else {
            router.push('/blog', null, { scroll: false })
        }
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

            <Cover contentWidth='half' backgroundImageSrc='/images/blog-cover.png' backgroundImageAlt='Me using a graphics tablet to design a game UI'>
                <div className={classes.cover}>
                    <h2>Blog</h2>
                    <h5>Technological tattle, design documents, and miscellaneous musings written during various projects</h5>
                    <Search setSearchText={handleSearchText} searchText={searchText} />
                </div>
            </Cover>


            <div className={classes.grid}>
                {posts.length === 0 && <div className={classes.notFound}>
                        <h5>Uh-oh</h5>
                        <p>No posts found {searchStr ? `for '${searchStr}'` : ''}</p>
                        <Link href={'/blog'}>
                            <a onClick={() => setSearchText('')}>Clear</a>
                        </Link>
                    </div>}
                <PostList items={items} />
                <Pagination currentIndex={activeIndex} totalPages={totalPages} baseUrl={`${process.env.NEXT_PUBLIC_SERVER_URL}/blog`} searchStr={searchStr} />
            </div>
        </Template>
    )
}

export default BlogPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const page = +ctx.params?.page

    const searchStr = ctx.query?.search

    let url
    if (searchStr) { 
        const query = {
            or: [
                {
                    title: {
                        like: searchStr
                    }
                },
                {
                    excerpt: {
                        like: searchStr
                    }
                }
            ]
        }
        const stringifiedQuery = qs.stringify({
            where: query
          }, { addQueryPrefix: false })

        url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/articles?limit=11&sort=-publishedDate&page=${page}&${stringifiedQuery}`
    } else {
        url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/articles?limit=11&sort=-publishedDate&page=${page}`
    }

    const articleReq = await fetch(url)
    const articleData = await articleReq.json()
    
    return {
        props: {
            posts: articleData.docs || null,
            totalPages: articleData.totalPages,
            activeIndex: page - 1,
            searchStr: searchStr ? searchStr : ''
        }
    }
}