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
import stylesBanner from "@/components/style/banner.module.css"
import CardBorded from "@/components/CardBorded";
import Link from "@mui/material/Link";


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
	direction: number,
	data: typeof data.neiDintorni.sections.piazzaamerina,
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
					<p className={stylesBanner.banner_text}>{data.neiDintorni.description}</p>

					<Tabs
						orientation="horizontal"
						variant="scrollable"
						scrollButtons="auto"
						allowScrollButtonsMobile
						value={value}
						onChange={handleChange}
					>
						{Object.values(data.neiDintorni.sections).map((data,index )=>{
							return <Tab label={data.title} {...a11yProps(index)}/>
						})}
					</Tabs>

					<Card className={styles.cardWrapperDintorni} elevation={0}>
						<div ref={refSliderContainer}>
							{Object.values(data.neiDintorni.sections).map((data,index )=>{
								return <NeiDintorniGallery value={value} index={index} direction={direction} data={data}/>
							})}
						</div>
					</Card>
				</Grid>
			</Banner>
		</>

	)
}

const NeiDintorniGallery = (props: TDintorno) => {
	return <AnimatePresence key={props.index}>
		<TabPanel value={props.value} index={props.index}>
			<motion.div initial={{x: X_OFFSET * props.direction, opacity: 0}} animate={{x: 0, opacity: 1}}
			            className={styles.cardDintorni}>
				<CarouselNeiDintorni images={props.data.images}/>

				<CardBorded className={styles.cardBorded}>
					<p className={stylesBanner.banner_text}>{props.data.content}<br/>
						{props.data?.link &&
							<Link href={props.data?.link} target={"_blank"}>{props.data.textLink}</Link>
						}
					</p>

				</CardBorded>

			</motion.div>
		</TabPanel>
	</AnimatePresence>
}


export default NeiDintorni;