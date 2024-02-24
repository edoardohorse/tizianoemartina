"use client"

import React, {useState} from 'react';
import style from './style/indicazioni.module.css'

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
	const [indizioneIndex, setIndizioneIndex] = useState(0)
	return (
		<>
			<div className={`banner ${style.indicazioni_banner}`}>
				<h1>{props.title}</h1>
				<div className={style.indicazioni_wrapper}>
					<div className={style.indicazioni_btn_wrapper}>
						{props.indicazioni.map((indicazione, index) => {
							return <button key={index} className={style.indicazioni_btn} onClick={()=>setIndizioneIndex(index)}> {indicazione.title}</button>
						})}
					</div>
					<div className={style.indicazioni_map}>
						<div dangerouslySetInnerHTML={{__html:props.indicazioni[indizioneIndex]?.map}}/>
						<div>{props.indicazioni[indizioneIndex].content}</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default IndicazioniStradaliBanner;