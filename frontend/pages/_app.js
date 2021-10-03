/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
<<<<<<< HEAD
import Page from '../components/Page.js';
=======
import Page from '../components/Page';
>>>>>>> 5676ec4fc3df97de5327d64362e60c942e6b7167

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
