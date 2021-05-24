import React from 'react'
import { Block } from 'payload/types'
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor'
import { Component as RichText } from '../RichText'
import InsetC from '../../components/layout/InsetC'

export type Type = {
    blockType: 'inset'
    blockName?: string
    insetTop: boolean
    insetBottom: boolean
    backgroundColor: BackgroundColorType
    contentLeft: unknown
    contentRight?: unknown
}

export const Inset: Block = {
    slug: 'inset',
    labels: {
        singular: 'Inset',
        plural: 'Insets'
    },
    fields: [
        {
            type: 'checkbox',
            name: 'insetTop',
            label: 'Inset Top',
            defaultValue: false
        },
        {
            type: 'checkbox',
            name: 'insetBottom',
            label: 'Inset Bottom',
            defaultValue: false
        },
        backgroundColor,
        {
            type: 'richText',
            name: 'contentLeft',
            label: 'Content Left',
            required: true
        },
        {
            type: 'richText',
            name: 'contentRight',
            label: 'Content Right',
        }
    ]
}

export const Component: React.FC<Type> = ({ insetTop, insetBottom, contentLeft, contentRight, backgroundColor }) => {

    const contentLeftRichText = <RichText blockType='richText' content={contentLeft} />
    const contentRightRichText = <RichText blockType='richText' content={contentRight} />

    return <InsetC insetTop={insetTop} insetBottom={insetBottom} contentLeft={contentLeftRichText} contentRight={contentRightRichText} backgroundColor={backgroundColor} />
}