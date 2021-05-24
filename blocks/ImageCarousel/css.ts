import { createUseStyles } from "react-jss";
import { base } from "../../css/base";
import colors from "../../css/colors";
import { imageCover } from "../../css/images";
import queries from "../../css/queries";
import { borderSize } from "../../css/type";

export default createUseStyles({
    carousel: {
        position: 'relative',
        minHeight: base(34),
        color: colors.white,
        overflow: 'hidden',
        '& img': {
            ...imageCover,
            padding: 0
        }
    },
    '@keyframes grow-width': {
        'from': {
            width: '0%'
        },
        'to': {
            width: '100%'
        }
    },
    progressBar: {
        width: '0%',
        height: `${borderSize}rem`,
        position: 'relative',
        backgroundColor: colors.orange,
        animation: '$grow-width 13000ms infinite linear'
    },
    tint: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        background: 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,0.6))'
    },
    contentWrapper: {
        position: 'absolute',
        margin: base(3),
        width: `calc(100% - ${base(16)})`,
        height: `calc(100% - ${base(6)})`,
        [queries.m]: {
            width: `calc(100% - ${base(6)})`
        }
    },
    pip: {
        cursor: 'pointer',
        display: 'inline-block',
        marginRight: base(),
        border: `${borderSize}rem solid ${colors.lightGrey}`,
        borderRadius: '100pt',
        width: '64pt',
        height: '64pt',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '64pt',
        minWidth: '64pt',
        '& img': {
            ...imageCover,
            padding: 0,
            zIndex: 1
        },
        '&:hover': {
            borderColor: colors.lightOrange
        },
        [queries.m]: {
            width: '50pt',
            height: '50pt',
            minHeight: '50pt',
            minWidth: '50pt',
        }
    },
    pipActive: {
        cursor: 'default',
        borderColor: `${colors.orange} !important`,
        borderStyle: 'dashed'
    },
    caption: {
        position: 'absolute',
        bottom: 0,
        maxWidth: `calc(50% - ${base(3)})`,
        '& > *': {
            marginBottom: 0
        },
        [queries.m]: {
            maxWidth: '100%'
        }
    }
})