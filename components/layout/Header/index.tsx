import React from 'react'
import { Props } from './types'
import useStyles from './css'
import Link from 'next/link';
import GridContainer from '../GridContainer';
import { Cell, Grid } from '@faceless-ui/css-grid';

const Header: React.FC<Props> = () => {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <GridContainer>
        <Grid>
          <Cell cols={12}>
              <div className={classes.content}>
                <div>
                  <Link href="/">
                    <a className={classes.iconContainer}>
                      <img className={classes.icon} src="/images/joshhills-dev-logo.svg" alt="Josh Hills logo of the letter J in a square"/>
                      <p className={classes.iconText}>Josh Hills</p>
                    </a>
                  </Link>
                </div>
                <div>
                  Menu
                </div>
              </div>
          </Cell>
        </Grid>
      </GridContainer>
    </header>
  )
}

export default Header
