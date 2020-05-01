import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import '../styles/global.css'
import NProgress from 'nprogress'
import Router from 'next/router'
import '../styles/nprogress.css'

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Digital Currency News</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
