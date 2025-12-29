import { ReactNode } from 'react';

import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header user="owner" />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
