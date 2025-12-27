import StoreImg from '@/assets/img/storeregister.png';

import * as S from './storeimg.style';

const StoreImgComponent = () => {
  return (
    <>
      <S.StoreImgStyle src={StoreImg} alt="StoreImg" width={110} height={64} />
    </>
  );
};

export default StoreImgComponent;
