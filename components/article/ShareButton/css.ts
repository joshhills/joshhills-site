import { createUseStyles } from "react-jss"
import { base } from "../../../css/base"
import colors from "../../../css/colors"
import fonts from "../../../css/fonts"
import { body } from "../../../css/type"

export default createUseStyles({
    button: {
        ...body,
        background: 'none',
        textDecoration: 'underline',
        border: 'none',
        fontFamily: fonts.body,
        fontWeight: 'bold',
        padding: 0,
        cursor: 'pointer',
        color: colors.white,
        '&:hover, &:active': {
            color: colors.lightOrange
        }
    },
    icon: {
        marginRight: base(0.5),
        position: 'relative',
        top: '2px'
    }
})