"use client"

import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography} from "@mui/material";
import Banner from "@/components/Banner";
import {motion, Variants} from "framer-motion"
import styles from './style/indicazioni.module.css'
import Image from "next/image";


type AccordionProps = {
	id: string,
	expanded: boolean,
	handleChange: (event: React.SyntheticEvent, isExpanded: boolean) => void
}

type FotoProps = {
	show: boolean
}

const cardVariants: Variants = {
	offscreen: {
		y: 300
	},
	onscreen: {
		y: 50,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.8
		}
	}
};

type IndicazioniStradaliBannerProps = {}

const IndicazioniStradaliBanner = (props: IndicazioniStradaliBannerProps) => {
	const [expanded, setExpanded] = React.useState<string | false>('panel1');

	const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Banner title={"Dove e Come"}>
			<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} height={"auto"}>
				<Box gridColumn="span 5">
					<AccordionChiesa id={'panel1'} expanded={expanded === 'panel1'} handleChange={handleChange('panel1')}/>
					<AccordionTradizione id={'panel2'} expanded={expanded === 'panel2'} handleChange={handleChange('panel2')}/>
					<AccordionCerimonia id={'panel3'} expanded={expanded === 'panel3'} handleChange={handleChange('panel3')}/>
				</Box>
				<Box gridColumn="span 7" className={styles.foto_column}>
					<FotoChiesa      show={expanded === 'panel1'}/>
					<FotoCase        show={expanded === 'panel2'}/>
					<FotoRistorante  show={expanded === 'panel3'}/>
				</Box>
			</Box>
		</Banner>
	)
}

const AccordionChiesa = (props: AccordionProps) => {
	return <Accordion expanded={props.expanded} onChange={props.handleChange}>
		<AccordionSummary
			// expandIcon={<ArrowDownwardIcon />}
			aria-controls="panel1-content"
			id="panel1-header"
		>
			Chiesa
		</AccordionSummary>
		<AccordionDetails>
			<Typography fontSize={30} fontWeight={500} lineHeight={1.1}>
				Il rito nuziale si terrà alle ore 16:00 presso la Chiesa Madre,
				sita in Piazza Ligotti Tenente 2, Barrafranca EN
			</Typography>
			<Typography>
				Nelle zone circostanti non ci sono aree parcheggio apposite, si consiglia di trovare posto nelle vie
				principali (Corso Vittorio Emanuele, Corso Garibaldi, via Romano, via Santa Rita, Corso Umberto, Piazza
				Umberto)
			</Typography>
		</AccordionDetails>
	</Accordion>
}

const AccordionTradizione = (props: AccordionProps) => {
	return <Accordion expanded={props.expanded} onChange={props.handleChange}>
		<AccordionSummary
			// expandIcon={<ArrowDownwardIcon />}
			aria-controls="panel1-content"
			id="panel1-header"
		>
			Tradizione
		</AccordionSummary>
		<AccordionDetails>
			<Typography fontSize={30} fontWeight={500} lineHeight={1.1}>
				Storicamente è tradizione locale far visita agli sposi durante la vestizione che precede il rito nuziale. Per
				chi avesse piacere riportiamo qui sotto i rispettivi indirizzi:
				<br/>

				<Button variant="outlined">Casa Martina, via Nicolò Bonservizi 1, Barrafranca EN</Button>
				<Button variant="outlined">Casa Tiziano, Via Dante 7, Barrafranca EN</Button>

			</Typography>
		</AccordionDetails>
	</Accordion>
}

const AccordionCerimonia = (props: AccordionProps) => {
	return <Accordion expanded={props.expanded} onChange={props.handleChange}>
		<AccordionSummary
			// expandIcon={<ArrowDownwardIcon />}
			aria-controls="panel1-content"
			id="panel1-header"
		>
			Cerimonia
		</AccordionSummary>
		<AccordionDetails>
			<Typography fontSize={30} fontWeight={500} lineHeight={1.1}>
				A seguito della cerimonia, gli sposi saranno lieti di festeggiare con voi presso la Vecchia Masseria, Cda
				Cutuminello Km 68, SS117bis, Caltagirone CT
			</Typography>
		</AccordionDetails>
	</Accordion>
}

const FotoChiesa = (props: FotoProps) => {
	return <motion.div initial={{opacity: 0, pointerEvents: "none", position: "absolute"}}
	                   animate={props.show ? {opacity: 1, pointerEvents: "auto"} : {}}
	                   transition={{duration: 0.2}} className={styles.foto_wrapper}>
		<Image className={styles.foto} src={'/chiesa.jpg'} alt={'foto chiesa'} fill={true}/>
	</motion.div>
}

const FotoCase = (props: FotoProps) => {
	return <motion.div initial={{opacity: 0, pointerEvents: "none", position: "absolute"}}
	                   animate={props.show ? {opacity: 1, pointerEvents: "auto"} : {}}
	                   transition={{duration: 0.2}} className={styles.foto_wrapper}>
		<Image className={styles.foto} src={'/tradizione_cleanup1_cut.jpg'} alt={'foto chiesa'} fill={true} style={{objectFit: 'contain'}}/>
	</motion.div>
}

const FotoRistorante = (props: FotoProps) => {
	return <motion.div initial={{opacity: 0, pointerEvents: "none", position: "absolute"}}
	                   animate={props.show ? {opacity: 1, pointerEvents: "auto"} : {}}
	                   transition={{duration: 0.2}} className={styles.foto_wrapper}>

	</motion.div>
}


function Card({children}: { children: ReactNode }) {
	// const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

	return (
		<motion.div
			className={styles.cardContainer}
			initial="offscreen"
			whileInView="onscreen"
			viewport={{once: true, amount: 0.8}}
		>
			<div className="splash"/>
			<motion.div className={styles.card} variants={cardVariants}>
				{children}
			</motion.div>
		</motion.div>
	);
}


export default IndicazioniStradaliBanner;
