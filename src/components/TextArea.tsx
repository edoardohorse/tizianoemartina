import * as React from 'react';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import {Ref, useImperativeHandle, useRef} from "react";

export type ActionTextArea ={
	getValue: ()=>void
}

const MinHeightTextarea = React.forwardRef(function (props: any, ref: Ref<ActionTextArea>) {
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

	const Textarea = styled(BaseTextareaAutosize)(
		({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    max-width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : 'rgba(255,255,255,0.5)'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    resize: none;
    margin-bottom: 15px;

    &:hover {
      border-color: ${green[400]};
    }

    &:focus {
      border-color: ${green[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? green[600] : green[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
	);

	const textareaRef = useRef<HTMLTextAreaElement>(null);

	// Function to get the value of the textarea
	const getValue = () => {
		// debugger
		if (textareaRef.current) {
			return textareaRef.current.value;
		}
		return '';
	};

	useImperativeHandle(ref, ()=>({
		getValue
	}))

	return (
		<Textarea aria-label="intolleranze" minRows={4} maxRows={4} placeholder="Intolleranze" name={"intolleranze"} ref={textareaRef} defaultValue={getValue()} />
	);
})

MinHeightTextarea.displayName = 'MinHeightTextarea'

export default MinHeightTextarea