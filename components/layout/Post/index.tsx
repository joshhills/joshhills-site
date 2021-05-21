import React from 'react'
import useStyles from './css'
import { Type as MediaType } from '../../../collections/Media'
import dateFormat from 'dateformat'
import Link from 'next/link'
import formatMediaUrl from '../../../utilities/formatMediaUrl'

type Props = {
    title: string,
    datePublished: Date,
    featuredMedia: MediaType,
    url: string
}

const Post: React.FC<Props> = ({ title, datePublished, featuredMedia, url }) => {
  const classes = useStyles()

  return (
    <div className={classes.post}>
        <div className={classes.wrapper}>
            <div className={`${classes.text} ${featuredMedia && classes.tint}`}>
                <p className={classes.date}>{dateFormat(datePublished, 'dd/mm/yy')}</p>
                <Link href={url}>
                    <a className={classes.title}>{title}</a>
                </Link>
                <Link href={url}>
                    <a className={classes.cta}>Read more</a>
                </Link>
            </div>
            <img className={classes.image} src={formatMediaUrl(featuredMedia)} />
        </div>
    </div>
  )
}

export default Post
