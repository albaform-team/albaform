import { ReactNode } from 'react';

import * as S from './DefaultLayout.style';
import Footer from './footer/Footer';
import Header from './header/Header';
interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
