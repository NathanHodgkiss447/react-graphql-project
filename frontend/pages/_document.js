import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-GB">
<<<<<<< HEAD
        {/* <Head></Head> */}
=======
        {/* Head */}
>>>>>>> 5676ec4fc3df97de5327d64362e60c942e6b7167
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
