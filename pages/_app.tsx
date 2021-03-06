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
        <meta name="keywords" content="Студия, дизайн, Lab.pics, лаб пикс, логотипы, мобильные приложения, лендинги, оформление соц.сетей, печатная продукция" />
        <meta name="description" content="Дружная команда из крутых дизайнеров, способных решить любую Вашу задачу. Мы очень любим дизайн и с трепетом относимся к каждому проекту." />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Лаборатория" />
        <meta property="og:description" content="Студия веб-дизайна" />
        <meta property="og:image" content="https://lab.skyreglis.studio/static/social.png" />
        <meta property="og:url" content="https://lab.skyreglis.studio/static/social.png" />
        <meta property="og:site_name" content="Лаборатория" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

