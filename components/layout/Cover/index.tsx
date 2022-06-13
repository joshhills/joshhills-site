import React from 'react'
import useStyles from './css'

type Props = {
    backgroundImageSrc?: string
    backgroundImageAlt?: string
    backgroundVideoSrc?: string
    fullScreen?: boolean
    contentWidth: 'half' | 'full'
}

const Cover: React.FC<Props> = ({ backgroundImageSrc, backgroundImageAlt, backgroundVideoSrc, fullScreen, contentWidth, children }) => {
  const classes = useStyles()

  return (
    <div className={fullScreen ? classes.coverFull : classes.cover}>
        {backgroundImageSrc && <img itemProp="image" className={classes.coverImage} src={backgroundImageSrc} alt={backgroundImageAlt} />}
        {backgroundVideoSrc && <video className={classes.video} poster={backgroundImageSrc} preload='auto' muted autoPlay loop playsInline disablePictureInPicture>
            <source type='video/mp4' src={backgroundVideoSrc}/>
        </video>}
        <div className={contentWidth === 'half' ? classes.gridHalf : classes.gridFull}>
                {contentWidth === 'half' && <div></div>}
                <div className={classes.coverContent}>
                    {children}
                </div>
        </div>
    </div>
  )
}

export default Cover
