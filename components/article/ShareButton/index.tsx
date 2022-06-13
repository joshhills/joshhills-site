import React, { useState } from 'react'
import { FaLink } from 'react-icons/fa'
import createUseStyles from './css'

type Props = {
    title: string 
    url: string
}

const SHARE_MESSAGE_TIMEOUT_MS = 3000

const ShareButton = ({ title, url }: Props) => {

    const classes = createUseStyles()

    const [buttonText, setButtonText] = useState('Share')
    let shareTimeout = null

    const triggerShare = () => {
        
        // Don't share if waiting on timeout
        if (shareTimeout) {
            return
        }

        if (navigator.share) {
            navigator.share({
                title: title,
                url: url
            })

            setButtonText('Thanks!')
        } else {
            navigator.clipboard.writeText(url)
            setButtonText('Link copied!')
        }
        
        shareTimeout = setTimeout(() => {
            setButtonText('Share')
            shareTimeout = null
        }, SHARE_MESSAGE_TIMEOUT_MS)
    }

    return (
        <button className={classes.button} onClick={triggerShare}>
            <span className={classes.icon}><FaLink /></span>{buttonText}
        </button>
    )
}

export default ShareButton