import { createUseStyles } from "react-jss";
import { base } from "../../css/base";
import breakpoints from "../../css/breakpoints";
import colors from "../../css/colors";
import { imageCover } from "../../css/images";
import queries from "../../css/queries";
import { borderSize } from "../../css/type";

export default createUseStyles({
    carousel: {
        backgroundColor: colors.lightGrey,
        position: 'relative',
        minHeight: base(30),
        [`@media(max-width: ${breakpoints.s}px)`]: {
            minHeight: base(20)
        },
        [`@media(min-width: ${breakpoints.xl}px)`]: {
            minHeight: base(35),
        },
        color: colors.white,
        overflow: 'hidden',
        '& img': {
            left: '50%',
            height: '100%',
            minWidth: '100%',
            position: 'absolute',
            transform: 'translateX(-50%)',
            objectFit: 'contain',
            maxWidth: '100%',
            maxHeight: '100%',
            padding: 0
        }
    },
    carouselCover: {
        '& img': {
            objectFit: 'cover'
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
    grid: {
        display: 'grid',
        maxWidth: '1200px',
        margin: '0 auto',
        gridGap: base(),
        gridTemplateColumns: '1fr'
    },
    contentWrapper: {
        position: 'absolute',
        margin: base(3),
        width: `calc(100% - ${base(16)})`,
        height: `calc(100% - ${base(6)})`,
        [queries.m]: {
            width: `calc(100% - ${base(6)})`
        },
        [queries.s]: {
            margin: `${base(3)} ${base(2)} ${base(3)} ${base(2)}`
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
        background: colors.grey,
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
        },
        [queries.s]: {
            width: '20pt',
            height: '20pt',
            minHeight: '20pt',
            minWidth: '20pt',
            borderColor: colors.grey,
            // border: 0,
            '& img': {
                opacity: 0
            },
            '&:hover': {
                // background: colors.lightGrey
            }
        }
    },
    pipActive: {
        cursor: 'default',
        borderColor: `${colors.orange} !important`,
        borderStyle: 'dashed',
        background: colors.orange
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