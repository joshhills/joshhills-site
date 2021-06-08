import { createUseStyles } from 'react-jss'
import { base } from '../../css/base'
import queries from '../../css/queries'

export default createUseStyles({
    grid: {
        display: 'grid',
        maxWidth: '1200px',
        margin: '0 auto',
        gridGap: base(),
        gridTemplateColumns: '1fr'
    },
    withPadding: {
        padding: base(2)
    },
    richText: {
        '& :last-child': {
            paddingBottom: 0,
            marginBottom: 0
        }
    }
})