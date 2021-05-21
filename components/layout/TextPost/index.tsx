import React from 'react'
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
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default TextPost
