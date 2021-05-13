import React from 'react'
import serialize from './serialize'
import { Block } from 'payload/types'
import backgroundColor, { Type as BackgroundColorType } from "../../fields/backgroundColor"

export type Type = {
    blockType: 'richText'
    blockName?: string,
    backgroundColor: BackgroundColorType
    content: unknown
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

export const Component: React.FC<Type> = ( { content } ) => {
  if (!content) {
    return null
  }

  return (
    <div>
      {serialize(content)}
    </div>
  )
}