
import React from 'react'
import { Modal } from "@faceless-ui/modal"
import createUseStyles from './css'
import GridContainer from '../layout/GridContainer'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { Component as LinkC } from '../../fields/link'

const NavModal = ({ menu }) => {

    const classes = createUseStyles()

    return (
        <Modal slug="nav" className={classes.nav}>
            {(props) => {
            const { modal: { closeAll } } = props;

            return (
                <GridContainer>
                    <Grid>
                        <Cell cols={12}>
                            <div className={classes.control}>
                                <div>
                                    <a className={classes.iconContainer}>
                                        <img className={classes.icon} src="/images/joshhills-dev-logo-light.svg" alt="Josh Hills logo of the letter J in a square"/>
                                        <p className={classes.iconText}>Josh Hills</p>
                                    </a>
                                </div>
                                <div>
                                    <button className={classes.back} onClick={() => closeAll()}>
                                        Close
                                    </button>
                                </div>
                            </div>
                            <div className={classes.links}>
                                {menu.nav.map((l, i) => <LinkC key={i} {...l.link} relationTo="pages" />)}
                            </div>
                        </Cell>
                    </Grid>
                </GridContainer>
            )}}
        </Modal>
    )
}

export default NavModal