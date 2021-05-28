import { createUseStyles } from 'react-jss'
import { base } from '../../../css/base'
import colors from '../../../css/colors'
import { imageCover } from '../../../css/images'
import { borderSize } from '../../../css/type'

const itemSize = '346px'

export default createUseStyles({
  post: {
    position: 'relative',
    zIndex: 1
  },
  wrapper: {
    position: 'relative',
    backgroundColor: colors.white,
    border: `${borderSize}rem solid ${colors.black}`,
    height: itemSize,
    width: itemSize,
    margin: base(),
    overflow: 'hidden'
  },
  text: {
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden',
    padding: base(),
    position: 'absolute',
    zIndex: 2
  },
  tint: {
    background: 'linear-gradient(rgba(255, 162, 80, 0.9), rgba(255, 162, 80, 0.2))'
  },
  date: {
    fontWeight: 'bold',
    margin: 0
  },
  title: {
    color: `${colors.black} !important`,
    textDecoration: 'none',
    lineHeight: '26pt',
    fontSize: '26pt'
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
    zIndex: 0
  },
  dashed: {
    borderStyle: 'dashed'
  }
})
