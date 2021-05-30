
import React from 'react'
import { Block } from 'payload/types'
import { Type as MediaType } from '../../collections/Media'
import createUseStyles from './css'

export type Type = {
  blockType: 'video'
  blockName?: string
  video: MediaType
  autoplay: boolean
  muted: boolean
  controls: boolean
}

export const Video: Block = {
  slug: 'video',
  labels: {
    singular: 'Video',
    plural: 'Videos'
  },
  fields: [
    {
      name: 'video',
      label: 'Video',
      type: 'upload',
      relationTo: 'media',
      required: true
    },
    {
      type: 'row',
      fields: [
        {
          name: 'autoplay',
          label: 'Autoplay',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            width: '33%'
          }
        },
        {
          name: 'muted',
          label: 'Muted',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            width: '33%'
          }
        },
        {
          name: 'controls',
          label: 'Controls',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            width: '33%'
          }
        }
      ]
    }
  ]
}

export const Component: React.FC<Type> = (props) => {

  const { video, autoplay, controls, muted } = props

  if (!video) {
    return null
  }

  const classes = createUseStyles()

  return (
    <video className={classes.video} preload='auto' muted={muted} autoPlay={autoplay} loop playsInline controls={controls} disablePictureInPicture>
      <source type='video/mp4' src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${video.filename}`} />
    </video>
  )
}