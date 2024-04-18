"use client"

import React, {ElementRef, useEffect, useRef, useState} from 'react';
import Banner from "@/components/Banner";
import {Card, CardContent, Grid, Pagination, Typography} from "@mui/material";
import SliderTitoliDintorni, {ISliderDintorniActions} from "@/components/SliderDintorni";
import data from '@/data/data.json'
import {useInView, useScroll} from "framer-motion";
import styles from '../style/neidintorni.module.css'
import CarouselNeiDintorni from "@/components/CarouselNeiDintorni";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {a11yProps} from "@/utility/utility";
import {AnimatePresence, motion} from "framer-motion"

const X_OFFSET = 20


interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

type NeiDintorniProps = {}

type TDintorno = {
	value: number,
	index: number,
	direction: number
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

const NeiDintorni = (props: NeiDintorniProps) => {
	const refSlider = useRef<ISliderDintorniActions>(null)
	const refSliderContainer = useRef<HTMLDivElement>(null)
	const [value, setValue] = React.useState(0);
	const [direction, setDirection] = useState(-1)


	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setDirection(newValue > value ? 1 : -1)
		setValue(newValue);
	};


	return (
		<>
			<Banner title={data.neiDintorni.title} id={data.neiDintorni.id}>
				<Grid container height={"auto"} justifyContent="center" className={styles.neidintorni}>
					<Typography fontSize={20}>{data.neiDintorni.description}</Typography>

					<Tabs
						orientation="horizontal"
						variant="scrollable"
						scrollButtons="auto"
						allowScrollButtonsMobile
						value={value}
						onChange={handleChange}
					>
						<Tab label={data.neiDintorni.sections.piazzaamerina.title} {...a11yProps(0)}/>
						<Tab label={data.neiDintorni.sections.villaromana.title} {...a11yProps(1)}/>
						<Tab label={data.neiDintorni.sections.caltagirone.title} {...a11yProps(2)}/>
						<Tab label={data.neiDintorni.sections.enna.title} {...a11yProps(3)}/>
						<Tab label={data.neiDintorni.sections.templi.title} {...a11yProps(4)}/>
					</Tabs>

					<Card className={styles.cardWrapperDintorni} elevation={0}>
						<div ref={refSliderContainer}>
							<PiazzaArmerina value={value} index={0} direction={direction}/>
							<VillaRomana value={value} index={1} direction={direction}/>
							<Caltagirone value={value} index={2} direction={direction}/>
							<Enna value={value} index={3} direction={direction}/>
							<Templi value={value} index={4} direction={direction}/>
						</div>
					</Card>
				</Grid>
			</Banner>
		</>

	)
}

const PiazzaArmerina = (props: TDintorno) => {
	return <AnimatePresence>
		<TabPanel value={props.value} index={props.index}>
			<motion.div initial={{x: X_OFFSET * props.direction, opacity: 0}} animate={{x: 0, opacity: 1}}
			            className={styles.cardDintorni}>
				<CarouselNeiDintorni images={data.neiDintorni.sections.piazzaamerina.images}/>

				<Typography className={styles.image_description} fontSize={20}>{data.neiDintorni.sections.piazzaamerina.content}</Typography>
				{/*https://www.piazzaarmerina.org/*/}
			</motion.div>
		</TabPanel>
	</AnimatePresence>
}

const VillaRomana = (props: TDintorno) => {
	return <AnimatePresence>
		<TabPanel value={props.value} index={props.index}>
			<motion.div initial={{x: X_OFFSET * props.direction, opacity: 0}} animate={{x: 0, opacity: 1}}
			            className={styles.cardDintorni}>
				<CarouselNeiDintorni images={data.neiDintorni.sections.villaromana.images}/>

				<Typography className={styles.image_description} fontSize={20}>{data.neiDintorni.sections.villaromana.content}</Typography>
				{/*https://www.villaromanadelcasale.it/*/}
			</motion.div>
		</TabPanel>
	</AnimatePresence>
}

const Caltagirone = (props: TDintorno) => {

	return <AnimatePresence>
		<TabPanel value={props.value} index={props.index}>
			<motion.div initial={{x: X_OFFSET * props.direction, opacity: 0}} animate={{x: 0, opacity: 1}}
			            className={styles.cardDintorni}>
				<CardContent>
					<CarouselNeiDintorni images={data.neiDintorni.sections.caltagirone.images}/>

					<Typography className={styles.image_description} fontSize={20}>{data.neiDintorni.sections.caltagirone.content}</Typography>
				</CardContent>
			</motion.div>
		</TabPanel>
	</AnimatePresence>
}

const Enna = (props: TDintorno) => {
	return <AnimatePresence>
		<TabPanel value={props.value} index={props.index}>
			<motion.div initial={{x: X_OFFSET * props.direction, opacity: 0}} animate={{x: 0, opacity: 1}}
			            className={styles.cardDintorni}>
				<CarouselNeiDintorni images={data.neiDintorni.sections.enna.images}/>

				<Typography className={styles.image_description} fontSize={20}>{data.neiDintorni.sections.enna.content}</Typography>
			</motion.div>
		</TabPanel>
	</AnimatePresence>
}

const Templi = (props: TDintorno) => {
	return <AnimatePresence>
		<TabPanel value={props.value} index={props.index}>
			<motion.div initial={{x: X_OFFSET * props.direction, opacity: 0}} animate={{x: 0, opacity: 1}}
			            className={styles.cardDintorni}>
				<CarouselNeiDintorni images={data.neiDintorni.sections.templi.images}/>

				<Typography className={styles.image_description} fontSize={20}>{data.neiDintorni.sections.templi.content}</Typography>
				{/*https://www.lavalledeitempli.it/*/}
			</motion.div>
		</TabPanel>
	</AnimatePresence>
}


export default NeiDintorni;