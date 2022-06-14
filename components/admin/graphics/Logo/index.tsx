import React from 'react'
import createUseStyles from './css'

const Logo = () => {

    const classes = createUseStyles()

    return (
        <div className={classes.logoWrapper}>
            <img height="50px" width="50px" src="/images/joshhills-dev-logo-pride-plus.svg" alt="Josh Hills logo of the letter J in a square"/>
            <h2>Welcome back, Josh</h2>
        </div>
    )
}

export default Logo