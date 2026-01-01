import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { colors } from '@/styles/colors';

export const BoxContainer = styled(Box)`
  width: 105px;
  height: 30px;
`;

export const FormControlBox = styled(FormControl)`
  width: 105px;
`;

export const sortSelectStyle = css`
  .sort-select {
    width: 105px;
  }

  .sort-select .MuiOutlinedInput-root {
    height: 30px;
    padding-right: 24px;
  }

  .sort-select .MuiSelect-select {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 30px;
    padding: 0 8px;
    font-size: 14px;
  }

  .sort-select .MuiSelect-icon {
    right: 4px;
  }
`;
