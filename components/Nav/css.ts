import { createUseStyles } from "react-jss";
import { base } from "../../css/base";
import colors from "../../css/colors";
import fonts from "../../css/fonts";
import { body, h4 } from "../../css/type";

export default createUseStyles({
    nav: {
        background: colors.orange,
        color: colors.white,
        height: '100%',
        width: '100%',
        border: 'none'
    },
    back: {
        ...body,
        background: 'none',
        textDecoration: 'underline',
        border: 'none',
        fontWeight: 'bold',
        padding: 0,
        cursor: 'pointer',
        color: colors.white,
        '&:hover, &:active': {
            color: colors.lightOrange
        }
    },
    control: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: base(2),
        paddingRight: base(2)
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        color: `${colors.white} !important`,
        textDecoration: 'none'
    },
    icon: {
        height: '26pt',
        width: '26pt',
        display: 'inline-block',
        marginRight: base()
    },
    iconText: {
        margin: 0,
        fontWeight: 'bold',
        display: 'inline-block'
    },
    links: {
        padding: base(2),
        '& a': {
            ...h4,
            display: 'block',
            '&:not(:hover)': {
                color: colors.white
            }
        }
    }
})