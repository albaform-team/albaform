import Lottie from 'lottie-react';

import noResultAnimation from '@/lottie/No Result.json';
import * as S from '@/pages/store/_components/PageComponents/NoResult.style';

const NoResult = () => {
  return (
    <S.PageContainer>
      <Lottie
        animationData={noResultAnimation}
        loop
        style={{ width: 70, height: 70 }}
      />
      <S.PageText>공고가 없습니다</S.PageText>
    </S.PageContainer>
  );
};

export default NoResult;
