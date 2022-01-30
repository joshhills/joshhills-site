import Link from 'next/link'
import React from 'react'
import createUseStyles from './css'

type Props = {
    currentIndex: number
    totalPages: number
    baseUrl: string
    searchStr?: string
}

const Pagination: React.FC<Props> = ({ currentIndex, totalPages, baseUrl, searchStr }) => {

    const classes = createUseStyles()

    const items = []
    for (let i = 0; i < totalPages; i++) {
        
        items.push(
            <Link key={i} href={`${baseUrl}${i + 1 === 1 ? '' : `/${i + 1}`}${searchStr ? `?search=${searchStr}` : ''}`}>
                <a className={i === currentIndex ? classes.activeItem : classes.item}>{i + 1}</a>
            </Link>
        )
    } 

    return (
        <div className={classes.pagination}>
            <Link href={`${baseUrl}/${currentIndex - 1 === 0 ? '' : currentIndex}${searchStr ? `?search=${searchStr}` : ''}`}>
                <a className={`${classes.item} ${currentIndex === 0 ? classes.disabled : ''}`}>&lt;</a>
            </Link>
            {items}
            <Link href={`${baseUrl}/${currentIndex + 2}${searchStr ? `?search=${searchStr}` : ''}`}>
                <a className={`${classes.item} ${currentIndex === totalPages - 1 ? classes.disabled : ''}`}>&gt;</a>
            </Link>
        </div>
    )
}

export default Pagination