import { createUseStyles } from 'react-jss'
import { base } from '../../../css/base'
import colors from '../../../css/colors'
import queries from '../../../css/queries'

export default createUseStyles({
    grid: {
        display: 'grid',
        maxWidth: '1200px',
        margin: '0 auto',
        gridGap: base(),
        gridTemplateColumns: '2fr 1fr',
        [queries.m]: {
            gridTemplateColumns: '1fr'
        }
    },
    inset: {
        paddingBottom: base(2),
        '& *:first-child': {
            marginTop: 0
        }
    },
    insetTop: {
        marginTop: `-${base(4)}`,
        paddingTop: base(2)
    },
    insetBottom: {
        marginBottom: `-${base(4)}`,
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