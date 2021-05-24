import { createUseStyles } from 'react-jss'
import { base } from '../../../css/base'
import breakpoints from '../../../css/breakpoints'
import colors from '../../../css/colors'
import { imageCover } from '../../../css/images'
import queries from '../../../css/queries'

const itemSize = '24rem'

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
      clipPath: 'circle(45% at 68%)'
    },
    [queries.m]: {
      marginBottom: 0,
      '&:before': {
        content: 'none'
      }
    }
  },
  date: {
    fontWeight: 'bold',
    margin: 0
  },
  title: {
    color: `${colors.white} !important`,
    textDecoration: 'none',
    lineHeight: '26pt',
    fontSize: '26pt'
  },
  text: {
    boxSizing: 'border-box',
    padding: base(7),
    zIndex: 2,
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: colors.white,
    [queries.m]: {
      position: 'relative',
      padding: base(2)
    }
  },
  cta: {
    display: 'block',
    marginRight: base()
  },
  image: {
    ...imageCover,
    top: 0,
    zIndex: 0
  }
})
