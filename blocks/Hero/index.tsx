import React from 'react'
import { Block } from 'payload/types'
import hero, { Type as HeroType } from '../../fields/hero'

export type Type = {
    blockType: 'hero'
    blockName?: string
    hero: HeroType
}

export const Hero: Block = {
    slug: 'hero',
    labels: {
        singular: 'Hero',
        plural: 'Heroes'
    },
    fields: [
        hero
    ]
}

export const Component: React.FC<Type> = ({ hero }) => {
    if (!hero) {
        return null
    }

    return (
        <div>
            {JSON.stringify(hero)}
        </div>
    )
}