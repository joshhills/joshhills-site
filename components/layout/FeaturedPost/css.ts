import { createUseStyles } from 'react-jss'
import { base } from '../../../css/base'
import colors from '../../../css/colors'
import { imageCover } from '../../../css/images'
import queries from '../../../css/queries'

const itemSize = '30rem'

export default createUseStyles({
  post: {
    width: '100%',
    minHeight: itemSize,
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
    marginBottom: base(-3),
    '&:after': {
      position: 'absolute',
      content: '""',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      background: 'rgba(34, 38, 41, 0.65)'
    },
    '&:before': {
      position: 'absolute',
      content: '""',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      background: colors.black,
      zIndex: 1,
      clipPath: 'circle(45% at 66%)'
    },
    [queries.m]: {
      marginBottom: 0,
      '&:before': {
        content: 'none'
      }
    },
    '&:hover video + img': {
      opacity: 0
    }
  },
  date: {
    fontWeight: 'bold',
    margin: 0
  },
  title: {
    color: `${colors.white} !important`,
    textDecoration: 'none',
    lineHeight: '30pt',
    fontSize: '26pt',
    [queries.s]: {
      lineHeight: '26pt',
      fontSize: '22pt'
    }
  },
  text: {
    boxSizing: 'border-box',
    padding: base(6),
    zIndex: 2,
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: colors.white,
    [queries.m]: {
      position: 'relative',
      padding: base(2)
    },
    [queries.s]: {
      padding: base()
    }
  },
  cta: {
    display: 'block',
    marginRight: base()
  },
  image: {
    ...imageCover,
    top: 0,
    zIndex: 0,
    transition: 'opacity 0.25s linear'
  },
  grid: {
    display: 'grid',
    maxWidth: '1200px',
    margin: '0 auto',
    gridGap: base(),
    gridTemplateColumns: '1fr 2fr',
    [queries.m]: {
        gridTemplateColumns: '1fr'
    }
  },
  video: {
    ...imageCover,
    top: 0,
    zIndex: 0
  }
})
