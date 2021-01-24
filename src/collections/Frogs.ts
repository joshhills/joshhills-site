import { CollectionConfig } from 'payload/types';

const Frogs: CollectionConfig = {
    slug: 'frogs',
    labels: {
        singular: 'Frog',
        plural: 'Frogs'
    },
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true,
    },
    fields: [
        {
            name: 'name',
            label: 'Frog name',
            type: 'text'
        },
        {
            name: 'frogHats',
            label: 'Hat Styles',
            type: 'array',
            fields: [
                {
                    name: 'style',
                    label: 'Style',
                    type: 'text'
                },
                {
                    name: 'favourite',
                    label: 'Is this the frog\'s favourite hat?',
                    type: 'checkbox',
                    defaultValue: true
                }
            ]
        }
    ]
}

export default Frogs;