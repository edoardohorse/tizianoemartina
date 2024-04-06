'use client'
import React, {forwardRef, ReactNode, Ref, useEffect, useImperativeHandle, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion"
import {Button, Typography} from "@mui/material";
import styles from './style/sliderdintorni.module.css'

type SliderDintorniProps = {
	titles: Array<string>,
	index?: number
}

export interface ISliderDintorniActions{
	goTo    : (index:number)=>void,
	goPrev  : ()=>void,
	goNext  : ()=>void,
	reset   : ()=>void,
}

const SliderDintorni = forwardRef((props: SliderDintorniProps, ref: Ref<ISliderDintorniActions>) => {
	const [state, setState] = useState<{lastIndex: number, currentIndex: number}>({
		lastIndex: 0,
		currentIndex: 0,
	})

	const goTo = (index: number)=>{
		if(index == 0) return reset()
		if(index <= state.currentIndex) return goPrev(state.currentIndex - index )
		if(index > state.currentIndex) return goNext(index - state.currentIndex)
	}

	const goPrev = (step: number = 1) => {
		if(state.currentIndex === 0) return
		setState({lastIndex: state.currentIndex ,currentIndex: state.currentIndex - step})
	}
	const goNext = (step: number = 1) => {
		if(state.currentIndex + 1 === props.titles.length) return
		setState({lastIndex: state.currentIndex ,currentIndex: state.currentIndex + step})
	}

	const reset = () => {
		setState({lastIndex: 0 ,currentIndex: 0})
	}

	useEffect(function onChangeIndex() {
		goTo(props?.index ?? 0)
	}, [props?.index]);

	const fromDown = {y: -25, opacity: 0}
	const fromUp = {y: 25, opacity: 0}

	useImperativeHandle(ref, ()=>({
		goTo, goNext, goPrev, reset
	}),[])

	return (
		<>
			<div className={styles.sliderdintorni}>
			{props.titles.map((title, index) => {
				return (<AnimatePresence key={index}>
						{state.currentIndex < index &&
							<motion.div key={index} initial={fromUp} className={styles.item}>
								<Typography fontSize={25} fontWeight={700}>{title}</Typography>
							</motion.div>
						}
						{state.currentIndex === index &&
							<motion.div key={index} animate={{y: 0, opacity: 1}} className={styles.item}>
								<Typography fontSize={25} fontWeight={700}>{title}</Typography>
							</motion.div>
						}
						{state.currentIndex > index &&
                <motion.div key={index} initial={fromDown} className={styles.item}>
                    <Typography fontSize={25} fontWeight={700}>{title}</Typography>
                </motion.div>
						}
					</AnimatePresence>
				)
			})}
			</div>
{/*			<Button onClick={goPrev}>Prev</Button>
			<Button onClick={goNext}>Next</Button>
			<Button onClick={reset}>Reset</Button>*/}
		</>

	)
})


export default SliderDintorni;