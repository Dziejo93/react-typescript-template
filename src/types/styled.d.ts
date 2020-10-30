import 'src/types/styledstyled';

import theme from 'src/styles/theme';

type AppThemeInterface = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppThemeInterface {}
}
