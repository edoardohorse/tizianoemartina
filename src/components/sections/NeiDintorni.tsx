"use client"

import React, {ElementRef, useEffect, useRef, useState} from 'react';
import Banner from "@/components/Banner";
import {Card, CardContent, Typography} from "@mui/material";
import SliderTitoliDintorni, {ISliderDintorniActions} from "@/components/SliderDintorni";
import text from '@/data/texts.json'
import {useInView, useScroll} from "framer-motion";
import styles from '../style/sliderdintorni.module.css'
import _ from 'lodash'

type NeiDintorniProps = {}

type TDintorno = {
	select: () => void
}

function useInViewDintorni(props: TDintorno){
	const ref = useRef(null)
	const isInView = useInView(ref)

	useEffect(function () {
		if(isInView) props.select()
		// if(isInView) _.debounce(()=>props.select(), 200)
	}, [isInView]);

	return ref
}

const NeiDintorni = (props: NeiDintorniProps) => {
	const refSlider = useRef<ISliderDintorniActions>(null)
	const refSliderContainer = useRef<HTMLDivElement>(null)

	const titles    = text.neiDintorni.sections.map(section=>section.title)


	return (
		<>
			<br/>
			<Banner title={text.neiDintorni.title}>
				<Typography fontSize={30}>{text.neiDintorni.description}</Typography>

				<SliderTitoliDintorni ref={refSlider} titles={titles}/>
				<Card style={{border: '1px solid black', height: '50vh', overflow: 'scroll'}}>
					<div ref={refSliderContainer}>
						<PiazzaArmerina select={()=>refSlider?.current?.goTo(0)}/>
						<VillaRomana    select={()=>refSlider?.current?.goTo(1)}/>
						<Caltagirone    select={()=>refSlider?.current?.goTo(2)}/>
						<Enna           select={()=>refSlider?.current?.goTo(3)}/>
						<Templi         select={()=>refSlider?.current?.goTo(4)}/>
					</div>
				</Card>
			</Banner>
		</>

	)
}

const PiazzaArmerina = (props: TDintorno) => {
	const ref = useInViewDintorni(props)
	return <Card ref={ref} className={styles.cardDintorni}>
			<CardContent>
				<Typography>{text.neiDintorni.sections[0].content}</Typography>

				{/*gallery*/}
				{/*https://www.piazzaarmerina.org/*/}
			</CardContent>
		</Card>
}

const VillaRomana = (props: TDintorno) => {
	const ref = useInViewDintorni(props)
	return <Card ref={ref} className={styles.cardDintorni}>
		<CardContent>
			<Typography>{text.neiDintorni.sections[1].content}</Typography>

			{/*gallery*/}
			{/*https://www.villaromanadelcasale.it/*/}
		</CardContent>
	</Card>
}

const Caltagirone = (props: TDintorno) => {
	const ref = useInViewDintorni(props)
	return <Card ref={ref} className={styles.cardDintorni}>
		<CardContent>
			<Typography>{text.neiDintorni.sections[2].content}</Typography>

			{/*gallery*/}
		</CardContent>
	</Card>
}

const Enna = (props: TDintorno) => {
	const ref = useInViewDintorni(props)
	return <Card ref={ref} className={styles.cardDintorni}>
		<CardContent>
			<Typography>{text.neiDintorni.sections[3].content}</Typography>

			{/*gallery*/}
		</CardContent>
	</Card>
}

const Templi = (props: TDintorno) => {
	const ref = useInViewDintorni(props)
	return <Card ref={ref} className={styles.cardDintorni}>
		<CardContent>
			<Typography>{text.neiDintorni.sections[4].content}</Typography>

			{/*gallery*/}
			{/*https://www.lavalledeitempli.it/*/}
		</CardContent>
	</Card>
}


export default NeiDintorni;