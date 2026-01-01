import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const AREAS = [
  '서울특별시 송파구',
  '서울특별시 관악구',
  '서울특별시 도봉구',
  '서울특별시 용산구',
  '서울특별시 중구',
  '서울특별시 강남구',
];

const AreaOptionSelect = () => {
  const [value, setValue] = useState('');

  return (
    <Box>
      <TextField
        select
        fullWidth
        value={value}
        onChange={e => setValue(e.target.value)}
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
