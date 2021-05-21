import { createUseStyles } from 'react-jss'
import { base } from '../../../css/base'
import colors from '../../../css/colors'
import fonts from '../../../css/fonts'
import { borderSize } from '../../../css/type'

export default createUseStyles({
  header: {
    padding: base(),
    borderBottom: `${borderSize}rem solid ${colors.orange}`
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    color: `${colors.black} !important`,
    textDecoration: 'none'
  },
  icon: {
    height: '26pt',
    width: '26pt',
    display: 'inline-block',
    marginRight: base()
  },
  iconText: {
    margin: 0,
    font: fonts.headers,
    fontWeight: 'bold',
    display: 'inline-block'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: base(2),
    paddingRight: base(2)
  }
})
