import React from 'react'
import Head from '../../components/Head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Type as RoleType } from '../../collections/Role'
import Template from '../../components/layout/Template'
import NotFound from '../../components/NotFound'
import dateFormat from 'dateformat'
import RenderBlocks from '../../components/RenderBlocks'
import ProjectDetails from '../../components/article/ProjectDetails'
import { Component as RichText } from '../../blocks/RichText'

export type Props = {
    role?: RoleType
}

const Role: React.FC<Props> = (props) => {

    const { role } = props

    if (!role) {
        return <NotFound />
    }

    // Get the featured media URLs
    const featuredImagePath = role.featuredMedia?.image?.sizes?.feature.filename
    const featuredImageUrl = featuredImagePath ? `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${featuredImagePath}` : null

    const dateFormatStr = 'mmmm, yyyy'

    return (
        <Template>
            <Head
                title={`${role.title} @ ${role.location.company}`}
                ogImage={featuredImageUrl}
            />

            {/* Hero */}
            <div>
                {featuredImagePath && <img src={featuredImageUrl}
                     alt={role.featuredMedia?.image.alt} />}
                <button>
                    Back
                </button>
                <h2>{role.title}</h2>
                <a href={role.location.link} target="_blank"><h3>{role.location.company}</h3></a>
                {role.date.ongoing ? 
                    <p>Since {dateFormat(role.date.start, dateFormatStr)}</p> :
                    <p>{dateFormat(role.date.start, dateFormatStr)} to {dateFormat(role.date.end, dateFormatStr)}</p>}
                <p>{role.description}</p>
            </div>
            
            {/* Content */}
            <h4>Responsibilities</h4>
            <RichText blockType='richText' backgroundColor='none' content={role.responsibilities} />
            <h4>Achievements</h4>
            <RichText blockType='richText' backgroundColor='none' content={role.achievements} />

            {/* Meta & Controls */}
            <div>
                <button>
                    Scroll Up
                </button>
                <button>
                    Copy link
                </button>
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

    const roleReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/roles?where[slug][equals]=${slug}`)
    const roleData = await roleReq.json()

    return {
        props: {
            role: roleData.docs[0] || null
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    const roleReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/roles?limit=100`)
    const roleData = await roleReq.json()

    return {
        paths: roleData.docs.map(({ slug }) => ({
            params: { slug: slug.split('/') },
        })),
        fallback: true
    }
}