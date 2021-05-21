import { Grid, Cell } from '@faceless-ui/css-grid'
import React from 'react'
import GridContainer from '../GridContainer'
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
        <GridContainer>
            <Grid>
                {contentWidth === 'half' && <Cell cols={5}></Cell>}
                <Cell cols={contentWidth === 'half' ? 7 : 12}>
                    <div className={classes.coverContent}>
                        {children}
                    </div>
                </Cell>
            </Grid>
        </GridContainer>
    </div>
  )
}

export default Cover
