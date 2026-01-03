import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

interface AreaOptionSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const AREAS = [
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

const AreaOptionSelect = ({ value, onChange }: AreaOptionSelectProps) => {
  return (
    <Box>
      <TextField
        select
        fullWidth
        value={value}
        onChange={e => onChange(e.target.value)}
        variant="outlined"
        label=""
        InputLabelProps={{ shrink: false }}
        sx={{
          '& .MuiOutlinedInput-root': {
            height: 58,
            borderRadius: '6px',
            backgroundColor: '#fff',

            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#D0D0D0',
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#D0D0D0',
          },
          '& .MuiSelect-select': {
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            color: value ? '#000' : '#999',
          },
          '& .MuiSelect-icon': {
            color: '#000',
            right: 12,
          },
        }}
        SelectProps={{
          displayEmpty: true,
          renderValue: selected => {
            if (!selected) {
              return '선호 지역';
            }
            return selected as string;
          },
          MenuProps: {
            PaperProps: {
              sx: {
                width: 351,
                borderRadius: '6px',
                mt: 1,
                boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
              },
            },
            MenuListProps: {
              sx: {
                maxHeight: 46 * 5,
                padding: 0,
              },
            },
          },
        }}
      >
        {AREAS.map(area => (
          <MenuItem
            key={area}
            value={area}
            sx={{
              height: 46,
              borderBottom: '1px solid #E5E5E5',

              '&.Mui-selected': {
                backgroundColor: '#FFAF9B',
              },
              '&.Mui-selected:hover': {
                backgroundColor: '#FFAF9B',
              },
            }}
          >
            {area}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default AreaOptionSelect;
