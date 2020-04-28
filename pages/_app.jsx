import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import '../styles/global.css'

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
