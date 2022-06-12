import { Field } from 'payload/types'
import Link from 'next/link'
import { Type as PageType } from '../collections/Page'
import { Type as ArticleType } from '../collections/Article'
import { Type as RoleType } from '../collections/Role'

export type Type = {
  type: 'relation' | 'custom'
  label: string,
  emphasised: boolean,
  url?: string
  relation?: {
    relationTo: string,
    value: ArticleType | RoleType | PageType
  },
  relationTo?: string
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
      name: 'emphasised',
      label: 'Emphasized',
      type: 'checkbox',
      defaultValue: true
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

export const Component: React.FC<any> = ( { type, emphasised, label, url, relation, relationTo } ) => {

  let component: JSX.Element

  if (relationTo) {
    if (type === 'relation') {
      let basePath = ''
      switch (relationTo) {
        case 'articles':
          basePath = 'article/'
          break
        case 'role':
          basePath = 'role/'
          break
      }
  
      component = <Link href={`${process.env.NEXT_PUBLIC_SERVER_URL}/${basePath}${relation.slug}`}>
        <a className={emphasised ? '' : 'deemphasised'}>{label}</a>
      </Link>
    } else if (type === 'custom') {
      component = <a href={url} className={emphasised ? '' : 'deemphasised'}>{label}</a>
    } else throw "Link was not of any expected type"
  } else {
    if (type === 'relation') {
      let basePath = ''
      switch (relation.relationTo) {
        case 'articles':
          basePath = 'article/'
          break
        case 'role':
          basePath = 'role/'
          break
      }
  
      component = <Link href={`${process.env.NEXT_PUBLIC_SERVER_URL}/${basePath}${relation.value.slug}`}>
        <a className={emphasised ? '' : 'deemphasised'}>{label}</a>
      </Link>
    } else if (type === 'custom') {
      component = <a href={url} className={emphasised ? '' : 'deemphasised'}>{label}</a>
    } else throw "Link was not of any expected type"
  }

  return component
}