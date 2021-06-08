import { createUseStyles } from "react-jss";
import { base } from "../../css/base";
import colors from "../../css/colors";
import fonts from "../../css/fonts";
import { borderSize } from "../../css/type";

export default createUseStyles({
    search: {
        marginTop: base(2),
        position: 'relative'
    },
    icon: {
        position: 'absolute',
        pointerEvents: 'none',
        left: base(),
        top: base()
    },
    input: {
        fontFamily: fonts.body,
        marginBottom: base(),
        appearance: 'none',
        background: 'none',
        color: colors.white,
        border: `${borderSize}rem solid`,
        borderRadius: 0,
        fontSize: base(),
        padding: base(0.5),
        paddingLeft: `${base(2)} !important`,
        marginRight: base(),
        width: '100%',
        '&:focus': {
            outline: 0
        },
        '&::placeholder': {
            opacity: 1,
            color: colors.white
        }
    }
})