import { DefaultTheme } from "styled-components";
import { Colors } from "./colors";
import { CubicBeziers } from "./cubicBeziers";
import { Animations } from "./animations";
import { BreakPoints } from "./breakPoints";
import { Spaces } from "./spaces";

export const theme: DefaultTheme = {
  colors: {
    black: Colors.black,
    white: Colors.white,
  },
  cubicBeziers: {
    expoInOut: CubicBeziers.ExpoInOut,
  },
  animations: {
    fadeIn: Animations.fadeIn,
  },
  breakPoints: {
    mobile: BreakPoints.mobile,
    tablet: BreakPoints.tablet,
    desktop: BreakPoints.desktop,
    custom: BreakPoints.custom,
  },
  spaces: {
    "4": Spaces.two,
    "8": Spaces.three,
    "16": Spaces.four,
    "32": Spaces.five,
    "64": Spaces.six,
  },
};
