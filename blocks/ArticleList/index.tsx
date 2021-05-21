import { Block } from 'payload/types'
import React from 'react'
import { Type as ArticleType } from '../../collections/Article'
import { PostList } from '../../components/layout/PostList'

export type Type = {
    blockType: 'articleList'
    blockName?: string
    items: {
        type: 'relation' | 'text'
        text?: string
        article?: {
            link: ArticleType
            expanded: boolean
        }
    }[]
}

export const ArticleList: Block = {
    slug: 'articleList',
    labels: {
        singular: 'Article List',
        plural: 'Article Lists'
    },
    fields: [
        {
            name: 'items',
            type: 'array',
            minRows: 0,
            maxRows: 20,
            fields: [
                {
                    name: 'type',
                    label: 'Type',
                    type: 'radio',
                    defaultValue: 'relation',
                    options: [
                        {
                            label: 'Relation',
                            value: 'relation'
                        },
                        {
                            label: 'Text',
                            value: 'text'
                        }
                    ]
                },
                {
                    name: 'text',
                    type: 'textarea',
                    admin: {
                        condition: (_, siblingData) => siblingData?.type === 'text'
                    }
                },
                {
                    type: 'group',
                    name: 'article',
                    fields: [
                        {
                            name: 'link',
                            label: 'Link',
                            type: 'relationship',
                            relationTo: 'articles'
                        },
                        {
                            name: 'expanded',
                            label: 'Expanded',
                            type: 'checkbox'
                        }
                    ],
                    admin: {
                        condition: (_, siblingData) => siblingData?.type === 'relation'
                    }
                }
            ]
        }
    ]
}

export const Component: React.FC<Type> = ( { items } ) => {

    return (
        <PostList items={items} />
    )
}