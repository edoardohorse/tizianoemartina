'use client'
import React, {useEffect, useRef, useState} from 'react';
import {
	Alert,
	Button,
	Checkbox,
	FormControlLabel, IconButton, Snackbar,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
	Typography
} from "@mui/material";
import data from '@/data/data.json'

import styles from '@/components/style/partecipazione.module.css'
import Banner from "@/components/Banner";
import NumberInput from "@/components/QuantityInput";
import MinHeightTextarea from "@/components/TextArea";
import CardBorded from "@/components/CardBorded";
import Image from "next/image";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Link from "next/link";
import style from "@/components/style/herobanner.module.css";


type TDaDove = 'Puglia' | 'Sicilia' | null

type TPullman = 'Si' | 'No' | null


type PartecipazioneProps = { window?: () => Window; }

/*const mock = {
 'nome': 'Edoardo Cavallo',
 'n_invitati': '5',
 'intolleranze': 'Celiaco',
 'telefono': '3926043814',
 'famiglia': 'Cavallo',
 'da_dove': 'Puglia',
 'pullman': 'si',
 }*/
const mock = {
	'nome': '',
	'n_invitati': '',
	'intolleranze': '',
	'telefono': '',
	'famiglia': '',
	'da_dove': '',
	'pullman': '',
}


const Partecipazione = (props: PartecipazioneProps) => {
	const [bAlertSuccess, setAlertSuccess] = useState<boolean>(false)
	const [bAlertError, setAlertError] = useState<boolean>(false)
	const [daDove, setDaDove] = React.useState<TDaDove>(null);
	const [pullman, setPullman] = React.useState<TPullman>(null);
	const [famiglia, setFamiglia] = useState<string | null>(null)
	const handleChangeDaDove = (event: React.MouseEvent<HTMLElement>, value: TDaDove) => {
		setDaDove(value);

		if (value === null) return setPullman(null)

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

		if (daDove?.toString() === undefined || daDove?.toString() === '') {
			return setAlertError(true)
		}
		formData.append('da_dove', daDove?.toString() ?? '')
		formData.append('pullman', pullman?.toString() ?? 'No')


		// @ts-ignore
		for (const [key, value] of formData) {
			console.log(`${key}: ${value}`);
		}


		fetch("/__forms.html", {
			method: "POST",
			headers: {"Content-Type": "application/x-www-form-urlencoded"},
		// @ts-ignore
			body: new URLSearchParams(formData).toString(),
		})
			.then(() => {
				setAlertError(false)
				setAlertSuccess(true)
			})
			.catch((error) => alert(error));
	};

	const handleCloseSnackSaveData = () => setAlertSuccess(false)


	const actionSalvaData = (
		<div>
			<Button color="secondary" size="small" onClick={handleCloseSnackSaveData}>
				<div style={{display: "flex", gap: "5px"}}>
					<CalendarMonthOutlinedIcon fontSize="small"/>
					<Link style={{color: "white", textDecoration: "unset"}} id={'savedate'}
					      href="/calendar.ics">{'SALVA DATA'}</Link>
				</div>
			</Button>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleCloseSnackSaveData}
			>
			</IconButton>
		</div>
	);


	return (
		<Banner title={data.partecipazione.title} id={data.partecipazione.id} background={data.partecipazione.background} classtitle={styles.title}>
			<CardBorded className={styles.form_wrapper}>
				<Image src={'/svg/girigoro.png'} alt={'girigoro'} className={styles.girigoro} width={200} height={300}/>
				<form name={'invitation'} onSubmit={handleSubmit} data-netlify={true} method="POST" className={styles.partecipazione}>
					<input type="hidden" name="form-name" value="invitation"/>

					<TextField className={styles.field} name={'nome'} type="text" required defaultValue={mock['nome']}
					           onChange={(e) => {
						           setFamiglia(e.target.value.split(" ")[1])
					           }} label="Nome & Cognome"/>

					<TextField className={styles.field} name={'famiglia'} type="text" label={'Famiglia di appartenenza'} required
					           defaultValue={famiglia} focused={!!famiglia}/>
					<div>
						<Typography fontSize={15} textAlign={"center"}>N. persone</Typography>
						<NumberInput min={1} max={10} defaultValue={1}/>
					</div>

					<MinHeightTextarea />
					<TextField className={styles.field} name={'telefono'} type="tel" label={'Numero telefono'} required
					           defaultValue={mock['telefono']}/>
					{/*	<TextField className={styles.field} name={'email'} type="email" label={'Email'} required
					 defaultValue={mock['email']}/>*/}


					<div style={{marginTop: "10px"}}>
						<Typography fontSize={15} textAlign={"center"} style={{marginBottom: "5px"}}>Regione</Typography>
						<ToggleButtonGroup value={daDove} size="medium" exclusive={true} onChange={handleChangeDaDove}>
							<ToggleButton sx={{backgroundColor: 'rgba(255,255,255,0.5)'}} className={styles.field_toggle}
							              value="Puglia">Puglia</ToggleButton>
							<ToggleButton sx={{backgroundColor: 'rgba(255,255,255,0.5)'}} className={styles.field_toggle}
							              value="Sicilia">Sicilia</ToggleButton>
						</ToggleButtonGroup>
					</div>
						<FormControlLabel style={{marginLeft: "15px"}}
						                  disabled={pullman === null}
						                  checked={pullman === 'Si'}
						                  onChange={(e, checked) => {
							                  console.log(checked)
							                  //@ts-ignore
							                  if (e.target?.checked) {
								                  setPullman('Si')
							                  } else {
								                  setPullman('No')
							                  }
						                  }}
						                  // name={'pullman'}
						                  control={<Checkbox/>} label="Riserva il tuo posto sul bus da Grottaglie"/>

					<Button variant="contained" type={"submit"}>Invia</Button>
					<Image src={'/svg/girigoro_2.png'} alt={'girigoro'} className={styles.girigoro2} width={200} height={300}/>
					<p className={styles.cels} dangerouslySetInnerHTML={{__html: data.partecipazione.cels}}></p>
					<Link className={styles.savedate} href="/calendar.ics" color="inherit">{'Salva la data'}</Link>
				</form>
			</CardBorded>

			<Snackbar
				open={bAlertSuccess}
				autoHideDuration={6000}
				onClose={handleCloseSnackSaveData}
				action={actionSalvaData}
				message={'Partecipazione inviata!'}
			/>

			<Snackbar
				open={bAlertError}
				autoHideDuration={6000}>
				<Alert onClose={() => setAlertError(false)} severity="error" variant="filled" sx={{width: '100%'}}>
					{'Riempi il campo regione'}
				</Alert>
			</Snackbar>

		</Banner>
	)
}


export default Partecipazione;