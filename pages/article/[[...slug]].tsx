import Head from '../../components/Head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Type as ArticleType } from '../../collections/Article'
import Template from '../../components/layout/Template'
import NotFound from '../../components/NotFound'

export type Props = {
    article?: ArticleType
}

const Article: React.FC<Props> = (props) => {

    const { article } = props

    if (!article) {
        return <NotFound />
    }

    return (
        <Template>
            <Head
                title={article.title}
            />
            <div>
                {JSON.stringify(article)}
            </div>

            {/* Hero */}
            <div>
                
            </div>
            
            {/* Content */}
            <div>

            </div>

            {/* Meta & Controls */}
            <div>

            </div>
        </Template>
    )
}

export default Article

export const getStaticProps: GetStaticProps = async (ctx) => {

    const slug = ctx.params?.slug

    if (!slug) {
        return {
            props: {
                article: null
            }
        }
    }

    const articleReq = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/articles?where[slug][equals]=${slug}`)
    const articleData = await articleReq.json()

    return {
        props: {
            article: articleData.docs[0] || null
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    const articleReq = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/articles?limit=100`)
    const articleData = await articleReq.json()

    return {
        paths: articleData.docs.map(({ slug }) => ({
            params: { slug: slug.split('/') },
        })),
        fallback: true
    }
}