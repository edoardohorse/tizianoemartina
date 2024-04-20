"use client"

import * as React from 'react';
import {
	Unstable_NumberInput as BaseNumberInput,
	NumberInputProps,
} from '@mui/base/Unstable_NumberInput';
import {styled} from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {useEffect, useRef} from "react";

const NumberInput = React.forwardRef(function CustomNumberInput(
	props: NumberInputProps,
	ref: React.ForwardedRef<HTMLDivElement>,
) {




	return (
		<BaseNumberInput
			id={"test"}
			required
			slots={{
				root: StyledInputRoot,
				input: StyledInput,
				incrementButton: StyledButton,
				decrementButton: StyledButton,
			}}
			slotProps={{
				incrementButton: {
					children: <AddIcon fontSize="small"/>,
					className: 'increment',
				},
				decrementButton: {
					children: <RemoveIcon fontSize="small"/>,
				},
			}}
			{...props}

		/>
	);
});


const green = {
	100: '#b4e1df',
	200: '#84ceca',
	300: '#53bab4',
	400: '#30aba3',
	500: '#179b91',
	600: '#158e84',
	700: '#137e73',
	800: '#116e64',
};

const grey = {
	50: '#F3F6F9',
	100: '#E5EAF2',
	200: '#DAE2ED',
	300: '#C7D0DD',
	400: '#B0B8C4',
	500: '#9DA8B7',
	600: '#6B7A90',
	700: '#434D5B',
	800: '#303740',
	900: '#1C2025',
};

const StyledInputRoot = styled('div')(
	({theme}) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`,
);

const StyledInput = styled('input')(
	({theme}) => `
  font-size: 20px;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : 'rgba(255,255,255,0.5)'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
		theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
	};
  border-radius: 8px;
  margin: 0 8px;
  padding: 10px 12px;
  outline: 0;
  min-width: 0;
  width: 4rem;
  text-align: center;
  
  appearance: textfield;

  &:hover {
    border-color: ${green[400]};
  }

  &:focus {
    border-color: ${green[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? green[700] : green[200]};
  }

  &:focus-visible {
    outline: 0;
  }
`
);

const StyledButton = styled('div')(
	({theme}) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 1px solid;
  border-radius: 999px;
  border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  width: 32px;
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? green[700] : green[500]};
    border-color: ${theme.palette.mode === 'dark' ? green[500] : green[400]};
    color: ${grey[50]};
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`,
);

const input = ()=>{
	return
}

export default NumberInput;