"use client"

import React, {useState} from 'react';
import {Button, Grid} from "@mui/material";
import Banner from "@/components/Banner";
import {AnimatePresence, motion} from "framer-motion"
import styles from '../style/indicazioni.module.css'
import Image from "next/image";
import CardIndicazioneStradale from "@/components/CardIndicazioneStradale";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import data from '@/data/data.json'
const X_OFFSET = 20


interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const {children, value, index, ...other} = props;

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

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

type IndicazioniStradaliBannerProps = {}

const IndicazioniStradaliBanner = (props: IndicazioniStradaliBannerProps) => {
	const [value, setValue] = React.useState(0);
	const [direction, setDirection] = useState(-1)

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setDirection(newValue > value ? 1 : -1)
		setValue(newValue);

	};

	return (
		<Banner title={data.doveecome.title}>

			<Grid container height={"auto"} justifyContent="center" className={styles.tabs_wrapper}>
				<Tabs
					orientation="horizontal"
					variant="scrollable"
					value={value}
					onChange={handleChange}
				>
					<Tab label={data.doveecome.tradizione.title} {...a11yProps(0)}/>
					<Tab label={data.doveecome.chiesa.title} {...a11yProps(1)}/>
					<Tab label={data.doveecome.cerimonia.title} {...a11yProps(2)}/>
				</Tabs>


				<PanelTradizione value={value} index={0} direction={direction}/>
				<PanelChiesa value={value} index={1} direction={direction}/>
				<PanelCerimonia value={value} index={2} direction={direction}/>
			</Grid>
		</Banner>
	)
}

const PanelChiesa = (props: { value: number, index: number, direction: number }) => {
	return <AnimatePresence>
		<TabPanel value={props.value} index={props.index}>
			<motion.div initial={{x: X_OFFSET * props.direction, opacity: 0}} animate={{x: 0, opacity: 1}}
			            className={styles.panel}>
				<div className={styles.panel_card}>
					<CardIndicazioneStradale title={data.doveecome.chiesa.cardTitle} time={data.doveecome.chiesa.time}>
						{data.doveecome.chiesa.links.map((btn, index) => {
							return <Button key={index} variant="contained" onClick={() => window.open(btn.url)}>
								<span dangerouslySetInnerHTML={{__html: btn.text}}/>
							</Button>
						})}
					</CardIndicazioneStradale>
				</div>
				<Image loading={"lazy"} className={styles.panel_foto} src={data.doveecome.chiesa.image} alt={'foto chiesa'}
				       width={800} height={600}/>
			</motion.div>
		</TabPanel>
	</AnimatePresence>
}

const PanelTradizione = (props: { value: number, index: number, direction: number }) => {
	const dataTab = data.doveecome.tradizione

	return <AnimatePresence>
		<TabPanel value={props.value} index={props.index}>
			<motion.div initial={{x: X_OFFSET * props.direction, opacity: 0}} animate={{x: 0, opacity: 1}}
			            className={styles.panel}>
				<div className={styles.panel_card}>
					<CardIndicazioneStradale title={dataTab.cardTitle} details={dataTab.content}>
						{dataTab.links.map((btn, index) => {
							return <Button key={index} variant="contained" onClick={() => window.open(btn.url)}>
								<span dangerouslySetInnerHTML={{__html: btn.text}}/>
							</Button>
						})}
					</CardIndicazioneStradale>
				</div>
				<Image loading={"lazy"} className={styles.panel_foto} src={dataTab.image}
				       alt={'foto tradizione'}
				       width={800} height={600}/>
			</motion.div>
		</TabPanel>
	</AnimatePresence>
}

const PanelCerimonia = (props: { value: number, index: number, direction: number }) => {
	const dataTab = data.doveecome.cerimonia

	return <AnimatePresence>
		<TabPanel value={props.value} index={props.index}>
			<motion.div initial={{x: X_OFFSET * props.direction, opacity: 0}} animate={{x: 0, opacity: 1}}
			            className={styles.panel}>
				<div className={styles.panel_card}>
					<CardIndicazioneStradale title={dataTab.cardTitle} details={dataTab.content}>
						{dataTab.links.map((btn, index) => {
							return <Button key={index} variant="contained" onClick={() => window.open(btn.url)}>
								<span dangerouslySetInnerHTML={{__html: btn.text}}/>
							</Button>
						})}
					</CardIndicazioneStradale>
				</div>
				<Image loading={"lazy"} className={styles.panel_foto} src={dataTab.image} alt={'foto cerimonia'}
				       width={800} height={600}/>
			</motion.div>
		</TabPanel>
	</AnimatePresence>
}


export default IndicazioniStradaliBanner;
