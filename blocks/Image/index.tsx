import React from 'react'
import { Block } from 'payload/types'
import { Type as MediaType } from '../../collections/Media'
import { Component as RichText } from '../../blocks/RichText'
import createUseStyles from './css'

export type Type = {
  blockType: 'image'
  blockName?: string
  image: MediaType
  caption?: any
  type: 'normal' | 'fullscreen'
}

export const Image: Block = {
  slug: 'image',
  labels: {
    singular: 'Image',
    plural: 'Images'
  },
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true
    },
    {
      name: 'type',
      label: 'Type',
      type: 'radio',
      defaultValue: 'normal',
      options: [
        {
          label: 'Normal',
          value: 'normal'
        },
        {
          label: 'Fullscreen',
          value: 'fullscreen'
        }
      ],
      admin: {
        layout: 'horizontal'
      }
    },
    {
      name: 'caption',
      label: 'Caption',
      type: 'richText',
      admin: {
        elements: [
          'link'
        ]
      }
    }
  ]
}

export const Component: React.FC<Type> = (props) => {
  const { image, type, caption } = props
  
  let emptyCaption = caption === undefined || caption && caption.length === 1 && caption[0].children && caption[0].children.length === 1 && caption[0].children[0].text === ''

  const classes = createUseStyles()

  if (typeof image === 'object') {
    let filenameToRender = image.filename
    if (image.sizes[type]) filenameToRender = image.sizes[type]

    return (
      <div className={classes.wrapper}>
        <img className={`${classes.image} ${type === 'fullscreen' ? classes.fullscreen : ''} ${emptyCaption ? classes.noCaption : classes.hasCaption }`}
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${filenameToRender}`}
          alt={image.alt}
        />
        {!emptyCaption &&
          <RichText
            blockType='richText'
            backgroundColor='none'
            content={caption}
          />}
      </div>
    )
  }

  return null
}