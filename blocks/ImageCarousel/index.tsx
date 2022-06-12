import createUseStyles from './css'
import { Block } from "payload/types"
import { Type as MediaType } from '../../collections/Media'
import { Component as Image } from '../Image'
import React, { useEffect, useState } from 'react'
import { Component as RichText } from '../RichText'

export type Type = {
    blockType: 'imageCarousel'
    blockName?: string
    controls: {
        autoplay: boolean
    },
    images: {
        image: MediaType
        richCaption?: any
    }[]
}

export const ImageCarousel: Block = {
    slug: 'imageCarousel',
    labels: {
        singular: 'Image Carousel',
        plural: 'Image Carousels'
    },
    fields: [
        {
            type: 'group',
            label: 'Controls',
            name: 'controls',
            fields: [
                {
                    type: 'checkbox',
                    name: 'autoplay',
                    label: 'Autoplay',
                    defaultValue: true,
                    required: true
                }
            ]
        },
        {
            type: 'array',
            name: 'images',
            label: 'Images',
            minRows: 1,
            maxRows: 6,
            fields: [
                {
                    type: 'upload',
                    relationTo: 'media',
                    name: 'image',
                    required: true
                },
                {
                    type: 'richText',
                    name: 'richCaption',
                    label: 'Caption'
                }
            ]
        }
    ]
}

export const Component: React.FC<Type> = ({ controls: { autoplay }, images }) => {
    
    const classes = createUseStyles()
    
    const [activeIndex, setActiveIndex] = useState(0)
    const [resetAnimation, setResetAnimation] = useState(false)
    const [intervalId, setIntervalId] = useState(null)
    const activeImage = images[activeIndex]

    const setActiveIndexAndClearTimer = (i) => {
        if (autoplay && images.length > 1) {
            clearInterval(intervalId)
            setResetAnimation(true)
            requestAnimationFrame(() => setResetAnimation(false))
            setIntervalId(setInterval(advanceCarousel.bind(this), 13000))
        }

        setActiveIndex(i)
    }

    const advanceCarousel = () => {
        setActiveIndex((prevVal) => {
            if (prevVal + 1 > images.length - 1) {
                return 0
            } else return prevVal + 1
        })
    }
    
    useEffect(() => {
        if (autoplay && images.length > 1) {
            setIntervalId(setInterval(advanceCarousel.bind(this), 13000))
        }
    }, [])

    return (
        <div className={classes.carousel}>
            {autoplay && images.length > 1 && <div className={resetAnimation ? '' : classes.progressBar}></div>}
            <Image blockType='image' type='normal' image={activeImage.image} />
            {activeImage.richCaption && activeImage.richCaption.length && <div className={classes.tint}></div>}
            <div className={classes.grid}>
                <div className={classes.contentWrapper}>
                    <div>
                        {images.map((i, j) => <div key={j} onClick={() => setActiveIndexAndClearTimer(j)} className={`${classes.pip} ${j === activeIndex ? classes.pipActive : ''}`}>
                            <Image blockType='image' type='normal' image={i.image}/>
                        </div>)}
                    </div>
                    {activeImage.image && <div className={classes.caption}>
                        <RichText blockType='richText' content={activeImage.richCaption} withPadding={false} />
                    </div>}
                </div>
            </div>
        </div>
    )
}