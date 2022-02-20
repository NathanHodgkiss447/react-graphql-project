/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { ApolloProvider } from '@apollo/client';
import { Router } from 'next/dist/client/router';
import nProgress from 'nprogress';
import Page from '../components/Page';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  console.log(apollo);
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;

  return { pageProps };
};

export default withData(MyApp);
