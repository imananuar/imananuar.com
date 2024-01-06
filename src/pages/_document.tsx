import { Html, Head, Main, NextScript } from 'next/document'
import { ThemeProvider } from "@/components/theme-provider"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Portfolio website for Iman Anuar" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Zeyada&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  )
}
