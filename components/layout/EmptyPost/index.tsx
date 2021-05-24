import React from 'react'
import createUseStyles from './css'

const EmptyPost: React.FC = () => {
    const classes = createUseStyles()

    return (
        <div className={classes.post}></div>
    )
}

export default EmptyPost
