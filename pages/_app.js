
import { SessionProvider } from 'next-auth/react'
import '@/styles/globals.css'
//import '../styles/Navbar.module.css'


function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>

      <Component {...pageProps} />
    </SessionProvider>

  );
}
export default MyApp;