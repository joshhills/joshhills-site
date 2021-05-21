import { Type as PageType } from '../collections/Page'
import { Type as ArticleType } from '../collections/Article'
import { Type as RoleType } from '../collections/Role'
import { Type as MediaType } from '../collections/Media'

type Relation = {
    relationTo: string
    value: PageType | ArticleType | RoleType | MediaType
}

export const formatLinkUrl = (type: string, slug: string): string => {
    switch(type) {
        case 'pages':
            return `${process.env.NEXT_PUBLIC_SERVER_URL}/${slug}`
        case 'articles':
            return `${process.env.NEXT_PUBLIC_SERVER_URL}/article/${slug}`
        case 'roles':
            return `${process.env.NEXT_PUBLIC_SERVER_URL}/role/${slug}`
        case 'media':
            return `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${slug}`
        default:
            return null
    }
}

export const formatRelationUrl = (relation: Relation): string => {
    return formatLinkUrl(relation.relationTo, relation.value.slug)
}