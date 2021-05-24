import React from 'react'
import useStyles from './css'
import { Type as MediaType } from '../../../collections/Media'
import Link from 'next/link'
import formatMediaUrl from '../../../utilities/formatMediaUrl'
import GridContainer from '../GridContainer'
import { Cell, Grid } from '@faceless-ui/css-grid'

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
        <GridContainer>
            <Grid>
                <Cell cols={4}></Cell>
                <Cell cols={8}>
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
                </Cell>
            </Grid>
            <img className={classes.image} src={formatMediaUrl(featuredMedia)} />
        </GridContainer>
    </div>
  )
}

export default FeaturedPost
