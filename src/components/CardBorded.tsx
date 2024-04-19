import React, {CSSProperties, ReactNode} from 'react';
import {Card, Grid, Typography} from "@mui/material";
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
import styles from './style/cardBorded.module.css'
import clsx from "clsx";

type CardIndicazioneStradaleProps = {
	title?: string,
	time?: string,
	details?: string,
	children?: ReactNode,
	style?: CSSProperties,
	className?: string,
}


const CardBorded = (props: CardIndicazioneStradaleProps) => {

	return (
			<div className={clsx(styles.cardBorder_wrapper,props.className)} style={props.style}>
				<div className={styles.cardBorder_title}>
					<div className={styles.cardBorder_wrapper_details}>
						<span className={styles.cardBorder_wrapper_details_title}>{props.title}</span>
						<span className={styles.cardBorder_wrapper_details_orario}>{props.time}</span>
					</div>
				</div>
				<div className={styles.cardBorder_details}>
					<span className={styles.cardBorder_wrapper_details_text}>{props.details}</span>
				</div>
				{props.children}
				<div className={styles.cardBorder_border1}/>
				<div className={styles.cardBorder_border2}/>
			</div>
	)
}


export default CardBorded;