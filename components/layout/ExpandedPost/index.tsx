import React from 'react'
import useStyles from './css'
import { Type as MediaType } from '../../../collections/Media'
import dateFormat from 'dateformat'
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

const ExpandedPost: React.FC<Props> = ({ title, excerpt, datePublished, featuredMedia, url }) => {
  const classes = useStyles()

  return (
    <div className={classes.post}>
        <div className={classes.wrapper}>
            <GridContainer>
                <Grid>
                    <Cell cols={6}></Cell>
                    <Cell cols={6}>
                        <div className={classes.text}>
                            <p className={classes.date}>{dateFormat(datePublished, 'dd/mm/yy')}</p>
                            <Link href={url}>
                                <a className={classes.title}>{title}</a>
                            </Link>
                            <p>{excerpt}</p>
                            <Link href={url}>
                                <a className={classes.cta}>Read more</a>
                            </Link>
                        </div>
                        <img className={classes.image} src={formatMediaUrl(featuredMedia)} />
                    </Cell>
                </Grid>
            </GridContainer>
        </div>
    </div>
  )
}

export default ExpandedPost
