import { createUseStyles } from 'react-jss'
import { base } from '../../../css/base'

const itemSize = '306px'

export default createUseStyles({
  post: {
    position: 'relative',
    zIndex: 1,
    height: itemSize,
    width: itemSize,
    margin: base()
  }
})
