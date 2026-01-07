import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import { colors } from '@/styles/colors';

const OPTIONS = ['마감임박순', '시급많은순', '시간적은순', '가나다순'];

type FilterOptionSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

const FilterOptionSelect = ({ value, onChange }: FilterOptionSelectProps) => {
  return (
    <Box>
      <TextField
        select
        value={value}
        onChange={e => onChange(e.target.value)}
        variant="outlined"
        label=""
        InputLabelProps={{ shrink: false }}
        sx={{
          '& .MuiOutlinedInput-root': {
            width: '105px',
            height: '30px',
            borderRadius: '6px',
            backgroundColor: colors.gray[10],

            '& fieldset': {
              border: 'none',
            },

            '&:hover': {
              backgroundColor: colors.gray[20],
            },
          },

          '& .MuiSelect-select': {
            padding: '6.5px 28px 6.5px 15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: colors.black,
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '100%',
          },

          '& .MuiSelect-icon': {
            color: colors.black,
            right: 5,
          },
        }}
        SelectProps={{
          displayEmpty: true,
          renderValue: selected => {
            if (!selected) return '마감임박순';
            return selected as string;
          },
          MenuProps: {
            PaperProps: {
              sx: {
                width: '105px',
                borderRadius: '8px',
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
        {OPTIONS.map(option => (
          <MenuItem
            key={option}
            value={option}
            sx={{
              height: 40,
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '22px',
              justifyContent: 'center',
              textAlign: 'center',
              borderBottom: '1px solid #E5E5E5',

              '&:last-of-type': {
                borderBottom: 'none',
              },
            }}
          >
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default FilterOptionSelect;
