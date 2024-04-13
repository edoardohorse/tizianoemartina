"use client"

import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid, Typography} from "@mui/material";
import Banner from "@/components/Banner";
import {motion, Variants} from "framer-motion"
import styles from '../style/indicazioni.module.css'
import Image from "next/image";
import { cls } from '@/utility/utility';
import ChurchRoundedIcon from '@mui/icons-material/ChurchRounded';
import CardIndicazioneStradale from "@/components/CardIndicazioneStradale";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			className={styles.panel_wrapper}
			{...other}
		>
			{value === index && (
				<>{children}</>
			)}
		</div>
	);
}

type AccordionProps = {
	id: string,
	expanded: boolean,
	title: string,
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

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}


type IndicazioniStradaliBannerProps = {}

const IndicazioniStradaliBanner = (props: IndicazioniStradaliBannerProps) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Banner title={"Dove e Come"}>

			<Grid container height={"auto"} justifyContent="center" className={styles.tabs_wrapper}>
				<Tabs
					orientation="horizontal"
					variant="scrollable"
					value={value}
					onChange={handleChange}
				>
					<Tab label="Tradizione" {...a11yProps(0)}/>
					<Tab label="Chiesa" {...a11yProps(1)}/>
					<Tab label="Cerimonia" {...a11yProps(2)}/>
				</Tabs>

				<TabPanel value={value} index={0}>
					<div className={styles.panel}>
						<div className={styles.panel_card}>
							<CardIndicazioneStradale title={'Visita'} orario={''}
							                         dettagli={'Storicamente è tradizione locale far visita agli sposi durante la vestizione che precede il rito nuziale'}
							                         icon={<TourOutlinedIcon/>}>
								<Button variant="outlined">Casa Martina, via Nicolò Bonservizi 1<br/> Barrafranca EN</Button>
								<Button variant="outlined">Casa Tiziano, Via Dante 7<br/> Barrafranca EN</Button>
							</CardIndicazioneStradale>
						</div>
						<img loading={"lazy"} className={styles.panel_foto} src={'/tradizione_full.png'} alt={'foto tradizione'}/>
					</div>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<div className={styles.panel}>
						<div className={styles.panel_card}>
							<CardIndicazioneStradale title={'Chiesa'} orario={'16:00'} dettagli={'Chiesa Madre, Piazza Ligotti Tenente 2, Barrafranca EN'} icon={<ChurchOutlinedIcon/>}/>
						</div>
						<img src={'/chiesa.jpg'} alt={'foto chiesa'} loading={"lazy"} className={styles.panel_foto} />
					</div>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<div className={styles.panel}>
						<div className={styles.panel_card}>
							<CardIndicazioneStradale icon={<CelebrationOutlinedIcon/>} title={'Cerimonia'} orario={''}
							                         dettagli={'A seguito della cerimonia, gli sposi saranno lieti di festeggiare con voi presso la Vecchia Masseria, Cda Cutuminello Km 68, SS117bis, Caltagirone CT'}/>
						</div>
						<img loading={"lazy"} className={styles.panel_foto} src={'/location.jpg'} alt={'foto location'}/>
					</div>
				</TabPanel>
			</Grid>
		</Banner>
	)
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
