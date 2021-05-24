import { createUseStyles } from 'react-jss'
import { base } from '../../../css/base'
import colors from '../../../css/colors'

export default createUseStyles({
    inset: {
        paddingBottom: base(2)
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