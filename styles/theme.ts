import {DefaultTheme} from 'styled-components'
enum Color {
  pink_light = '#ee3fce',
  pink_dark = "#BC38C9",
  purple = "#7231CF",
  dark = "#161a23",
  dark_gray = "#272733",
}
export const theme: DefaultTheme = {
  colors: {
    pink_light: Color.pink_light,
    pink_dark: Color.pink_dark,
    purple: Color.purple,
    dark: Color.dark,
    dark_gray: Color.dark_gray,
  },
  gradients: {
      pink_purple: "linear-gradient(to right, #7231CF 0%, #c33ca6 68%, #ee3fce 100%)"
  }
};
