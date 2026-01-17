import type { AppProps } from 'next/app';
import Head from 'next/head';

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
      <Head>
        <title>
          더줄게 | 세상의 모든 알바! 일자리 & 아르바이트 구인 구직 사이트
        </title>
        <meta
          property="og:title"
          content="더줄게 | 세상의 모든 알바! 일자리 & 아르바이트 구인 구직 사이트"
        />
        <meta
          property="og:description"
          content="구인구직을 더 쉽고 빠르게! 세상의 모든 일자리를 연결하는 더줄게!"
        />
        <meta
          property="og:image"
          content="https://albaform-rust.vercel.app/thejulgeOGTAG.png"
        />
        <meta
          property="og:url"
          content="https://albaform-rust.vercel.app/store"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
};

export default App;
