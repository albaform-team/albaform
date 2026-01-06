import { useState } from 'react';

import * as S from '@/pages/store/_components/DetailFilter/OptionSection.style';

import AreaSelectedBadge from './SelectedBadge';

export const AREAS = [
  '서울시 종로구',
  '서울시 중구',
  '서울시 용산구',
  '서울시 성동구',
  '서울시 광진구',
  '서울시 동대문구',
  '서울시 중랑구',
  '서울시 성북구',
  '서울시 강북구',
  '서울시 도봉구',
  '서울시 노원구',
  '서울시 은평구',
  '서울시 서대문구',
  '서울시 마포구',
  '서울시 양천구',
  '서울시 강서구',
  '서울시 구로구',
  '서울시 금천구',
  '서울시 영등포구',
  '서울시 동작구',
  '서울시 관악구',
  '서울시 서초구',
  '서울시 강남구',
  '서울시 송파구',
  '서울시 강동구',
];

const OptionSection = () => {
  const [areaValue, setAreaValue] = useState<string | null>(null);
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = (area: string) => {
    console.log('실행');
    setAreaValue(area);
    console.log(areaValue);
  };

  return (
    <S.DetailOption>
      <S.LocationSection>
        <S.DetailOptionTitle>위치</S.DetailOptionTitle>
        <S.LocationSelectBox>
          <S.LocationScrollArea>
            <S.LocationSelectOption>
              {AREAS.map(area => (
                <S.OptionItem key={area} onClick={() => handleClick(area)}>
                  {area}
                </S.OptionItem>
              ))}
            </S.LocationSelectOption>
          </S.LocationScrollArea>
        </S.LocationSelectBox>
        <S.SelectedLocation>
          <AreaSelectedBadge />{' '}
        </S.SelectedLocation>
      </S.LocationSection>
      <S.StartSection>
        <S.DetailOptionTitle>시작일</S.DetailOptionTitle>
        <S.StartInput disableUnderline placeholder="입력"></S.StartInput>
      </S.StartSection>
      <S.PaySection>
        <S.DetailOptionTitle>금액</S.DetailOptionTitle>
        <S.PayInput>
          <S.PayInputBox disableUnderline placeholder="입력"></S.PayInputBox>
          <S.DetailOptionTitle>이상부터</S.DetailOptionTitle>
        </S.PayInput>
      </S.PaySection>
    </S.DetailOption>
  );
};

export default OptionSection;
