import type { AppProps } from 'next/app';

import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import DefaultLayout from '@/components/layout/DefaultLayout';
import { GlobalStyle } from '@/styles/GlobalStyle';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ?? (page => <DefaultLayout>{page}</DefaultLayout>);

  return getLayout(
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
};

export default App;
