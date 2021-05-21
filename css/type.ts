import { base, baseVal, htmlFontSize } from './base'
import fonts from './fonts'
import colors from './colors'

const heading = {
  fontFamily: fonts.headers,
  fontWeight: 700
}

export const borderSize = baseVal(0.35)

export const h1 = {
  ...heading,
  fontSize: base(4.5),
  lineHeight: base(5),
  margin: `0 0 ${base(2)}`
}

export const h2 = {
  ...heading,
  fontSize: base(4.25),
  lineHeight: base(5),
  margin: `${base(2)} 0`
}

export const h3 = {
  ...heading,
  fontSize: base(3.5),
  lineHeight: base(4),
  margin: `${base(2)} 0 ${base(1.5)}`
}

export const h4 = {
  ...heading,
  fontSize: base(2.25),
  lineHeight: base(2.5),
  margin: `${base(1.5)} 0 ${base()}`
}

export const h5 = {
  ...heading,
  fontSize: base(1.625),
  lineHeight: base(2.25),
  margin: `${base(1)} 0 ${base(0.5)}`
}

export const body = {
  fontSize: htmlFontSize,
  lineHeight: base(1.5)
}

export const a = {
  color: colors.orange,
  fontWeight: 'bold',
  '&:visited, &:focus': {
    color: colors.orange
  },
  '&:hover, &:active': {
    color: colors.lightOrange
  }
}