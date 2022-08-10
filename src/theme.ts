import { Breakpoint } from './commons'

// based on https://system-ui.com/theme
const theme = {
  breakpoints: makeBreakpoints(),
  colors: makeColors(),
  space: [4, 8, 16, 24, 32, 64, 88], // https://wiki.corp.mongodb.com/pages/viewpage.action?pageId=100263649
  sizes: [16, 24, 32, 48, 64, 96, 128, 256, 512],
  fonts: { body: 'Akzidenz-Grotesk Std', code: 'Source Code Pro' },
  fontSizes: [12, 14, 16, 18, 32, 60],
  fontWeights: { regular: 400, medium: 500 },
  lineHeights: {},
  letterSpacings: {},
  borders: {},
  borderWidths: {},
  borderStyles: {},
  radii: {},
  shadows: {},
  zIndices: {},
};

export type Theme = typeof theme;

export default theme;

// example of array scale with aliases
function makeBreakpoints(): Array<string> & { [K in Breakpoint]: number | string } {
  const breakpoints: any = ['40em', '52em', '64em', '80em'];
  breakpoints.sm = breakpoints[0];
  breakpoints.md = breakpoints[1];
  breakpoints.lg = breakpoints[2];
  breakpoints.xl = breakpoints[3];
  return breakpoints;
}

function makeColors() {
  return {
      green: {
        0: "#0E7E3D",
        1: "#168B46",
        2: "#13AA52",
        3: "#1CC061",
        4: "#89E5B3",
        5: "#CCFFE1",
        6: "#EFFEF6",
      },
      gray: {
        0: "#303434",
        1: "#464C4F",
        2: "#626668",
        3: "#818487",
        4: "#9FA1A2",
        5: "#BABDBE",
        6: "#D7DBDB",
        7: "#E8E9E9",
        8: "#F4F6F6",
      },
      mongodb: {
        white: "#FFFFFF",
        green: "#13AA52",
        blue: "#43B1E5",
        navyBlue: "#1D6C92",
        backgroundBlue: "#E8F5FB",
        selectBlue: "#5897FB",
        red: "#ED271C",
        lightRed: "#FFEAEA",
        alertRed: "#EF4C4C",
        yellow: "#FFB618",
        slate: "#4D5359",
        cautionOrange: "#FFBC91",
        errorBackground: "#FDD0D1",
        validGreen: "#F1F2ED",
      },
  }
}
