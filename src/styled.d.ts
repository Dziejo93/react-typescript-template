import 'src/styled';

import theme from './styles/theme';

type AppThemeInterface = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppThemeInterface {}
}
