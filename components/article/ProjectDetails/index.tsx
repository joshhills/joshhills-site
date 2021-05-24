import React from 'react'
import { Component as Link, Type as LinkType } from '../../../fields/link'
import createUseStyles from './css'

type Type = {
    length?: string
    resources?: LinkType[]
}

const ProjectDetails = ( { length, resources }: Type) => {
    const classes = createUseStyles()

    return (
        <div className={classes.projectDetails}>
        {resources?.length > 0 &&
            <div>
                <h4 className={classes.title}>Resources</h4>
                <ul>
                    {resources.map((r, i) => <li key={i}><Link {...r} /></li>)}
                </ul>
            </div>}
        </div>
    )
}

export default ProjectDetails