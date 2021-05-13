import { Block } from 'payload/types'
import { Type as PageType } from '../../collections/Page'
import { Type as ArticleType } from '../../collections/Article'
import { Type as RoleType } from '../../collections/Role'
import { Type as MediaType } from '../../collections/Media'

export type Type = {
    blockType: 'button'
    blockName?: string
    type: 'relation' | 'custom'
    label: string,
    relation?: PageType | ArticleType | RoleType | MediaType,
    link?: string,
    style: 'button' | 'anchor'
}

export const Button: Block = {
    slug: 'button',
    labels: {
        singular: 'Button',
        plural: 'Buttons'
    },
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
                  label: 'Custom URL',
                  value: 'custom'
                }
            ]
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
                        width: '50%'
                    }
                },
                {
                    name: 'relation',
                    label: 'Relation',
                    type: 'relationship',
                    relationTo: ['pages', 'articles', 'media', 'roles'],
                    hasMany: false,
                    required: true,
                    admin: {
                        condition: (_, siblingData) => siblingData?.type === 'relation',
                        width: '50%'
                    }
                },
                {
                    name: 'url',
                    label: 'Custom URL',
                    type: 'text',
                    required: true,
                    admin: {
                        condition: (_, siblingData) => siblingData?.type === 'custom',
                        width: '50%'
                    }
                }
            ]
        },
        {
            name: 'style',
            label: 'Style',
            type: 'radio',
            required: true,
            defaultValue: 'button',
            options: [
                {
                  label: 'Button',
                  value: 'button'
                },
                {
                  label: 'Anchor',
                  value: 'anchor'
                }
            ]
        }
    ]
}

export const Component: React.FC<Type> = (props) => {

    return (
        <div>
            {JSON.stringify(props)}
        </div>
    )
}