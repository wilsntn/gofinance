// import original module declarations
import "styled-components";
import defaultTheme from "./defaultTheme";

// and extend them!
declare module "styled-components" {
  type ThemeType = typeof defaultTheme;
  export interface DefaultTheme extends ThemeType {}
}
