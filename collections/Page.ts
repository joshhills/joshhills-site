import { CollectionConfig } from 'payload/types'
import { RichText, Type as RichTextType } from '../blocks/RichText'
import { Image, Type as ImageType } from '../blocks/Image'
import { Hero, Type as HeroType } from '../blocks/Hero'
import meta, { Type as MetaType } from '../fields/meta'
import slug from '../fields/slug'
import { ArticleList, Type as ArticleListType } from '../blocks/ArticleList'
import { RoleList, Type as RoleListType } from '../blocks/RoleList'

export type Layout = 
    HeroType | RichTextType | ImageType | ArticleListType | RoleListType

export type Type = {
    title: string,
    slug: string,
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
        ]
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
                RichText,
                Image,
                ArticleList,
                RoleList
            ],
        },
        slug,
        meta
    ]
}