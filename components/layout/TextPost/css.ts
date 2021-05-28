import { createUseStyles } from 'react-jss'
import { base } from '../../../css/base'
import colors from '../../../css/colors'
import { borderSize } from '../../../css/type'

const itemSize = '346px'

export default createUseStyles({
  post: {
    position: 'relative',
    zIndex: 1
  },
  wrapper: {
    position: 'relative',
    borderTop: `${borderSize}rem solid ${colors.black}`,
    height: itemSize,
    width: itemSize,
    margin: base(),
    overflow: 'hidden'
  },
  text: {
    boxSizing: 'border-box',
    padding: base(),
    zIndex: 2,
    '& p': {
      margin: 0
    }
  }
})
