import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
