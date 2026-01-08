import { GetServerSideProps } from 'next';

import { STORE_ROUTES } from '@/constants/routes';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: STORE_ROUTES.ROOT,
      permanent: false,
    },
  };
};

export default function Home() {
  return null;
}
