import React from 'react'
import { Props } from './types'
import useStyles from './css'
import Link from 'next/link'
import { ModalToggler } from '@faceless-ui/modal'
import { Component as LinkC } from '../../../fields/link'

const Header: React.FC<Props> = ({ menu }) => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <div className={classes.grid}>
        <div className={classes.content}>
          <div>
            <Link href="/">
              <a className={classes.iconContainer}>
                <img className={classes.icon} src="/images/joshhills-dev-logo-dark.svg" alt="Josh Hills logo of the letter J in a square"/>
                <p className={classes.iconText}>Josh Hills</p>
              </a>
            </Link>
          </div>
          <div className={classes.links}>
            {menu && menu.nav.map((l, i) => <LinkC key={i} {...l.link} relationTo="pages" />)}
          </div>
          <div className={classes.menu}>
            <ModalToggler slug="nav" className={classes.menuButton}>
                Menu
            </ModalToggler>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
