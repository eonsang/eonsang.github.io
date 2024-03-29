import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import Script from 'next/script'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Script
        id="Adsense-id"
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7771475609046070"
        crossorigin="anonymous"
        onError={(e) => {
          console.error('Script failed to load', e)
        }}
      />

      <Script
        id="naver-analyze"
        type="text/javascript"
        async
        strategy="afterInteractive"
        src="//wcs.naver.net/wcslog.js"
        crossorigin="anonymous"
      />

      <Script id="naver-analyze-code" strategy="afterInteractive">
        {`
        if(!wcs_add) var wcs_add = {};
        wcs_add["wa"] = "1c3b5a7ced3c980";
        if(window.wcs) {
        wcs_do();
        }
        `}
      </Script>

      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
