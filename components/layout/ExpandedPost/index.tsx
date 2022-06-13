import React, { useRef } from 'react'
import useStyles from './css'
import { Type as FeaturedMediaType } from '../../../fields/featuredMedia'
import dateFormat from 'dateformat'
import Link from 'next/link'
import formatMediaUrl from '../../../utilities/formatMediaUrl'
import formatSrcSet from '../../../utilities/formatSrcSet'
import formatSizes from '../../../utilities/formatSizes'

type Props = {
    title: string,
    publishedDate: string,
    featuredMedia: FeaturedMediaType,
    excerpt: string
    url: string
    dashed?: boolean
    company?: string
    dateRange?: {
      ongoing: boolean
      start: string
      end?: string
    }
    showImage?: boolean
    showDate?: boolean
}

const ExpandedPost: React.FC<Props> = ({ title, excerpt, publishedDate, featuredMedia, url, dashed, company, dateRange, showImage = true, showDate = true }) => {
  const classes = useStyles()
  const dateFormatStr = 'mmmm, yyyy'
  const videoRef = useRef<HTMLVideoElement>(null)

  const onMouseEnter = () => {
    if (videoRef?.current?.play) {
      videoRef.current.muted = true
      videoRef.current.currentTime = 0
      videoRef.current.play().catch()
    }
  }

  const onMouseLeave = () => {
    if (videoRef?.current?.pause) {
      videoRef.current.pause()
    }
  }

  let srcset = null
  let sizes = null
  
  if (featuredMedia?.image) {
    srcset = formatSrcSet(featuredMedia.image)
    sizes = formatSizes(featuredMedia.image)
  }

  return (
    <div className={classes.post} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className={`${classes.wrapper} ${dashed ? classes.dashed : ''}`}>
            <div className={classes.grid}>
                <div></div>
                <div>
                    <div className={classes.text}>
                        {showDate && (dateRange ? 
                            dateRange.ongoing ? 
                                <p className={classes.date}>Since {dateFormat(dateRange.start, dateFormatStr)}</p> :
                                <p className={classes.date}>{dateFormat(dateRange.start, dateFormatStr) === dateFormat(dateRange.end, dateFormatStr) ? dateFormat(dateRange.start, dateFormatStr) : `${dateFormat(dateRange.start, dateFormatStr)} to ${dateFormat(dateRange.end, dateFormatStr)}`}</p>
                            : 
                            <p className={classes.date}>{dateFormat(publishedDate, 'dd/mm/yy')}</p>)}
                        <Link href={url}>
                            <a className={classes.title}>{title}</a>
                        </Link>
                        {company && <p className={classes.date}>{company}</p>}
                        <p>{excerpt}</p>
                        <Link href={url}>
                            <a className={classes.cta}>Read more</a>
                        </Link>
                    </div>
                    {showImage && featuredMedia?.video && <video ref={videoRef} className={classes.video} preload='none' loop muted playsInline disablePictureInPicture>
                        <source type='video/mp4' src={formatMediaUrl(featuredMedia?.video)} />
                    </video>}
                    {showImage && featuredMedia?.image && <img className={classes.image} src={formatMediaUrl(featuredMedia?.image)} srcSet={srcset} sizes={sizes} />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExpandedPost
