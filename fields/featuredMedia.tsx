import React from 'react'
import { Field } from 'payload/types'
import { Type as MediaType } from '../collections/Media'

export type Type = {
    image?: MediaType,
    video?: MediaType
}

const featuredMedia: Field = {
    name: 'featuredMedia',
    label: 'Featured Media',
    type: 'group',
    admin: {
        components: {
            Cell: ({ rowData: { featuredMedia } }: any) => {

                const imagePath = featuredMedia?.image?.sizes?.thumbnail?.filename

                if (!imagePath) {
                    return <div></div>
                }

                return <img
                        src={`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/media/${imagePath}`}
                        alt={featuredMedia.image.alt} />
            }
        }
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'image',
                    label: 'Image',
                    type: 'upload',
                    relationTo: 'media',
                    admin: {
                        width: '50%'
                    }
                },
                {
                    name: 'video',
                    label: 'Video',
                    type: 'upload',
                    relationTo: 'media',
                    admin: {
                        width: '50%'
                    }
                }
            ]
        }
    ]
}

export default featuredMedia