import React from "react";
import Head from "next/head";

import '../style/styles.scss';

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Лаборатория</title>
        <link rel="shortcut icon" href="/static/favicon.png" type="image/png" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

