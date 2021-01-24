import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        staticURL: '/cms/media',
        staticDir: '/usr/app/payload-uploads'
    },
    fields: [
        {
            label: 'Alt Text',
            name: 'alt',
            type: 'text',
        }
    ]
}

export default Media;