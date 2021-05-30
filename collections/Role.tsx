import React from 'react'
import { CollectionConfig } from 'payload/types'
import { Type as ArticleType } from './Article'
import featuredMedia, { Type as FeaturedMediaType } from '../fields/featuredMedia'
import slug from '../fields/slug'
import state from '../fields/state'

export type Type = {
    id?: string
    createdAt?: Date
    updatedAt?: Date
    title: string
    slug: string
    state: 'draft' | 'published'
    featuredMedia?: FeaturedMediaType
    location: {
        company: string
        link: string
    }
    date: {
        ongoing: boolean
        start: Date
        end?: Date
    }
    excerpt: string
    responsibilities: string
    achievements: string
    related?: {
        relationTo: 'articles'
        value: ArticleType
    }[]
}

export const Role: CollectionConfig = {
    slug: 'roles',
    admin: {
        useAsTitle: 'title',
        defaultColumns: [
            'title',
            'location'
        ],
        preview: (doc) => {
            if (doc?.slug) {
                return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/role/${doc.slug}`
            }

            return null
        }
    },
    access: {
        read: ({ req: { user } }) => {

            if (user) return true
            else {
                return {
                    state: {
                        equals: 'published'
                    }
                }
            }
        }
    },
    fields: [
        {
            name: 'title',
            label: 'Role Title',
            type: 'text',
            required: true
        },
        slug,
        state,
        featuredMedia,
        {
            name: 'location',
            label: 'Location',
            type: 'group',
            fields: [
                {
                    name: 'company',
                    label: 'Company',
                    type: 'text',
                    required: true
                },
                {
                    name: 'link',
                    label: 'Link',
                    type: 'text',
                    required: true
                }
            ],
            admin: {
                components: {
                    Cell: ({ cellData: { company } }: any) => <div>{company}</div>
                }
            }
        },
        {
            name: 'date',
            type: 'group',
            label: 'Date',
            required: true,
            fields: [
                {
                    name: 'ongoing',
                    label: 'Ongoing',
                    type: 'checkbox'
                },
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'start',
                            label: 'Start',
                            type: 'date',
                            required: true,
                            admin: {
                                date: {
                                    pickerAppearance: 'dayOnly'
                                },
                                width: '50%'
                            }
                        },
                        {
                            name: 'end',
                            label: 'End',
                            type: 'date',
                            admin: {
                                condition: (_, siblingData): boolean => !siblingData?.ongoing,
                                date: {
                                    pickerAppearance: 'dayOnly'
                                },
                                width: '50%'
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: 'excerpt',
            label: 'Excerpt',
            type: 'textarea',
            required: true
        },
        {
            name: 'responsibilities',
            label: 'Responsibilities',
            type: 'richText',
            required: true
        },
        {
            name: 'achievements',
            label: 'Achievements',
            type: 'richText',
            required: true
        },
        {
            name: 'related',
            label: 'Related Articles',
            type: 'relationship',
            relationTo: ['articles'],
            hasMany: true
        }
    ]
}

export default Role