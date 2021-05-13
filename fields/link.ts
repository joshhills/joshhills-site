import { Field } from 'payload/types';

export type Type = {
  type: 'relation' | 'custom'
  label: string
  url?: string
}

const link: Field = {
  name: 'link',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'radio',
      options: [
        {
          label: 'Relation',
          value: 'relation',
        },
        {
          label: 'Custom URL',
          value: 'custom',
        },
      ],
      defaultValue: 'relation',
      admin: {
        layout: 'horizontal'
      }
    },
    {
      type: 'row',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          }
        },
        {
          name: 'relation',
          label: 'Relation',
          type: 'relationship',
          relationTo: 'pages',
          hasMany: false,
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'relation',
            width: '50%'
          },
        },
        {
          name: 'url',
          label: 'Custom URL',
          type: 'text',
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'custom',
            width: '50%'
          },
        }
      ]
    }
  ]
}

export default link
