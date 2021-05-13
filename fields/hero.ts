import { Field } from 'payload/types'
import { Type as MediaType } from '../collections/Media'
import { Button, Type as ButtonType } from '../blocks/Button'

export type Type = {
    heroType: 'half' | 'full'
    content: unknown
    fullScreen: boolean
    featuredImage?: MediaType
    actions: ButtonType[]
}

const hero: Field = {
    name: 'hero',
    type: 'group',
    fields: [
        {
            type: 'radio',
            name: 'heroType',
            label: 'Hero Content Width',
            required: true,
            defaultValue: 'half',
            options: [
                {
                    label: 'Half',
                    value: 'half',
                },
                {
                    label: 'Full',
                    value: 'full',
                }
            ]
        },
        {
            name: 'fullScreen',
            required: true,
            type: 'checkbox',
            label: 'Full Screen',
            defaultValue: false
        },
        {
            name: 'content',
            required: true,
            label: 'Content',
            type: 'richText'
        },
        {
            name: 'backgroundImage',
            label: 'Background Image',
            type: 'upload',
            relationTo: 'media'
        },
        {
            name: 'actions',
            label: 'Actions',
            type: 'blocks',
            minRows: 0,
            maxRows: 3,
            blocks: [
                Button
            ]
        }
    ]
}

export default hero