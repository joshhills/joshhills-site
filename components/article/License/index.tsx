import React from 'react'
import { Component as Link, Type as LinkType } from '../../../fields/link'
import createUseStyles from './css'

type Type = {
    length?: string
    resources?: LinkType[]
}

const License = () => {
    const classes = createUseStyles()

    return (
        <a rel="license" href="/attributions" className={classes.license}>
            <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" />
        </a>
    )
}

export default License