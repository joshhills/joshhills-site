import { createUseStyles } from "react-jss"
import { base } from "../../css/base"
import colors from '../../css/colors'
import { body } from "../../css/type"

export default createUseStyles({
    cover: {
        padding: base(2)
    },
    button: {
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
    back: {
        marginRight: base()
    },
    icon: {
        marginRight: base(0.5),
        position: 'relative',
        top: '2px'
    },
    control: {
        padding: base(2)
    },
    controlWrapper: {
        backgroundColor: colors.lightGrey,
        '& p': {
            margin: 0
        },
        '& a': {
            margin: `0 ${base()} 0 0`
        },
        '& a:not(:hover)': {
            color: colors.white
        }
    },
    related: {
        backgroundColor: colors.black
    },
    relatedWrapper: {
        padding: `${base(2)} ${base()} ${base(2)} ${base()}`
    },
    relatedTitle: {
        padding: `${base()} ${base()} 0 ${base()}`,
        margin: 0,
        color: colors.white
    },
    relatedPostsWrapper: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    content: {
        paddingLeft: base(2),
        paddingRight: base(2)
    },
    contentWrapper: {
        paddingTop: base(2),
        paddingBottom: base(2)
    }
})