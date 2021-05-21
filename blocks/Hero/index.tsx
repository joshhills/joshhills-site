import React from 'react'
import { Block } from 'payload/types'
import hero, { Type as HeroType } from '../../fields/hero'
import Cover from '../../components/layout/Cover'
import { Component as RichText } from '../RichText'
import { Component as Button } from '../Button'
import createUseStyles from './css'

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

    const classes = createUseStyles()

    // Get the background media details
    const backgroundImagePath = hero.backgroundImage?.filename
    const backgroundImageUrl = backgroundImagePath ? `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${backgroundImagePath}` : null

    return (
        <Cover backgroundImageSrc={backgroundImageUrl} backgroundImageAlt={hero.backgroundImage?.alt} fullScreen={hero.fullScreen} contentWidth={hero.contentWidth}>
            <RichText blockType='richText' backgroundColor='none' content={hero.content} />
            <div className={classes.actions}>
                {hero.actions?.map((a, i) => <Button key={i} {...a}/>)}
            </div>
        </Cover>
    )
}