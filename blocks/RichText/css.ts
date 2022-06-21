import { createUseStyles } from 'react-jss'
import { base } from '../../css/base'
import colors from '../../css/colors'
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
        padding: base(2),
        [queries.s]: {
            paddingLeft: base(1),
            paddingRight: base(1)
        }
    },
    richText: {
        '& :last-child': {
            paddingBottom: 0,
            marginBottom: 0
        }
    },
    light: {
        backgroundColor: colors.lightGrey,
        color: colors.white
    },
    dark: {
        backgroundColor: colors.black,
        color: colors.white
    }
})