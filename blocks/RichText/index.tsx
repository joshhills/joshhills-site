import React from 'react'
import serialize from './serialize'
import { Block } from 'payload/types'
import backgroundColor, { Type as BackgroundColorType } from "../../fields/backgroundColor"
import useStyles from './css'

export type Type = {
    blockType: 'richText'
    blockName?: string,
    backgroundColor?: BackgroundColorType
    content: unknown
    withPadding?: boolean
}

export const RichText: Block = {
    slug: 'richText',
    labels: {
        singular: 'Rich Text',
        plural: 'Rich Text Blocks'
    },
    fields: [
        backgroundColor,
        {
            name: 'content',
            type: 'richText',
            label: 'Content',
            required: true
        }
    ]
}

export const Component: React.FC<Type> = ( { content, withPadding = true } ) => {
  if (!content) {
    return null
  }

  const classes = useStyles()

  return (
    <div className={classes.grid}>
      <div className={`${classes.richText} ${withPadding ? classes.withPadding : ''}`}>
        {serialize(content)}
      </div>
    </div>
  )
}