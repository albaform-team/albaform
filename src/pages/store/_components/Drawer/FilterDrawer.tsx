import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

import { colors } from '@/styles/colors';

const OPTIONS = ['마감임박순', '시급많은순', '시간적은순', '가나다순'];

const FilterOptionSelect = () => {
  const [value, setValue] = useState('마감임박순');

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
            width: '105px',
            height: '30px',
            borderRadius: '6px',
            backgroundColor: `${colors.gray[10]}`,

            '& fieldset': {
              border: 'none',
            },

            '&:hover': {
              backgroundColor: `${colors.gray[20]}`,
            },

            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#D0D0D0',
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#D0D0D0',
          },
          '& .MuiSelect-select': {
            padding: '6.5px 28px 6.5px 15px',
            display: 'flex',
            alignItems: 'center',
            color: `${colors.black}`,
            fontWeight: '700',
            fontSize: '14px',
            lineHeight: '100%',
          },
          '& .MuiSelect-icon': {
            color: '#000',
            right: 5,
          },
        }}
        SelectProps={{
          displayEmpty: true,
          renderValue: selected => {
            if (!selected) {
              return '마감임박순';
            }
            return selected as string;
          },
          MenuProps: {
            PaperProps: {
              sx: {
                width: '105px',
                borderRadius: '6px',
                mt: 1,
                border: `1px solid ${colors.gray[30]}`,
                boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
              },
            },
            MenuListProps: {
              sx: {
                padding: 0,
              },
            },
          },
        }}
      >
        {OPTIONS.map(options => (
          <MenuItem
            key={options}
            value={options}
            sx={{
              height: 40,
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '22px',
              borderBottom: '1px solid #E5E5E5',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            {options}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default FilterOptionSelect;
