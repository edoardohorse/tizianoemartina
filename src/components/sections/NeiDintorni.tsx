"use client"

import React, {useRef, useState} from 'react';
import Banner from "@/components/Banner";
import {Box, Card} from "@mui/material";
import {ISliderDintorniActions} from "@/components/SliderDintorni";
import data from '@/data/data.json'
import styles from '../style/neidintorni.module.css'
import CarouselNeiDintorni from "@/components/CarouselNeiDintorni";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {a11yProps} from "@/utility/utility";
import {AnimatePresence, motion, PanInfo} from "framer-motion"
import stylesBanner from "@/components/style/banner.module.css"
import CardBorded from "@/components/CardBorded";
import Link from "@mui/material/Link";
import CaptureGesture from "@/components/CaptureGesture";
import TabPanel, {TPanel} from "@/components/TabPanel";


const X_OFFSET = 20

type NeiDintorniProps = {}

type TDintorno = {
	goLeft: () => void,
	goRight: () => void,
	data: {
		title: string,
		content: string,
		link: string | null,
		textLink: string | null,
		images: Array<string>
	}
} & TPanel


const NeiDintorni = (props: NeiDintorniProps) => {
	const refSlider = useRef<ISliderDintorniActions>(null)
	const [value, setValue] = React.useState(0);
	const [direction, setDirection] = useState(-1)
	const N_ELEMENT = Object.keys(data.neiDintorni.sections).length


	const handleChange = (event: React.SyntheticEvent | null, newValue: number) => {

		setDirection(newValue > value ? 1 : -1)
		setValue(newValue);
	};

	const goLeft = () => {
		if (value != 0)
			handleChange(null, value - 1)
	}

	const goRight = () => {
		if (value + 1 != N_ELEMENT)
			handleChange(null, value + 1)
	}


	return (
		<>
			<Banner title={data.neiDintorni.title} id={data.neiDintorni.id} amoutInView={0.3}
			        classNameInView={styles.neidintorni_inview}>
				{/*<Grid container height={"auto"} justifyContent="center" className={styles.neidintorni}>*/}
				<p className={stylesBanner.banner_text}>{data.neiDintorni.description}</p>
				<Box>

					<Tabs
						orientation="horizontal"
						variant="scrollable"
						scrollButtons="auto"
						allowScrollButtonsMobile
						value={value}
						onChange={handleChange}
						centered
					>
						{Object.values(data.neiDintorni.sections).map((data, index) => {
							return <Tab key={index} label={data.title} {...a11yProps(index)}/>
						})}
					</Tabs>
				</Box>

				<Card className={styles.cardWrapperDintorni} elevation={0}>
					{Object.values(data.neiDintorni.sections).map((data, index: number) => {
						return <React.Fragment key={index}>
							<NeiDintorniGallery value={value} index={index} direction={direction} data={data}
							                    goLeft={goLeft} goRight={goRight}/>
						</React.Fragment>
					})}
				</Card>
			</Banner>
		</>

	)
}

const NeiDintorniGallery = (props: TDintorno) => {


	return <AnimatePresence key={props.index}>
		<TabPanel value={props.value} index={props.index}>
			<motion.div initial={{x: X_OFFSET * props.direction, opacity: 0}} animate={{x: 0, opacity: 1}}
			            className={styles.cardDintorni}>

				<CaptureGesture onLeft={props.goLeft} onRight={props.goRight}>
					<CarouselNeiDintorni images={props.data.images}/>

					<CardBorded className={styles.cardBorded} style={{gap:0}}>
						<p className={stylesBanner.banner_text}>{props.data.content}<br/>
							{props.data?.link &&
                  <Link href={props.data?.link} className={styles.link} target={"_blank"}>{props.data.textLink}</Link>
							}
						</p>

					</CardBorded>
				</CaptureGesture>
			</motion.div>
		</TabPanel>
	</AnimatePresence>
}


export default NeiDintorni;