import { useRouter } from 'next/router';

import { STORE_ROUTES } from '@/constants/routes';

import * as S from './404.page.style';

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.replace(STORE_ROUTES.ROOT);
  };

  return (
    <S.Container>
      <S.Title>404</S.Title>
      <S.Subtitle>페이지를 찾을 수 없습니다</S.Subtitle>
      <S.Description>
        입력하신 주소가 잘못되었거나
        <br /> 페이지가 이동되었을 수 있어요.
      </S.Description>
      <S.HomeButton type="button" onClick={handleGoHome}>
        홈으로 돌아가기
      </S.HomeButton>
    </S.Container>
  );
};

export default NotFoundPage;
