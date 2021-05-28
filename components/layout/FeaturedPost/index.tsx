import React from 'react'
import useStyles from './css'
import { Type as MediaType } from '../../../collections/Media'
import Link from 'next/link'
import formatMediaUrl from '../../../utilities/formatMediaUrl'

type Props = {
    title: string,
    datePublished: Date,
    featuredMedia: MediaType,
    excerpt: string
    url: string
}

const FeaturedPost: React.FC<Props> = ({ title, excerpt, datePublished, featuredMedia, url }) => {
  const classes = useStyles()

  return (
    <div className={classes.post}>
        <div className={classes.grid}>
            <div></div>
            <div>
                <div className={classes.text}>
                    <p className={classes.date}>Latest</p>
                    <Link href={url}>
                        <a className={classes.title}>{title}</a>
                    </Link>
                    <p>{excerpt}</p>
                    <Link href={url}>
                        <a className={classes.cta}>Read more</a>
                    </Link>
                </div>
            </div>
        </div>
        <img className={classes.image} src={formatMediaUrl(featuredMedia)} />
    </div>
  )
}

export default FeaturedPost
