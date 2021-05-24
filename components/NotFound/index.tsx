import React from 'react'
import createUseStyles from './css'

const NotFound: React.FC = () => {

    const classes = createUseStyles()

    return (
        <div className={classes.notFound}>
            <h2>404</h2>
            <h3>Not Found</h3>
        </div>
    )
}

export default NotFound