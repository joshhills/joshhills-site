import { base, baseVal, htmlFontSize, htmlFontSizeXs } from './base'
import fonts from './fonts'
import colors from './colors'
import queries from './queries'

const heading = {
  fontFamily: fonts.headers,
  fontWeight: 700
}

export const borderSize = baseVal(0.35)

export const h1 = {
  ...heading,
  fontSize: base(4.25),
  lineHeight: base(5),
  margin: `${base(2)} 0 ${base(2)}`,
  [queries.m]: {
    fontSize: base(3.75),
    lineHeight: base(4)
  },
  [queries.s]: {
    fontSize: base(2.75),
    lineHeight: base(3),
    margin: `${base(1.4)} 0 ${base(1.4)}`
  },
  [queries.xs]: {
    fontSize: base(2),
    lineHeight: base(2.25),
    margin: `${base(1.2)} 0 ${base(1.2)}`
  }
}

export const h2 = {
  ...heading,
  fontSize: base(4),
  lineHeight: base(4.75),
  margin: `${base(2)} 0`,
  [queries.m]: {
    fontSize: base(3),
    lineHeight: base(3.25)
  },
  [queries.s]: {
    fontSize: base(2),
    lineHeight: base(2.25),
    margin: `${base(1.75)} 0`
  },
  [queries.xs]: {
    fontSize: base(1.5),
    lineHeight: base(1.75),
    margin: `${base(1.25)} 0`
  }
}

export const h3 = {
  ...heading,
  fontSize: base(3.5),
  lineHeight: base(4),
  margin: `${base(2)} 0 ${base(1.5)}`,
  [queries.m]: {
    fontSize: base(2.75),
    lineHeight: base(3)
  },
  [queries.s]: {
    fontSize: base(1.75),
    lineHeight: base(2),
    margin: `${base(1.25)} 0 ${base(1.15)}`
  },
  [queries.xs]: {
    fontSize: base(1.25),
    lineHeight: base(1.5),
    margin: `${base(1.1)} 0 ${base(1.1)}`
  }
}

export const h4 = {
  ...heading,
  fontSize: base(3),
  lineHeight: base(3.25),
  margin: `${base(1.5)} 0 ${base()}`,
  [queries.m]: {
    fontSize: base(2.25),
    lineHeight: base(2.5)
  },
  [queries.s]: {
    fontSize: base(1.75),
    lineHeight: base(2),
    margin: `${base(1.1)} 0 ${base()}`
  },
  [queries.xs]: {
    fontSize: base(1.15),
    lineHeight: base(1.25),
    margin: `${base(0.75)} 0 ${base(0.75)}`
  }
}

export const h5 = {
  ...heading,
  fontSize: base(2),
  lineHeight: base(2.25),
  margin: `${base(1)} 0 ${base(0.5)}`,
  [queries.m]: {
    fontSize: base(1.5),
    lineHeight: base(1.75)
  },
  [queries.s]: {
    fontSize: base(1.25),
    lineHeight: base(1.5),
    margin: `${base(0.75)} 0 ${base(0.25)}`
  },
  [queries.xs]: {
    fontSize: base(),
    lineHeight: base(1.25),
    margin: `${base(0.5)} 0 ${base(0.1)}`
  }
}

export const body = {
  fontSize: htmlFontSize,
  lineHeight: base(1.5),
  [queries.xs]: {
    fontSize: htmlFontSizeXs
  }
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