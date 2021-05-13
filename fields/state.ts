import { Field } from 'payload/types'

export type Type = {
    state: 'draft' | 'published'
}

const state: Field = {
    name: 'state',
    label: 'State',
    type: 'select',
    options: [
        {
            label: 'Draft',
            value: 'draft'
        },
        {
            label: 'Published',
            value: 'published'
        }
    ],
    defaultValue: 'draft',
    admin: {
        position: 'sidebar'
    }
}

export default state