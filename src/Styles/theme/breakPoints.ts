const mediaQuery = (width: number, minMax: "min" | "max") => {
  switch (minMax) {
    case "max":
      return `@media only screen and (max-width: ${width}px)`;
    case "min":
      return `@media only screen and (min-width: ${width}px)`;
    default:
      return `@media only screen and (max-width: ${width}px)`;
  }
};

export class BreakPoints {
  static mobile: string = mediaQuery(600, "max");
  static tablet: string = mediaQuery(1280, "max");
  static desktop: string = mediaQuery(1280, "min");
  static custom: typeof mediaQuery = mediaQuery;
}
