/** https://github.com/system-ui/theme-ui/issues/491#issuecomment-559353495 */
declare module '@theme-ui/presets' {
  export = theme_ui__presets
}

// https://theme-ui.com/packages/presets
declare const theme_ui__presets: {
  roboto: {
    colors: {
      background: string
      muted: string
      primary: string
      secondary: string
      text: string
    }
    fontSizes: number[]
    fontWeights: {
      body: number
      bold: number
      heading: number
    }
    fonts: {
      body: string
      heading: string
      monospace: string
    }
    lineHeights: {
      body: number
      heading: number
    }
    space: number[]
    styles: {
      [tag: string]: any
    }
  }
}
