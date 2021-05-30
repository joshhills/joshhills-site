import { createUseStyles } from 'react-jss'
import { base } from '../../../css/base'
import queries from '../../../css/queries'

const itemSize = '346px'

export default createUseStyles({
  post: {
    position: 'relative',
    zIndex: 1,
    height: itemSize,
    width: itemSize,
    margin: base(),
    [queries.l]: {
      display: 'none'
    }
  }
})
