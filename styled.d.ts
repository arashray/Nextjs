import "styled-components";
import { CSSObject, CSSProp, Keyframes } from "styled-components";

interface IColors {
    black: string;
    white: string;
}

interface ICubicBeziers {
    expoInOut: string;
}

interface IAnimations {
    fadeIn: Keyframes;
}

interface IBreakPoints {
    mobile: string;
    tablet: string;
    desktop: string;
    custom: (width: number, minMax: "min" | "max") => string;
}

interface ISpaces {
    "64": string;
    "32": string;
    "16": string;
    "8": string;
    "4": string;
}

declare module "styled-components" {
    export interface DefaultTheme {
        colors: IColors;
        spaces: ISpaces;
        cubicBeziers: ICubicBeziers;
        animations: IAnimations;
        breakPoints: IBreakPoints;
    }
}

declare module "react" {
    interface Attributes {
        css?: CSSProp | CSSObject;
    }
}
