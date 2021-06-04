import { CollectionConfig } from 'payload/types'
import { RichText, Type as RichTextType } from '../blocks/RichText'
import { Image, Type as ImageType } from '../blocks/Image'
import { Video, Type as VideoType } from '../blocks/Video'
import { Hero, Type as HeroType } from '../blocks/Hero'
import { Code, Type as CodeType } from '../blocks/Code'
import meta, { Type as MetaType } from '../fields/meta'
import slug from '../fields/slug'
import { ArticleList, Type as ArticleListType } from '../blocks/ArticleList'
import { RoleList, Type as RoleListType } from '../blocks/RoleList'
import { Inset, Type as InsetType } from '../blocks/Inset'
import { ImageCarousel, Type as ImageCarouselType } from '../blocks/ImageCarousel'

export type Layout = 
    HeroType | RichTextType | ImageType | VideoType | ImageCarouselType | ArticleListType | RoleListType | InsetType | CodeType

export type Type = {
    id?: string
    createdAt?: string
    updatedAt?: string
    title: string
    slug: string
    layout: Layout[]
    meta: MetaType
}

export const Page: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
        defaultColumns: [
            'title',
            'slug',
            'meta.description'
        ],
        preview: (doc) => {
            if (doc?.slug) {
                return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${doc.slug}`
            }

            return null
        }
    },
    access: {
        read: (): boolean => true // Everyone can read Pages
    },
    fields: [
        {
            name: 'title',
            label: 'Page Title',
            type: 'text',
            required: true
        },
        {
            name: 'layout',
            label: 'Page Layout',
            type: 'blocks',
            minRows: 1,
            blocks: [
                Hero,
                Inset,
                RichText,
                Image,
                Video,
                ImageCarousel,
                ArticleList,
                RoleList,
                Code
            ]
        },
        slug,
        meta
    ]
}