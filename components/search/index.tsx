import React from 'react'
import createUseStyles from './css'
import { FaSearch } from 'react-icons/fa'

type Props = {
    setSearchText: any
    searchText: string
}

const Search: React.FC<Props> = ({ setSearchText, searchText }) => {

    const classes = createUseStyles()

    return (
        <div className={classes.search}>
            <FaSearch className={classes.icon} />
            <input className={classes.input} placeholder='Search' type='text' value={searchText} onChange={setSearchText} />
        </div>
    )
}

export default Search