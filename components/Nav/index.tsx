
import React from 'react'
import { Modal } from "@faceless-ui/modal"
import createUseStyles from './css'
import { Component as LinkC } from '../../fields/link'

const NavModal = ({ menu }) => {

    const classes = createUseStyles()

    return (
        <Modal slug="nav" className={classes.nav}>
            {(props) => {
            const { modal: { closeAll } } = props;

            return (
                <div className={classes.grid}>
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
                        {menu.nav && menu.nav.map((l, i) => <LinkC key={i} {...l.link} relationTo="pages" />)}
                    </div>
                </div>
            )}}
        </Modal>
    )
}

export default NavModal