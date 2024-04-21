'use client'
import React, {useState} from 'react';
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import Banner from "@/components/Banner";
import data from '@/data/data.json'
import Image from 'next/image'
import styles from "@/components/style/perchivienedafuori.module.css"
import stylesBanner from "@/components/style/banner.module.css"
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {a11yProps} from "@/utility/utility";
import {AnimatePresence, motion} from "framer-motion"
import TabPanel, {TPanel} from "@/components/TabPanel";
import CaptureGesture from "@/components/CaptureGesture";

const X_OFFSET = 20
type PerChiVieneDaFuoriProps = {}

type TLocation = {
	title: string
	image: string
	map: string
	text: string
}

const PerChiVieneDaFuori = (props: PerChiVieneDaFuoriProps) => {
	const [value, setValue] = React.useState(0);
	const [direction, setDirection] = useState(-1)

	const N_ELEMENT = data.perChiVieneDaFuori.location.length

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
			<Banner title={"Per chi viene da fuori"}
			        amoutInView={0.2}
			        classNameInView={styles.perchivienedafuori_inview}
			        id={data.perChiVieneDaFuori.id}>

				<p className={stylesBanner.banner_text}
				   dangerouslySetInnerHTML={{__html: data.perChiVieneDaFuori.description}}></p>
				<div className={styles.wrapper}>
					<Tabs
						orientation="horizontal"
						variant="scrollable"
						value={value}
						onChange={handleChange}
						style={{background: "rgb(226 240 237 / 90%)"}}
						allowScrollButtonsMobile
					>
						{data.perChiVieneDaFuori.location.map((location: TLocation, index: number) => {
							return <Tab key={index} label={location.title} {...a11yProps(index)}/>
						})}
					</Tabs>

					<CaptureGesture onLeft={goLeft} onRight={goRight}>
						{data.perChiVieneDaFuori.location.map((location: TLocation, index: number) => {
							return <React.Fragment key={index}><Content value={value} index={index} direction={direction} location={location}/></React.Fragment>
						})
						}
					</CaptureGesture>
				</div>

			</Banner>
		</>

	)
}

const Content = (props: TPanel & { location: TLocation }) => {
	const go = (link: string) => {
		window.open(link, '_blank')
	}

	return <>
		<AnimatePresence>
			<TabPanel value={props.value} index={props.index}>
				<Grid item key={props.index}>
					<Card elevation={3} className={styles.card}>
						<motion.div initial={{x: X_OFFSET * props.direction, opacity: 0}} animate={{x: 0, opacity: 1}}
						            className={styles.panel}>
							<CardContent style={{padding: '0 0 14px 0'}}>
								<Typography fontSize={20} fontWeight={700}>
									<Image src={props.location.image} width={400} height={300}
									       style={{objectFit: "cover", borderRadius: "4px"}}
									       alt={'hotel_marconi'}/>

								</Typography>
								<CardActions sx={{justifyContent: "center"}}>
									<Button size="medium" variant="contained" onClick={() => go(props.location.map)}>
										<span dangerouslySetInnerHTML={{__html: props.location.text}}/>
									</Button>
								</CardActions>
							</CardContent>
						</motion.div>
					</Card>
				</Grid>
			</TabPanel>
		</AnimatePresence>
	</>
}


export default PerChiVieneDaFuori;