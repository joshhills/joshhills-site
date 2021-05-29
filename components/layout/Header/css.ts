import { createUseStyles } from 'react-jss'
import { base } from '../../../css/base'
import colors from '../../../css/colors'
import fonts from '../../../css/fonts'
import queries from '../../../css/queries'
import { body, borderSize } from '../../../css/type'

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
    fontFamily: fonts.body,
    fontWeight: 'bold',
    display: 'inline-block'
  },
  menuButton: {
    ...body,
    color: colors.black,
    background: 'none',
    border: 'none',
    fontFamily: fonts.body,
    fontWeight: 'bold',
    padding: 0,
    cursor: 'pointer',
    '&:hover, &:active': {
        color: colors.lightOrange
    }
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: base(2),
    paddingRight: base(2),
    [queries.s]: {
      paddingLeft: base(),
      paddingRight: base()
    }
  },
  links: {
    '& > *': {
      marginRight: base()
    },
    [queries.s]: {
      display: 'none'
    }
  },
  menu: {
    display: 'none',
    [queries.s]: {
      display: 'block'
    }
  },
  grid: {
    display: 'grid',
    maxWidth: '1200px',
    margin: '0 auto',
    gridGap: base(),
    gridTemplateColumns: '1fr'
  }
})
