import { createUseStyles } from 'react-jss'
import { base } from '../../../css/base'
import colors from '../../../css/colors'
import { imageCover } from '../../../css/images'
import queries from '../../../css/queries'
import { borderSize } from '../../../css/type'

const itemSize = '612px'

export default createUseStyles({
  post: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    '&:hover video + img': {
      opacity: 0
    }
  },
  wrapper: {
    position: 'relative',
    color: colors.white,
    border: `${borderSize}rem solid ${colors.orange}`,
    minHeight: itemSize,
    margin: base(),
    overflow: 'hidden',
    '&:after': {
      position: 'absolute',
      content: '""',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      background: 'rgba(255, 163, 81, 0.65)'
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
    padding: base(2),
    zIndex: 2,
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
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
  dashed: {
    borderStyle: 'dashed'
  },
  grid: {
    display: 'grid',
    maxWidth: '1200px',
    margin: '0 auto',
    gridGap: base(),
    gridTemplateColumns: '1fr 1fr',
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
