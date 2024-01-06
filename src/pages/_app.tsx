import '@/styles/globals.css'
import { Zeyada, Quicksand } from 'next/font/google';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie';

const queryClient = new QueryClient()

const quickSand = Quicksand({
  weight: '400',
  subsets: ['latin'],
  variable: '--primary-font'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <main className={quickSand.className}>
          <Component {...pageProps} />
        </main>
      </CookiesProvider>
    </QueryClientProvider>    
    )
}
