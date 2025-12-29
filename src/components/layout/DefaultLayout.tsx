import { ReactNode } from 'react';

import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header user="user" />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
