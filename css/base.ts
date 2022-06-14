export const htmlFontSize = 18;
export const htmlFontSizeXs = 14;

export const baselinePX = 20;

export const base = (multiplier = 1): string => `${(baselinePX / htmlFontSize) * multiplier}rem`

export const baseVal = (multiplier = 1): number => (baselinePX / htmlFontSize) * multiplier
