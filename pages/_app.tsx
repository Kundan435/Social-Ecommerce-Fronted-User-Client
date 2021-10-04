import type { AppProps } from 'next/app'
import axios from 'axios'
import { SWRConfig } from 'swr'
import '../styles/bootstrap.min.css'
// import { AuthProvider, BasicInfoProvider, ViewportProvider } from '../src'
import { Router } from 'next/router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { AuthProvider } from '../src/providers/Auth'
import { BasicInfoProvider } from '../src/providers/BasicInfo'
import { ViewportProvider } from '../src/providers/ViewPort'
ViewportProvider
axios.defaults.baseURL = 'http://localhost:4000/api/v1'
axios.defaults.withCredentials = true

Router.events.on('routeChangeStart', () => {
  Nprogress.start()
})
Router.events.on('routeChangeComplete', () => {
  Nprogress.done()
})
Router.events.on('routeChangeError', () => {
  Nprogress.done()
})
// useEffect(() => {

//   router.events.on("routeChangeComplete", () => {
//     console.log("route change routeChangeComplete");
//   });
//   return () => {
//     router.events.off("routeChangeComplete", () => {
//       console.log("stoped");
//     });
//   };
// }, [router.events]);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: (url: string) => axios.get(url).then((r) => r.data),
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
          refreshWhenOffline: false,
          refreshWhenHidden: false,
          refreshInterval: 0,
          // Update This Props Interface----------------------------------

          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onError: (error, key) => {
            // if (error.status !== 403 && error.status !== 404) {
            // We can send the error to Sentry,
            // or show a notification UI.
            // }
          }
        }}
      >
        <AuthProvider>
          <BasicInfoProvider>
            <ViewportProvider>
              <Component {...pageProps} />
            </ViewportProvider>
          </BasicInfoProvider>
        </AuthProvider>
      </SWRConfig>
    </>
  )
}
export default MyApp
