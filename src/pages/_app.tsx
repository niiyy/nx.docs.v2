import { useLoadExportedMethods } from '@/hooks/useLoadExportedMethods'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import '../styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
