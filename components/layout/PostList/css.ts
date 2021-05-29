import { createUseStyles } from 'react-jss'
import { base } from '../../../css/base'
import queries from '../../../css/queries'

export default createUseStyles({
    postList: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: base(),
        [queries.s]: {
            padding: 0
        }
    },
    grid: {
        display: 'grid',
        maxWidth: '1200px',
        margin: '0 auto',
        gridGap: base(),
        gridTemplateColumns: '1fr'
    }
})