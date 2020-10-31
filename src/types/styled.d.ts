import 'src/types/styled';

import theme from 'src/assets/theme';

type AppThemeInterface = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppThemeInterface {}
}
