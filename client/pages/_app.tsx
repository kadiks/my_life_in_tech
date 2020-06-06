import { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';

import * as gtag from '../src/utils/GoogleAnalytics';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My life in tech : témoignages de minorités dans la tech</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
