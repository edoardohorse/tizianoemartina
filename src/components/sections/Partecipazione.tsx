'use client'
import React, {useEffect, useRef, useState} from 'react';
import {
	Button,
	Checkbox,
	FormControlLabel,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
	Typography
} from "@mui/material";
import MuiToggleButton from "@mui/material/ToggleButton";
import {styled} from "@mui/material/styles";
import data from '@/data/data.json'
import {TextareaAutosize} from '@mui/base';

import styles from '@/components/style/partecipazione.module.css'
import Banner from "@/components/Banner";
import NumberInput from "@/components/QuantityInput";
import MinHeightTextarea from "@/components/TextArea";
import CardBorded from "@/components/CardBorded";
import Image from "next/image";


type TDaDove = 'Puglia' | 'Sicilia' | null

type TPullman = 'Si' | 'No' | null


type PartecipazioneProps = {window?: () => Window;}

/*const mock = {
	'nome': 'Edoardo Cavallo',
	'n_invitati': '5',
	'intolleranze': 'Celiaco',
	'telefono': '3926043814',
	'email': 'edoardohorse@gmail.com',
	'famiglia': 'Cavallo',
	'da_dove': 'Puglia',
	'pullman': 'si',
}*/
const mock = {
	'nome': '',
	'n_invitati': '',
	'intolleranze': '',
	'telefono': '',
	'email': '',
	'famiglia': '',
	'da_dove': '',
	'pullman': '',
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
	const [famiglia, setFamiglia] = useState<string | null>(null)

	const handleChangeDaDove = (event: React.MouseEvent<HTMLElement>, value: TDaDove) => {
		setDaDove(value);
		if (value === 'Sicilia') {
			setPullman(null)
		} else {
			setPullman('No')
		}
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();

		const myForm = event.target;
		const formData = new FormData(myForm);
		formData.append('da_dove', daDove?.toString() ?? '')

		// @ts-ignore
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
		<Banner title={data.partecipazione.title} id={data.partecipazione.id} background={data.partecipazione.background}>
			<CardBorded className={styles.form_wrapper}>
				<Image src={'/svg/girigoro.png'} alt={'girigoro'} className={styles.girigoro} width={200} height={300}/>
				<form onSubmit={handleSubmit} data-netlify={true} className={styles.partecipazione}>
					<TextField className={styles.field} name={'nome'} type="text" required defaultValue={mock['nome']}
					           onChange={(e)=>{setFamiglia(e.target.value.split(" ")[1])}}
					  label="Nome & Cognome"/>

					<TextField className={styles.field} name={'famiglia'} type="text" label={'Famiglia di appartenenza'} required
					           defaultValue={famiglia} focused={!!famiglia}/>
					<div>
						<Typography fontSize={15} textAlign={"center"}>N. persone</Typography>
						<NumberInput min={1} max={10} defaultValue={1}/>
					</div>

					<MinHeightTextarea name={'intolleranze'} required defaultValue={mock['intolleranze']}/>
					<TextField className={styles.field} name={'telefono'} type="tel" label={'Numero telefono'} required
					           defaultValue={mock['telefono']}/>
					<TextField className={styles.field} name={'email'} type="email" label={'Email'} required
					           defaultValue={mock['email']}/>


					<div>
						<Typography fontSize={15} textAlign={"center"}>Regione</Typography>
						<ToggleButtonGroup   value={daDove}  size="medium" exclusive onChange={handleChangeDaDove}>
							<ToggleButton sx={{backgroundColor: 'rgba(255,255,255,0.5)'}} className={styles.field_toggle} value="Puglia">Puglia</ToggleButton>
							<ToggleButton sx={{backgroundColor: 'rgba(255,255,255,0.5)'}} className={styles.field_toggle} value="Sicilia">Sicilia</ToggleButton>
						</ToggleButtonGroup>
						<FormControlLabel style={{marginLeft:"15px"}} disabled={daDove === 'Sicilia'}
                                  name={'pullman'} control={<Checkbox disabled={!!pullman}/>} label="Pullman?"/>
					</div>



					{/*

					 <FormControlLabel name={'da_dove'} control={<Checkbox/>} label="Puglia/Sicilia" value={mock['da_dove']} />
					 <FormControlLabel name={'pullman'} control={<Checkbox/>} label="Pullman?" value={mock['pullman']} />
					 */}
					<Button variant="contained" type={"submit"}>Invia</Button>
					<Image src={'/svg/girigoro_2.png'} alt={'girigoro'} className={styles.girigoro2} width={200} height={300}/>
				</form>
			</CardBorded>
		</Banner>
	)
}


export default Partecipazione;