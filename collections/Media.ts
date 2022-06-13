import { CollectionConfig } from 'payload/types'

export type Type = {
  width: number
  height: number
  id?: string
  createdAt?: string
  updatedAt?: string
  filename: string
  slug: string
  alt: string
  sizes: {
    thumbnail?: {
      filename: string
      width: number
      height: number
    }
    card?: {
      filename: string
      width: number
      height: number
    }
    feature?: {
      filename: string
      width: number
      height: number
    }
  }
}

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  upload: {
    staticDir: `${process.env.PAYLOAD_UPLOADS_PATH}`,
    adminThumbnail: 'card',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 160,
        height: 120,
      },
      {
        name: 'card',
        width: 640,
        height: 480,
      },
      {
        name: 'feature',
        width: 1024,
        height: 576,
      }
    ]
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    }
  ]
};

export default Media
