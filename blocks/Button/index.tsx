import { Block } from 'payload/types'
import { Type as PageType } from '../../collections/Page'
import { Type as ArticleType } from '../../collections/Article'
import { Type as RoleType } from '../../collections/Role'
import { Type as MediaType } from '../../collections/Media'
import useStyles from './css'
import * as FontAwesome from 'react-icons/fa'
import React from 'react'
import Link from 'next/link'
import { formatRelationUrl } from '../../utilities/formatRelationUrl'

export type Type = {
    blockType: 'button'
    blockName?: string
    icon?: string
    type: 'relation' | 'custom'
    label: string
    relation?: {
        relationTo: string
        value: PageType | ArticleType | RoleType | MediaType
    }
    url?: string
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
                    name: 'icon',
                    label: 'Icon',
                    type: 'text',
                    admin: {
                        width: '50%'
                    }
                },
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
                    relationTo: ['pages', 'articles', 'roles', 'media'],
                    hasMany: false,
                    required: true,
                    admin: {
                        condition: (_, siblingData) => siblingData?.type === 'relation',
                        width: '100%'
                    }
                },
                {
                    name: 'url',
                    label: 'Custom URL',
                    type: 'text',
                    required: true,
                    admin: {
                        condition: (_, siblingData) => siblingData?.type === 'custom',
                        width: '100%'
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

export const Component: React.FC<Type> = ( { icon, type, label, relation, url, style } ) => {

    const classes = useStyles()
    const className = style === 'anchor' ? classes.link : classes.button

    let element = <a className={className} {...type === 'custom' && { href: url }}>
        {icon && <span className={classes.icon}>{React.createElement(FontAwesome[icon])}</span>}
        {label}
    </a>

    if (type === 'relation') {
        
        const relationUrl = formatRelationUrl(relation)

        element = <Link href={relationUrl}>
            {element}
        </Link>
    }

    return element
}