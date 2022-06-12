import { createUseStyles } from "react-jss";
import { base } from "../../css/base";
import colors from "../../css/colors";
import { borderSize } from "../../css/type";

export default createUseStyles({
    image: {
        margin: `0 ${base(2)} 0 ${base(2)}`,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '100%'
    },
    hasCaption: {
        borderBottom: `${borderSize}rem solid ${colors.lightGrey}`
    },
    noCaption: {
        marginBottom: base(1)
    },
    fullscreen: {
        minWidth: '100%'
    },
    wrapper: {
        textAlign: 'center'
    }
})