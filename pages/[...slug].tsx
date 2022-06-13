import React from 'react'
import { GetServerSideProps } from 'next'
import { Type as PageType } from '../collections/Page'
import NotFound from '../components/NotFound'
import Head from '../components/Head'
import RenderBlocks from '../components/RenderBlocks'
import Template from '../components/layout/Template'
import createUseStyles from './css'

export type Props = {
  page?: PageType
  statusCode: number
}

const Page: React.FC<Props> = (props) => {

  const { page } = props
  const classes = createUseStyles()

  if (!page) {
    return <NotFound />
  }

  return (
    <Template>
      <Head
        title={page.meta?.title || page.title}
        description={page.meta?.description}
        keywords={page.meta?.keywords}
      />
      <div className={classes.page}>
        <RenderBlocks layout={page.layout} />
      </div>
    </Template>
  )
}

export default Page

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const slug = ctx.params?.slug || 'home'

  const pageReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=${slug}&depth=2`)
  const pageData = await pageReq.json()

  if (!pageData || !pageData.docs || !pageData.docs[0]) {
    return {
      redirect: {
          destination: '/404',
          permanent: false
      }
    }
  }

  return {
    props: {
      page: pageData.docs[0] || null,
    }
  }
}