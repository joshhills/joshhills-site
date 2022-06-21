import { createUseStyles } from "react-jss";
import { base } from "../../css/base";
import colors from "../../css/colors";
import fonts from "../../css/fonts";
import queries from "../../css/queries";
import { h4, h5 } from "../../css/type";

export default createUseStyles({
    pagination: {
        padding: base(2),
        [queries.s]: {
            padding: base()
        }
    },
    item: {
        ...h5,
        fontFamily: fonts.body,
        padding: base(.5),
        color: `${colors.black} !important`,
        textDecoration: 'none'
    },
    activeItem: {
        ...h5,
        fontFamily: fonts.body,
        padding: base(.5),
        textDecoration: 'underline'
    },
    disabled: {
        pointerEvents: 'none',
        color: `${colors.lightGrey} !important`
    }
})