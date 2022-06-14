import { createUseStyles } from "react-jss"
import { base } from "../../css/base"
import colors from '../../css/colors'
import fonts from "../../css/fonts"
import { body } from "../../css/type"

export default createUseStyles({
    cover: {
        padding: base(2)
    },
    postDate: {
        marginRight: base()
    },
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
    excerpt: {
        ...body
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
    grid: {
        display: 'grid',
        maxWidth: '1200px',
        margin: '0 auto',
        gridGap: base(),
        gridTemplateColumns: '1fr'
    },
    content: {
        marginBottom: base(),
        '& section:not(:first-child) [class^="richText"]': {
            paddingTop: 0
        },
        '& [class^="carousel"]': {
            marginBottom: base(2)
        }
    }
})