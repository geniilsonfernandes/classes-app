export const sx = {
  rounded: {
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 24,
    full: 9999,
  },
  padding: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  spacing: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 20,
    xxxl: 24,
  },
  font: {
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    xxxl: 24,
    xxxxl: 28,
  },
} as const;

export type Spacings = keyof typeof sx.spacing;

export const addOpacityToHex = (hex: string, opacity: number) => {
  const hexWithoutHash = hex.replace("#", "");
  const r = parseInt(hexWithoutHash.slice(0, 2), 16);
  const g = parseInt(hexWithoutHash.slice(2, 4), 16);
  const b = parseInt(hexWithoutHash.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
export const addOpacityToRgb = (rgb: string, opacity: number) => {
  const r = parseInt(rgb.slice(0, 3), 16);
  const g = parseInt(rgb.slice(4, 7), 16);
  const b = parseInt(rgb.slice(8, 11), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
