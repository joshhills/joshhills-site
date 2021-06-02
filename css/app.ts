import { createUseStyles } from 'react-jss'
import { htmlFontSize, baselinePX, base } from './base'
import colors from './colors'
import { h1, h2, h3, h4, h5, body, a } from './type'
import fonts from './fonts'
import breakpoints from './breakpoints'

export default createUseStyles({
  '@global': {
    '@import': [
      'url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&family=Raleway:ital,wght@0,400;0,700;1,400;1,700&display=swap)',
      'url(https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,400;1,700&display=swap)',
      'url(https://cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css)'
    ],
    'html, body': {
      margin: 0,
      color: colors.black
    },
    '*': {
      boxSizing: 'border-box'
    },
    html: {
      fontFamily: fonts.body,
      fontSize: htmlFontSize,
      lineHeight: `${baselinePX}px`,
      [`@media(min-width: ${breakpoints.xxl}px)`]: {
        zoom: 1.45
      }
    },
    h1,
    h2,
    h3,
    h4,
    h5,
    p: {
      ...body
    },
    ol: {
      padding: `0 0 0 ${base()}`,
      margin: `0 0 ${base()} 0`
    },
    ul: {
      padding: 0,
      margin: `0 0 ${base()} 0`,
      listStyle: 'none',
      '& li': {
        textIndex: '-1ch',
        '&:before': {
          content: '"⚬"',
          paddingRight: '1ch'
        }
      }
    },
    li: {
      ...body
    },
    a
  },
  app: {
    height: '100%'
  }
})
