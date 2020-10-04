import { DefaultTheme, ThemeProps } from 'styled-components';

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  primary: '#39BDA4',
  secondary: '#DD556E',
  grey: '#466060',
  xiketic: '#070212',
};

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 600,
  bolder: 700,
};

export type Colors = typeof colors;
export type FontWeight = typeof fontWeights;

const theme = {
  colors,
  fontWeights,
};

const getColor = (color: keyof Colors) => ({ theme }: ThemeProps<DefaultTheme>) => theme.colors[color];
const getFontWeight = (fontWeight: keyof FontWeight) => ({ theme }: ThemeProps<DefaultTheme>) =>
  theme.fontWeights[fontWeight];

export default theme;
export { getColor, getFontWeight };
