import { CollectionConfig } from 'payload/types'
import slug from '../fields/slug'
import { RichText, Type as RichTextType } from '../blocks/RichText'
import { Image, Type as ImageType } from '../blocks/Image'
import { Video, Type as VideoType } from '../blocks/Video'
import { Code, Type as CodeType } from '../blocks/Code'
import { Type as LinkType } from '../fields/link'
import { ImageCarousel, Type as ImageCarouselType } from '../blocks/ImageCarousel'
import featuredMedia, { Type as FeaturedMediaType } from '../fields/featuredMedia'
import state from '../fields/state'

export type Layout = RichTextType | ImageType | VideoType | ImageCarouselType | CodeType

export type Type = {
    id?: string
    createdAt?: string
    updatedAt?: string
    title: string
    featuredMedia?: FeaturedMediaType
    publishedDate?: string
    excerpt?: string
    slug: string
    state: 'draft' | 'published'
    content: Layout[]
    related?: {
        relationTo: 'articles'
        value: Type
    }[]
    category: 'general' | 'project'
    project?: {
        length?: string
        resources?: LinkType[]
    }
}

export const Article: CollectionConfig = {
    slug: 'articles',
    admin: {
        useAsTitle: 'title',
        defaultColumns: [
            'title',
            'publishedDate',
            'featuredMedia',
            'excerpt'
        ],
        preview: (doc, token) => {

            if (doc?.slug) {
                return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/article/${doc.slug}?preview=true`
            }

            return null
        }
    },
    access: {
        read: ({ req: { query ,user } }) => {

            if (user) return true
            else if (query && query.preview) return true
            else {
                return {
                    and: [
                        {
                            state: {
                                equals: 'published'
                            }
                        },
                        {
                            publishedDate: {
                                less_than: Date.now()
                            }
                        }
                    ]
                }
            }
        }
    },
    fields: [
        {
            name: 'title',
            label: 'Article Title',
            type: 'text',
            required: true
        },
        featuredMedia,
        state,
        {
            name: 'publishedDate',
            label: 'Date Published',
            type: 'date',
            defaultValue: new Date().toISOString(),
            admin: {
                date: {
                    pickerAppearance: 'dayOnly'
                }
            }
        },
        {
            name: 'excerpt',
            label: 'Excerpt',
            type: 'textarea'
        },
        {
            name: 'project',
            label: 'Project Meta',
            type: 'group',
            fields: [
                {
                    name: 'length',
                    type: 'text',
                    label: 'Project Length',
                },
                {
                    name: 'resources',
                    type: 'array',
                    label: 'Resource List',
                    minRows: 0,
                    maxRows: 4,
                    labels: {
                        singular: 'Resource',
                        plural: 'Resources',
                    },
                    fields: [
                        {
                            name: 'type',
                            type: 'radio',
                            options: [
                                {
                                    label: 'Relation',
                                    value: 'relation',
                                  },
                                {
                                    label: 'Custom URL',
                                    value: 'custom',
                                }
                            ],
                            defaultValue: 'relation',
                            admin: {
                                layout: 'horizontal',
                            }
                        },
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'label',
                                    label: 'Label',
                                    type: 'text',
                                    required: true,
                                    admin: {
                                      width: '50%',
                                    },
                                  },
                                  {
                                    name: 'relation',
                                    label: 'Relation',
                                    type: 'relationship',
                                    relationTo: ['articles', 'pages'],
                                    hasMany: false,
                                    required: true,
                                    admin: {
                                      condition: (_, siblingData) => siblingData?.type === 'relation',
                                      width: '50%',
                                    },
                                  },
                                  {
                                    name: 'url',
                                    label: 'Custom URL',
                                    type: 'text',
                                    required: true,
                                    admin: {
                                      condition: (_, siblingData) => siblingData?.type === 'custom',
                                      width: '50%',
                                    },
                                  }
                            ]
                        }
                    ]
                }
            ],
            admin: {
                condition: (_, siblingData) => siblingData?.category === 'project'
            }
        },
        slug,
        {
            name: 'content',
            label: 'Content',
            type: 'blocks',
            minRows: 1,
            blocks: [
                RichText,
                Code,
                Image,
                Video,
                ImageCarousel
            ]
        },
        {
            name: 'related',
            label: 'Related Articles',
            type: 'relationship',
            relationTo: ['articles'],
            hasMany: true
        },
        {
            name: 'category',
            label: 'Category',
            type: 'select',
            required: true,
            defaultValue: 'general',
            options: [
                {
                    label: 'General',
                    value: 'general'
                },
                {
                    label: 'Project',
                    value: 'project'
                }
            ],
            admin: {
                position: 'sidebar'
            }
        }
    ]
}

export default Article