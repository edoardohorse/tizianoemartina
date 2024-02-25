"use client"

import React, {useEffect, useRef, useState} from 'react';
import styles from './style/indicazioni.module.css'
import {motion} from "framer-motion"


type TIndicazioneStradale = {
	title: string,
	content?: string,
	map?: any,
	link: string
}
type IndicazioniStradaliBannerProps = {
	title: string,
	indicazioni: Array<TIndicazioneStradale>
}

const IndicazioniStradaliBanner = (props: IndicazioniStradaliBannerProps) => {
	const reset = Array(props.indicazioni.length).fill(false)
	const [mapsShouldAnimate, setMapsShouldAnimate] = useState(reset);


	const changeMap = (index: number) => {
		let temp = mapsShouldAnimate
		temp = reset
		temp[index] = true
		setMapsShouldAnimate(temp)
	}

	useEffect(function () {
		changeMap(0)
	}, []);

	return (
		<div className={`banner ${styles.indicazioni_banner}`}>
			<h1>{props.title}</h1>
			<div className={styles.indicazioni_wrapper}>


				<div className={styles.indicazioni_btn_column}>
					{props.indicazioni.map((indicazione, index) => {
						return <button key={index} data-map={index}
						               className={styles.indicazioni_btn}
						               onClick={() => changeMap(index)}> {indicazione.title}</button>
					})}
				</div>

				<div className={styles.indicazioni_map_column}>
					{props.indicazioni.map((indicazione, index) => {
						return <>
							<motion.div key={index}
							            initial={{opacity: 0, pointerEvents:"none"}}
							            animate={mapsShouldAnimate[index] ? {opacity: 1, pointerEvents:"auto"} : {}}
							            transition={{duration: 0.2}}
							            className={styles.indicazioni_map_wrapper}
							>

								<div className={styles.indicazioni_map} dangerouslySetInnerHTML={{__html: indicazione?.map}}/>
								{/*<div className={styles.indicazioni_map_content} id={`map_${index}`}>*/}
								{/*</div>*/}
								<div>{indicazione?.content}</div>

							</motion.div>
						</>
					})}
				</div>
			</div>
		</div>

	)
}
export default IndicazioniStradaliBanner;