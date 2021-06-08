import { createUseStyles } from 'react-jss'
import { base } from '../../../css/base'
import colors from '../../../css/colors'
import { imageCover } from '../../../css/images'
import queries from '../../../css/queries'
import { borderSize } from '../../../css/type'

const itemSize = '346px'

export default createUseStyles({
  post: {
    position: 'relative',
    zIndex: 1,
    [queries.s]: {
      width: '100%'
    }
  },
  wrapper: {
    position: 'relative',
    backgroundColor: colors.white,
    border: `${borderSize}rem solid ${colors.black}`,
    height: itemSize,
    width: itemSize,
    margin: base(),
    overflow: 'hidden',
    [queries.s]: {
      maxWidth: '100%',
      width: 'auto'
    }
  },
  text: {
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden',
    padding: base(),
    position: 'absolute',
    zIndex: 2,
    '&:hover + video + img': {
      opacity: 0
    }
  },
  tint: {
    background: 'linear-gradient(rgba(255, 162, 80, 0.9), rgba(255, 162, 80, 0.65))'
  },
  date: {
    fontWeight: 'bold',
    margin: 0
  },
  title: {
    color: `${colors.black} !important`,
    textDecoration: 'none',
    lineHeight: '30pt',
    fontSize: '26pt',
    [queries.s]: {
      lineHeight: '26pt',
      fontSize: '22pt'
    }
  },
  cta: {
    display: 'block',
    backgroundColor: colors.white,
    bottom: 0,
    boxSizing: 'border-box',
    left: 0,
    padding: base(),
    position: 'absolute',
    width: '100%',
    zIndex: 1
  },
  image: {
    ...imageCover,
    zIndex: 0,
    transition: 'opacity 0.25s linear'
  },
  dashed: {
    borderStyle: 'dashed'
  },
  video: {
    ...imageCover,
    zIndex: 0
  }
})
