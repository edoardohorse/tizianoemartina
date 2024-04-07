"use client"

import React, {ElementRef, useEffect, useRef, useState} from 'react';
import Banner from "@/components/Banner";
import {Card, CardContent, Typography} from "@mui/material";
import SliderTitoliDintorni, {ISliderDintorniActions} from "@/components/SliderDintorni";
import data from '@/data/data.json'
import {useInView, useScroll} from "framer-motion";
import styles from '../style/sliderdintorni.module.css'
import CarouselNeiDintorni from "@/components/CarouselNeiDintorni";

type NeiDintorniProps = {}

type TDintorno = {
	select: () => void
}

function useInViewDintorni(props: TDintorno){
	const ref = useRef(null)
	const isInView = useInView(ref, {amount: 0.5})

	useEffect(function () {
		if(isInView) props.select()
		// if(isInView) _.debounce(()=>props.select(), 200)
	}, [isInView]);

	return ref
}

const NeiDintorni = (props: NeiDintorniProps) => {
	const refSlider = useRef<ISliderDintorniActions>(null)
	const refSliderContainer = useRef<HTMLDivElement>(null)

	const titles    = Object.values(data.neiDintorni.sections).map(section=>section.title)

	return (
		<>
			<SliderTitoliDintorni ref={refSlider} titles={titles}/>
			<Banner title={data.neiDintorni.title}>
				<Typography fontSize={25}>{data.neiDintorni.description}</Typography>
				<Card className={styles.cardWrapperDintorni} elevation={0}>
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
	return <Card ref={ref} className={styles.cardDintorni} elevation={0}>
		<CardContent>
				<CarouselNeiDintorni images={data.neiDintorni.sections.piazzaamerina.images}/>

				<Typography fontSize={20}>{data.neiDintorni.sections.piazzaamerina.content}</Typography>
				{/*https://www.piazzaarmerina.org/*/}
			</CardContent>
		</Card>
}

const VillaRomana = (props: TDintorno) => {
	const ref = useInViewDintorni(props)
	return <Card ref={ref} className={styles.cardDintorni} elevation={0}>
		<CardContent>
			<CarouselNeiDintorni images={data.neiDintorni.sections.villaromana.images}/>

			<Typography fontSize={20}>{data.neiDintorni.sections.villaromana.content}</Typography>
			{/*https://www.villaromanadelcasale.it/*/}
		</CardContent>
	</Card>
}

const Caltagirone = (props: TDintorno) => {
	const ref = useInViewDintorni(props)
	return <Card ref={ref} className={styles.cardDintorni} elevation={0}>
		<CardContent>
			<CarouselNeiDintorni images={data.neiDintorni.sections.caltagirone.images}/>

			<Typography fontSize={20}>{data.neiDintorni.sections.caltagirone.content}</Typography>
		</CardContent>
	</Card>
}

const Enna = (props: TDintorno) => {
	const ref = useInViewDintorni(props)
	return <Card ref={ref} className={styles.cardDintorni} elevation={0}>
		<CardContent>
			<CarouselNeiDintorni images={data.neiDintorni.sections.enna.images}/>

			<Typography fontSize={20}>{data.neiDintorni.sections.enna.content}</Typography>
		</CardContent>
	</Card>
}

const Templi = (props: TDintorno) => {
	const ref = useInViewDintorni(props)
	return <Card ref={ref} className={styles.cardDintorni} elevation={0}>
		<CardContent>
			<CarouselNeiDintorni images={data.neiDintorni.sections.templi.images}/>

			<Typography fontSize={20}>{data.neiDintorni.sections.templi.content}</Typography>
			{/*https://www.lavalledeitempli.it/*/}
		</CardContent>
	</Card>
}


export default NeiDintorni;