import StoreImg from '@/assets/img/storeregister.png';

import * as S from './storeimg2.style';

const StoreImgComponent = ({ imgFile }: { imgFile: string }) => {
  return (
    <>
      <S.StoreImgStyle src={imgFile} alt="StoreImg" fill priority />
    </>
  );
};

export default StoreImgComponent;
