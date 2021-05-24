import { createUseStyles } from 'react-jss'
import { base } from '../../../css/base'
import colors, { colorWithOpacity } from '../../../css/colors'
import { imageCover } from '../../../css/images'
import zIndex from '../../../css/zIndex'

const cover = {
  zIndex: zIndex.page,
  backgroundColor: colors.grey,
  fontWeight: 'bold',
  minHeight: '75vh',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
      position: 'absolute',
      content: '""',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      background: colorWithOpacity(colors.black, 65),
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
    minHeight: '100vh'
  },
  coverImage: {
    ...imageCover
  },
  coverContent: {
    boxSizing: 'border-box',
    color: colors.white,
    width: '100%'
  }
})