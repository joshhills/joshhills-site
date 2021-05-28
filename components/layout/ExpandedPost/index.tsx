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
    excerpt: string
    url: string
    dashed?: boolean
    company?: string
    dateRange?: {
      ongoing: boolean
      start: Date
      end?: Date
    }
}

const ExpandedPost: React.FC<Props> = ({ title, excerpt, datePublished, featuredMedia, url, dashed, company, dateRange }) => {
  const classes = useStyles()
  const dateFormatStr = 'mmmm, yyyy'
  
  return (
    <div className={classes.post}>
        <div className={`${classes.wrapper} ${dashed ? classes.dashed : ''}`}>
            <div className={classes.grid}>
                <div></div>
                <div>
                    <div className={classes.text}>
                        {dateRange ? 
                            dateRange.ongoing ? 
                                <p className={classes.date}>Since {dateFormat(dateRange.start, dateFormatStr)}</p> :
                                <p className={classes.date}>{dateFormat(dateRange.start, dateFormatStr) === dateFormat(dateRange.end, dateFormatStr) ? dateFormat(dateRange.start, dateFormatStr) : `${dateFormat(dateRange.start, dateFormatStr)} to ${dateFormat(dateRange.end, dateFormatStr)}`}</p>
                            : 
                            <p className={classes.date}>{dateFormat(datePublished, 'dd/mm/yy')}</p>}
                        <Link href={url}>
                            <a className={classes.title}>{title}</a>
                        </Link>
                        {company && <p className={classes.date}>{company}</p>}
                        <p>{excerpt}</p>
                        <Link href={url}>
                            <a className={classes.cta}>Read more</a>
                        </Link>
                    </div>
                    <img className={classes.image} src={formatMediaUrl(featuredMedia)} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExpandedPost
