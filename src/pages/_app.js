import { Inter } from 'next/font/google'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from '../theme'

import '@/styles/globals.css'
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  )
}
