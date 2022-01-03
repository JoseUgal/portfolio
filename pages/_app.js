// ** Global Styles
import GlobalStyles from "../styles/GlobalStyles"

// ** Hooks
import { useState } from "react"
import { ThemeProvider } from "../hooks/useTheme"

// ** Providers


function MyApp({ Component, pageProps }) {

  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default MyApp
