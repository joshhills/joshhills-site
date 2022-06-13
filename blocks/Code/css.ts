import { createUseStyles } from 'react-jss'
import { base } from '../../css/base'
import colors from '../../css/colors'
import fonts from '../../css/fonts'
import { borderSize } from '../../css/type'

export default createUseStyles({
    grid: {
        display: 'grid',
        maxWidth: '1200px',
        margin: '0 auto',
        gridGap: base(),
        gridTemplateColumns: '1fr'
    },
    codeWrapper: {
        margin: base(2),
        overflow: 'hidden'
    },
    name: {
        padding: base(2),
        borderTop: `${borderSize}rem solid ${colors.lightGrey}`,
        borderRight: `${borderSize}rem solid ${colors.lightGrey}`,
        borderLeft: `${borderSize}rem solid ${colors.lightGrey}`
    },
    code: {
        padding: base(2),
        margin: 0,
        border: `${borderSize}rem solid ${colors.lightGrey}`,
        fontFamily: fonts.code,
        overflowX: 'scroll',
        lineHeight: base(1.3)
    }
})