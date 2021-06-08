import React from 'react'
import { Component as RichText } from '../../../blocks/RichText'
import useStyles from './css'

type Props = {
    text: string
}

const TextPost: React.FC<Props> = ({ text }) => {
    const classes = useStyles()

    return (
        <div className={classes.post}>
            <div className={classes.wrapper}>
                <div className={classes.text}>
                    <RichText blockType='richText' content={text} withPadding={false} />
                </div>
            </div>
        </div>
    )
}

export default TextPost
