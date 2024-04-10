'use client'
import React from 'react';
import {Button, Checkbox, FormControlLabel, TextField} from "@mui/material";

type PartecipazioneProps = {}


const Partecipazione = (props: PartecipazioneProps)=>{

	return (
		<>
			<TextField id="time" type="text" placeholder={'Nome'} />
			<TextField id="time" type="text" placeholder={'Cognome'} />
			<TextField id="time" type="number" placeholder={'Numero invitati'} />
			<textarea id="time" placeholder={'Intollerenza'} />
			<TextField id="time" type="tel" placeholder={'Numero telefono'} />
			<TextField id="time" type="email" placeholder={'Email'} />
			<TextField id="time" type="text" placeholder={'Famiglia appartenenza'} />
			<FormControlLabel control={<Checkbox />} label="Puglia/Sicilia" />
			<FormControlLabel control={<Checkbox />} label="Pullman?" />
			<Button variant="text">Invia</Button>
		</>
	)
}


export default Partecipazione;