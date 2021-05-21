import { createUseStyles } from 'react-jss'
import { borderSize } from '../../css/type'
import { base, baseVal } from '../../css/base'
import { relative } from 'path'

const shared = {
    marginRight: base(),
    marginBottom: base(),
    display: 'inline-block',
    fontWeight: 'bold',
    '&:hover': {
        cursor: 'pointer'
    }
}

export default createUseStyles({
    button: {
        ...shared,
        background: 'none',
        border: `${borderSize}rem solid`,
        padding: base(),
        textDecoration: 'none'
    },
    link: {
        ...shared,
        border: 'none',
        padding: `${baseVal() + borderSize}rem`,
        textDecoration: 'underline'
    },
    icon: {
        paddingRight: baseVal(8),
        position: 'relative',
        top: '2.5px'
    }
})
