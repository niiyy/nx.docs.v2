import { Header } from '@/components/header/Header'
import { useLoadExportedMethods } from '@/hooks/useLoadExportedMethods'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
