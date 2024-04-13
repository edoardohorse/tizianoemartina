'use client'
import React from 'react';
import {Button, Checkbox, FormControlLabel, TextField, ToggleButton, ToggleButtonGroup} from "@mui/material";
import MuiToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";

import {TextareaAutosize} from '@mui/base';

import styles from '@/components/style/form.module.css'

type TDaDove = 'Puglia' | 'Sicilia' | null

type TPullman = 'Si' | 'No' | null


type PartecipazioneProps = {}

const mock = {
	'nome': 'Edoardo',
	'cognome': 'Cavallo',
	'n_invitati': '5',
	'intolleranze': 'Celiaco',
	'telefono': '3926043814',
	'email': 'edoardohorse@gmail.com',
	'famiglia': 'Cavallo',
	'da_dove': 'Puglia',
	'pullman': 'si',
}

/*const ToggleButton = styled(MuiToggleButton)(() => ({
	"&.Mui-selected, &.Mui-selected:hover": {
		color: "white",
		backgroundColor: '#00ff00'

	}
}));*/

const Partecipazione = (props: PartecipazioneProps) => {

	const [daDove, setDaDove] = React.useState<TDaDove>(null);
	const [pullman, setPullman] = React.useState<TPullman>(null);

	const handleChangeDaDove = (event: React.MouseEvent<HTMLElement>, value: TDaDove) => {
		setDaDove(value);
		if(value === 'Sicilia'){
			setPullman(null)
		}
		else{
			setPullman('No')
		}
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();

		const myForm = event.target;
		const formData = new FormData(myForm);
		formData.append('da_dove', daDove)

		for (const [key, value] of formData) {
			console.log(`${key}: ${value}`);
		}


		/*
		 fetch("/", {
		 method: "POST",
		 headers: { "Content-Type": "application/x-www-form-urlencoded" },
		 body: new URLSearchParams(formData).toString(),
		 })
		 .then(() => console.log("Form successfully submitted"))
		 .catch((error) => alert(error));
		 */
	};

	return (
		<>
			<form onSubmit={handleSubmit} data-netlify={true} className={styles.partecipazione}>
				<TextField name={'nome'} type="text" placeholder={'Nome'} required defaultValue={mock['nome']}/>
				<TextField name={'cognome'} type="text" placeholder={'Cognome'} required defaultValue={mock['cognome']}/>
				<TextField name={'n_invitati'} type="number" placeholder={'Numero invitati'} required
				           defaultValue={mock['n_invitati']}/>
				<TextareaAutosize name={'intolleranze'} placeholder={'Intolleranza'} required
				                  defaultValue={mock['intolleranze']}/>
				<TextField name={'telefono'} type="tel" placeholder={'Numero telefono'} required
				           defaultValue={mock['telefono']}/>
				<TextField name={'email'} type="email" placeholder={'Email'} required defaultValue={mock['email']}/>
				<TextField name={'famiglia'} type="text" placeholder={'Famiglia appartenenza'} required
				           defaultValue={mock['famiglia']}/>

				<ToggleButtonGroup size="small" exclusive={true} onChange={handleChangeDaDove}>
					<ToggleButton color={"primary"} value="Puglia">Puglia</ToggleButton>
					<ToggleButton color={"primary"} value="Sicilia">Sicilia</ToggleButton>
				</ToggleButtonGroup>

				{pullman != null &&
				<FormControlLabel disabled={daDove === 'Sicilia'}
				                  name={'pullman'} control={<Checkbox/>} label="Pullman?"/>
				}

				{/*

				 <FormControlLabel name={'da_dove'} control={<Checkbox/>} label="Puglia/Sicilia" value={mock['da_dove']} />
				 <FormControlLabel name={'pullman'} control={<Checkbox/>} label="Pullman?" value={mock['pullman']} />
				 */}
				<Button variant="text" type={"submit"}>Invia</Button>
			</form>
		</>
	)
}


export default Partecipazione;