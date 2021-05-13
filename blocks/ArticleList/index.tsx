import { Block } from 'payload/types'
import { Type as PageType } from '../../collections/Page'
import { Type as ArticleType } from '../../collections/Article'
import { Type as RoleType } from '../../collections/Role'
import { Type as MediaType } from '../../collections/Media'

export type Type = {
    blockType: 'articleList'
    blockName?: string
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

export const Component: React.FC<Type> = (props) => {

    return (
        <div>
            {JSON.stringify(props)}
        </div>
    )
}