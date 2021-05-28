import { createUseStyles } from 'react-jss'
import { base } from '../../../css/base'

export default createUseStyles({
    postList: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: base(),
    },
    grid: {
        display: 'grid',
        maxWidth: '1200px',
        margin: '0 auto',
        gridGap: base(),
        gridTemplateColumns: '1fr'
    }
})