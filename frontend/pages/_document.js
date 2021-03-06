/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable class-methods-use-this */

import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  staticGetInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en-GB">
        {/* Head */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
