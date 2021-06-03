import React, { useRef } from 'react'
import useStyles from './css'
import { Type as FeaturedMediaType } from '../../../fields/featuredMedia'
import dateFormat from 'dateformat'
import Link from 'next/link'
import formatMediaUrl from '../../../utilities/formatMediaUrl'

type Props = {
    title: string
    publishedDate: string
    featuredMedia: FeaturedMediaType
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

const Post: React.FC<Props> = ({ title, publishedDate, featuredMedia, url, dashed, company, dateRange, showImage = true, showDate = true }) => {
  
  const videoRef = useRef<HTMLVideoElement>(null)

  const classes = useStyles()

  let featuredMediaSrc = null
  if (featuredMedia) {
    featuredMediaSrc = formatMediaUrl(featuredMedia?.image)
  }

  const dateFormatStr = 'mmmm, yyyy'

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

  return (
    <div className={classes.post}>
        <div className={`${classes.wrapper} ${dashed ? classes.dashed : ''}`}>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${classes.text} ${featuredMedia && showImage && classes.tint}`}>
                {showDate && (dateRange ? 
                  dateRange.ongoing ? 
                    <p className={classes.date}>Since {dateFormat(dateRange.start, dateFormatStr)}</p> :
                    <p className={classes.date}>{dateFormat(dateRange.start, dateFormatStr) === dateFormat(dateRange.end, dateFormatStr) ? dateFormat(dateRange.start, dateFormatStr) : `${dateFormat(dateRange.start, dateFormatStr)} to ${dateFormat(dateRange.end, dateFormatStr)}`}</p>
                  : 
                  showDate && <p className={classes.date}>{dateFormat(publishedDate, 'dd/mm/yy')}</p>)}
                <Link href={url}>
                    <a className={classes.title}>{title}</a>
                </Link>
                {company && <p className={classes.date}>{company}</p>}
                <Link href={url}>
                    <a className={classes.cta}>Read more</a>
                </Link>
            </div>
            {showImage && featuredMedia?.video && <video ref={videoRef} className={classes.video} preload='none' loop muted playsInline disablePictureInPicture>
                <source type='video/mp4' src={formatMediaUrl(featuredMedia?.video)} />
              </video>}
            {showImage && featuredMedia?.image && <img className={classes.image} src={featuredMediaSrc} alt={featuredMedia?.image?.alt} />}
        </div>
    </div>
  )
}

export default Post
