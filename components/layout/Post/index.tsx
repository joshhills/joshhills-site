import React from 'react'
import useStyles from './css'
import { Type as MediaType } from '../../../collections/Media'
import dateFormat from 'dateformat'
import Link from 'next/link'
import formatMediaUrl from '../../../utilities/formatMediaUrl'

type Props = {
    title: string
    datePublished: Date
    featuredMedia: MediaType
    url: string
    dashed?: boolean
    company?: string
    dateRange?: {
      ongoing: boolean
      start: Date
      end?: Date
    }
    showImage?: boolean
    showDate?: boolean
}

const Post: React.FC<Props> = ({ title, datePublished, featuredMedia, url, dashed, company, dateRange, showImage = true, showDate = true }) => {
  const classes = useStyles()

  let featuredMediaSrc = null
  if (featuredMedia) {
    featuredMediaSrc = formatMediaUrl(featuredMedia)
  }

  const dateFormatStr = 'mmmm, yyyy'

  return (
    <div className={classes.post}>
        <div className={`${classes.wrapper} ${dashed ? classes.dashed : ''}`}>
            <div className={`${classes.text} ${featuredMedia && classes.tint}`}>
                {dateRange ? 
                  dateRange.ongoing ? 
                    <p className={classes.date}>Since {dateFormat(dateRange.start, dateFormatStr)}</p> :
                    <p className={classes.date}>{dateFormat(dateRange.start, dateFormatStr) === dateFormat(dateRange.end, dateFormatStr) ? dateFormat(dateRange.start, dateFormatStr) : `${dateFormat(dateRange.start, dateFormatStr)} to ${dateFormat(dateRange.end, dateFormatStr)}`}</p>
                  : 
                  showDate && <p className={classes.date}>{dateFormat(datePublished, 'dd/mm/yy')}</p>}
                <Link href={url}>
                    <a className={classes.title}>{title}</a>
                </Link>
                {company && <p className={classes.date}>{company}</p>}
                <Link href={url}>
                    <a className={classes.cta}>Read more</a>
                </Link>
            </div>
            {showImage && featuredMedia && <img className={classes.image} src={featuredMediaSrc} alt={featuredMedia?.alt} />}
        </div>
    </div>
  )
}

export default Post
