import React, {ReactNode} from 'react';
import {Card, Grid, Typography} from "@mui/material";
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
import styles from './style/cardindicazionestradale.module.css'

type CardIndicazioneStradaleProps = {
	title?: string,
	time?: string,
	details?: string,
	children?: ReactNode
}


const CardIndicazioneStradale = (props: CardIndicazioneStradaleProps) => {

	return (
		<>
			<div className={styles.cardIndicazione_wrapper}>
				<div className={styles.cardIndicazione_border1}/>
				<div className={styles.cardIndicazione_border2}/>
				<div className={styles.cardIndicazione_title}>
					<div className={styles.cardIndicazione_wrapper_details}>
						<span className={styles.cardIndicazione_wrapper_details_title}>{props.title}</span>
						<span className={styles.cardIndicazione_wrapper_details_orario}>{props.time}</span>
					</div>
				</div>
				<div className={styles.cardIndicazione_details}>
					<span className={styles.cardIndicazione_wrapper_details_text}>{props.details}</span>
				</div>
				{props.children}
			</div>

		</>

	)
}


export default CardIndicazioneStradale;