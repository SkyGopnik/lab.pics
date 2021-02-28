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
        <meta name="keywords" content="Студия, дизайн, Lab.pics, лаб пикс, логотипы, мобильные приложения, лендинги, сайт повышенной сложности, оформление соц.сетей, разработка на Tilda, печатная продукция" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Лаборатория" />
        <meta property="og:description" content="Студия веб-дизайна" />
        <meta property="og:image" content="https://lab.pics/static/imgs/social.png" />
        <meta property="og:url" content="https://lab.pics/static/imgs/social.png" />
        <meta property="og:site_name" content="Лаборатория" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

