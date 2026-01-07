import Chip from '@mui/material/Chip';

import * as S from '@/pages/store/_components/DetailFilter/OptionSection.style';

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

type OptionSectionProps = {
  selectedAreas: string[];
  setSelectedAreas: React.Dispatch<React.SetStateAction<string[]>>;
  startDate: string | null;
  setStartDate: React.Dispatch<React.SetStateAction<string | null>>;
  minPay: number | null;
  setMinPay: React.Dispatch<React.SetStateAction<number | null>>;
};

const OptionSection = ({
  selectedAreas,
  setSelectedAreas,
  startDate,
  setStartDate,
  minPay,
  setMinPay,
}: OptionSectionProps) => {
  const handleAreaClick = (area: string) => {
    if (!selectedAreas.includes(area)) {
      setSelectedAreas(prev => [...prev, area]);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) {
      setStartDate(null);
      return;
    }

    const selectedDate = new Date(`${value}T00:00:00+09:00`);

    const rfc3339 = selectedDate.toISOString();
    setStartDate(rfc3339);

    console.log(rfc3339);
  };

  const handleDelete = (areaToDelete: string) => {
    setSelectedAreas(prev => prev.filter(area => area !== areaToDelete));
  };

  return (
    <S.DetailOption>
      <S.LocationSection>
        <S.DetailOptionTitle>위치</S.DetailOptionTitle>
        <S.LocationSelectBox>
          <S.LocationScrollArea>
            <S.LocationSelectOption>
              {AREAS.map(area => (
                <S.OptionItem key={area} onClick={() => handleAreaClick(area)}>
                  {area}
                </S.OptionItem>
              ))}
            </S.LocationSelectOption>
          </S.LocationScrollArea>
        </S.LocationSelectBox>
        <S.SelectedLocation>
          <div style={{ marginTop: 16 }}>
            {selectedAreas.map(area => (
              <Chip
                key={area}
                label={area}
                onDelete={() => handleDelete(area)}
                style={{ marginRight: 8, margin: '0 4px 8px 4px' }}
              />
            ))}
          </div>{' '}
        </S.SelectedLocation>
      </S.LocationSection>
      <S.StartSection>
        <S.DetailOptionTitle>시작일</S.DetailOptionTitle>
        <S.StartInput
          disableUnderline
          placeholder="입력"
          type="date"
          inputProps={{
            min: today,
          }}
          value={startDate ? startDate.split('T')[0] : ''}
          onChange={handleStartDateChange}
        ></S.StartInput>
      </S.StartSection>
      <S.PaySection>
        <S.DetailOptionTitle>금액</S.DetailOptionTitle>
        <S.PayInput>
          <S.PayInputBox
            disableUnderline
            placeholder="입력"
            value={minPay}
            onChange={e => setMinPay(Number(e.target.value))}
          ></S.PayInputBox>
          <S.DetailOptionTitle>이상부터</S.DetailOptionTitle>
        </S.PayInput>
      </S.PaySection>
    </S.DetailOption>
  );
};

export default OptionSection;
