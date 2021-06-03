import { Block } from 'payload/types'
import React from 'react'
import { Type as RoleType } from '../../collections/Role'
import { PostList } from '../../components/layout/PostList'

export type Type = {
    blockType: 'roleList'
    blockName?: string
    items: {
        type: 'relation' | 'text'
        text?: string
        role?: {
            link: RoleType
            expanded: boolean
            showImage: boolean
            showDate: boolean
        }
    }[]
}

export const RoleList: Block = {
    slug: 'roleList',
    labels: {
        singular: 'Role List',
        plural: 'Role Lists'
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
                    name: 'role',
                    fields: [
                        {
                            name: 'link',
                            label: 'Link',
                            type: 'relationship',
                            relationTo: 'roles'
                        },
                        {
                            name: 'expanded',
                            label: 'Expanded',
                            type: 'checkbox',
                            defaultValue: false
                        },
                        {
                            name: 'showImage',
                            label: 'Show Image',
                            type: 'checkbox',
                            defaultValue: true
                        },
                        {
                            name: 'showDate',
                            label: 'Show Date',
                            type: 'checkbox',
                            defaultValue: true
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

export const Component: React.FC<Type> = ({ items }) => {

    return (
        <PostList items={items} />
    )
}