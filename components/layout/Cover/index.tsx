import React from 'react'
import useStyles from './css'

type Props = {
    backgroundImageSrc?: string
    backgroundImageAlt?: string
    fullScreen?: boolean
    contentWidth: 'half' | 'full'
}

const Cover: React.FC<Props> = ({ backgroundImageSrc, backgroundImageAlt, fullScreen, contentWidth, children }) => {
  const classes = useStyles()

  return (
    <div className={fullScreen ? classes.coverFull : classes.cover}>
        {backgroundImageSrc && <img className={classes.coverImage} src={backgroundImageSrc} alt={backgroundImageAlt} />}
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
