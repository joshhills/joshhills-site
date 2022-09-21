import { GetServerSideProps } from "next"
import React, { useEffect, useState } from "react"
import { Component as RichText } from "../../blocks/RichText"
import { Type as ArticleType } from '../../collections/Article'
import Head from "../../components/Head"
import Cover from "../../components/layout/Cover"
import FeaturedPost from "../../components/layout/FeaturedPost"
import InsetC from "../../components/layout/InsetC"
import { PostList } from "../../components/layout/PostList"
import Template from "../../components/layout/Template"
import NotFound from "../../components/NotFound"
import Pagination from "../../components/Pagination"
import Search from "../../components/search"
import { formatLinkUrl } from "../../utilities/formatRelationUrl"
import createUseStyles from './css'
import qs from 'qs'
import { useRouter } from "next/router"
import Link from "next/link"

type Props = {
    posts: ArticleType[]
    totalPages: number
    searchStr?: string
}

const BlogIndex: React.FC<Props> = ({ posts, totalPages, searchStr }) => {

    if (!posts) {
        return <NotFound />
    }
    
    const router = useRouter()

    let [searchText, setSearchText] = useState(searchStr)

    const handleSearchText = (e) => {
        const newSearchStr = e.target.value
        setSearchText(newSearchStr)

        if (newSearchStr !== '') {
            router.push(`/blog?search=${encodeURI(newSearchStr)}`, null, { scroll: false })
        } else {
            router.push('/blog', null, { scroll: false })
        }
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

    if (searchStr !== '') {
        normalPosts.push(...posts.map((d) => { return {
            type: 'relation',
            article: {
                link: d,
                expanded: false,
                showImage: false,
                showDate: true
            }
        }}))
    } else {
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
                        richText: [{
                            "children": [
                              {
                                "text": "I'm teaching..."
                              }
                            ],
                            "type": "h5"
                          },
                          {
                            "children": [
                              {
                                "text": "workshops on game programming as a "
                              },
                              {
                                "type": "link",
                                "url": "https://joshhills.dev/role/workshop-instructor",
                                "newTab": false,
                                "children": [
                                  {
                                    "text": "video game ambassador"
                                  }
                                ]
                              },
                              {
                                "text": " to help aspiring students"
                              }
                            ],
                            "type": "p"
                          }]
                    }
                )
            }
    
            normalPosts.push(
                {
                    type: 'relation',
                    article: {
                        link: posts[i],
                        expanded: i === 6,
                        showImage: [2, 3, 5, 6, 7, 9].includes(i),
                        showDate: [2, 7].includes(i)
                    }
                }
            )
        }
    }


    return (
        <Template>
            <Head
                title='Blog'
                description='Tech writing'
            />

            <Cover contentWidth='half' backgroundImageSrc='/images/masthead-image-blog-orange.jpg' backgroundImageAlt='Me writing on a whiteboard'>
                <div className={classes.cover}>
                    <h1>Blog</h1>
                    <h5>Technological tattle and design documents written during various projects</h5>
                    <Search setSearchText={handleSearchText} searchText={searchText} />
                </div>
            </Cover>


            {searchText === '' && posts.length > 0 &&
                <FeaturedPost title={posts[0].title} excerpt={posts[0].excerpt} publishedDate={posts[0].publishedDate} url={formatLinkUrl('articles', posts[0].slug)} featuredMedia={posts[0].featuredMedia} />} 

            <div className={classes.page}>
                <div className={classes.grid}>
                    {posts.length === 0 && <div className={classes.notFound}>
                            <h5>Uh-oh</h5>
                            <p>No posts found {searchStr ? `for '${searchStr}'` : ''}</p>
                            <Link href={'/blog'}>
                                <a onClick={() => setSearchText('')}>Clear</a>
                            </Link>
                        </div>}
                    {<PostList items={normalPosts} />}
                </div>
                <InsetC insetTop={true} insetBottom={false} contentLeft={<RichText blockType='richText' content={contentLeft} />} backgroundColor='dark' />
                <div className={classes.grid}>
                    <Pagination currentIndex={0} totalPages={totalPages} baseUrl={`${process.env.NEXT_PUBLIC_SERVER_URL}/blog`} searchStr={searchStr} />
                </div>
            </div>
        </Template>
    )
}

export default BlogIndex

export const getServerSideProps: GetServerSideProps = async (ctx) => {

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
                },
                {
                    category: {
                        like: searchStr
                    }
                }
            ]
        }
        const stringifiedQuery = qs.stringify({
            where: query
          }, { addQueryPrefix: false })

        url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/articles?limit=11&sort=-publishedDate&${stringifiedQuery}`
    } else {
        url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/articles?limit=11&sort=-publishedDate`
    }

    const articleReq = await fetch(url)
    const articleData = await articleReq.json()

    if (!articleData || !articleData.docs) {
        return {
            redirect: {
                destination: '/404',
                permanent: false
            }
        }
    }

    return {
        props: {
            posts: articleData.docs || null,
            totalPages: articleData.totalPages,
            searchStr: searchStr ? searchStr : ''
        }
    }
}