import { FunctionComponent } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import theme from 'utils/theme'
import Nav from 'components/nav'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default App
