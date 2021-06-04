import React from 'react'
import { Block } from 'payload/types'
import useStyles from './css'

export type Type = {
    blockType: 'code'
    blockName?: string
    name?: string
    code: string
}

export const Code: Block = {
    slug: 'code',
    labels: {
        singular: 'Code',
        plural: 'Code'
    },
    fields: [
        {
            name: 'name',
            label: 'File Name',
            type: 'text'
        },
        {
            name: 'code',
            label: 'Code',
            type: 'textarea',
            required: true
        }
    ]
}

export const Component: React.FC<Type> = ({ code, name }) => {
    const classes = useStyles()

    return (
        <div className={classes.grid}>
            <div className={classes.codeWrapper}>
                {name && <div className={classes.name}>
                    {name}
                </div>}
                <pre className={classes.code}>
                    {code}
                </pre>
            </div>
        </div>

    )
}