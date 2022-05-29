import { createUseStyles } from 'react-jss'
import { base } from '../../../css/base'
import breakpoints from '../../../css/breakpoints'
import colors, { colorWithOpacity } from '../../../css/colors'
import { imageCover } from '../../../css/images'
import queries from '../../../css/queries'
import zIndex from '../../../css/zIndex'

const cover = {
  zIndex: zIndex.page,
  backgroundColor: colors.grey,
  fontWeight: 'bold',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  '&:after': {
      position: 'absolute',
      content: '""',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      // background: colorWithOpacity(colors.black, 65),
      background: 'linear-gradient(rgba(255, 162, 80, 0.9), rgba(255, 162, 80, 0.2))',
      zIndex: -1
  },
  '& a:not(:hover)': {
    color: colors.white
  }
}

export default createUseStyles({
  cover,
  coverFull: {
    ...cover,
    minHeight: '70vh',
    [`@media(min-width: ${breakpoints.xxl}px)`]: {
        minHeight: '60vh',
    }
  },
  coverImage: {
    ...imageCover
  },
  coverContent: {
    boxSizing: 'border-box',
    color: colors.white,
    width: '100%'
  },
  gridFull: {
    display: 'grid',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    gridGap: base(),
    gridTemplateColumns: '1fr'
  },
  gridHalf: {
    display: 'grid',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    gridGap: base(),
    gridTemplateColumns: '2fr 3fr',
    [queries.m]: {
        gridTemplateColumns: '1fr'
    }
  },
  video: {
    ...imageCover
  }
})
