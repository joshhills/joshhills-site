import React, { useRef } from 'react'
import useStyles from './css'
import { Type as FeaturedMediaType } from '../../../fields/featuredMedia'
import Link from 'next/link'
import formatMediaUrl from '../../../utilities/formatMediaUrl'

type Props = {
    title: string,
    datePublished: Date,
    featuredMedia: FeaturedMediaType,
    excerpt: string
    url: string
}

const FeaturedPost: React.FC<Props> = ({ title, excerpt, datePublished, featuredMedia, url }) => {
  const classes = useStyles()

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

  return (
    <div className={classes.post} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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
        {featuredMedia?.video && <video ref={videoRef} className={classes.video} preload='none' loop muted playsInline disablePictureInPicture>
            <source type='video/mp4' src={formatMediaUrl(featuredMedia?.video)} />
        </video>}
        {featuredMedia?.image && <img className={classes.image} src={formatMediaUrl(featuredMedia?.image)} />}
    </div>
  )
}

export default FeaturedPost
