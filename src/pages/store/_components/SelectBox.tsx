import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';

import * as S from '@/pages/store/_components/SelectBox.style';

export default function BasicSelect() {
  const [age, setAge] = React.useState('마감임박순');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <S.BoxContainer>
      <S.FormControlBox fullWidth>
        <Select className="sort-select" value={age} onChange={handleChange}>
          <MenuItem value="마감임박순">마감임박순</MenuItem>
          <MenuItem value="시급많은순">시급많은순</MenuItem>
          <MenuItem value="시간적은순">시간적은순</MenuItem>
          <MenuItem value="가나다순">가나다순</MenuItem>
        </Select>
      </S.FormControlBox>
    </S.BoxContainer>
  );
}
