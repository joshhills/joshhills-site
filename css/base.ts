export const htmlFontSize = 20;
export const htmlFontSizeXs = 16;

export const baselinePX = 20;

export const base = (multiplier = 1): string => `${(baselinePX / htmlFontSize) * multiplier}rem`

export const baseVal = (multiplier = 1): number => (baselinePX / htmlFontSize) * multiplier
