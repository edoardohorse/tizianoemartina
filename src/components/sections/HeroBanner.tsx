"use client"

import style from '../style/herobanner.module.css'
import Image from "next/image";
import {useEffect, useState} from "react";
import data from '@/data/data.json'
import Link from "next/link";

type HeroBanner = {}

const HeroBanner = (props: HeroBanner) => {
	const countdown = ""

	return (<>
		<section className={style.herobanner} id={data.hero.id}>
			<Image className={style.hero} src={data.hero.image} alt={"bouchet"} fill={true} sizes={"100vw"} priority draggable={false}/>
			{/*<div className={style.interlaced}/>*/}
			<div className={style.content}>
				<embed src={'/hero/tiziano.svg'} className={style.tiziano}/>
				<embed src={'/hero/martina.svg'} className={style.martina}/>
				<embed src={'/hero/ampersand.svg'} className={style.ampersand}/>
				<embed src={'/hero/data.svg'} className={style.data}/>

				{/*<Image src={'/hero.svg'} width={600} height={400} alt={""} className={style.tizianoemartina} draggable={false} priority/>*/}
				{/*<h1 className={style.tiziano}>Tiziano</h1>
				<h1 className={style.ampersand}>&</h1>
				<h1 className={style.martina}>Martina</h1>
				<h2 className={style.date}>{data.hero.date.split(" ")}</h2>
					*/}
			</div>
				<Countdown/>
		</section>
	</>)
}


type CountdownDate = {
	days?: string,
	hours: string,
	minutes: string,
	seconds: string,
} | undefined | null

const Countdown = () => {
	const date = useCountdown()

	if (date === undefined) return <></>

	if (date === null) {
		return <p className={style.countdown}>{"Auguriii"}</p>
	}

	return (<>
		<p className={style.countdown}>
			{date.days && <span>{date.days} giorni</span>}
			<span>{date.hours} h</span>
			<span>{date.minutes} min</span>
			<span>{date.seconds} sec</span>
		</p>
	</>)
}

const useCountdown = () => {
	// Set the countdown date
	const [finishDate, setFinishDate] = useState(new Date('August 31, 2024 00:00:00').getTime())
	const [countdownDate, setCountdownDate] = useState<CountdownDate>(undefined)
	const [distance, setDistance] = useState(0)
	useEffect(function () {
		// Update the countdown every second
		const countdown = setInterval(function () {
			const now = new Date().getTime();
			const tempDistance = finishDate - now

			// Calculate days, hours, minutes, and seconds
			const days = Math.floor(tempDistance / (1000 * 60 * 60 * 24)).toString().padStart(2, "0")
			const hours = Math.floor((tempDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0")
			const minutes = Math.floor((tempDistance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0")
			const seconds = Math.floor((tempDistance % (1000 * 60)) / 1000).toString().padStart(2, "0")

			// console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

			// Check if the countdown is over
			if (tempDistance < 0) {
				clearInterval(countdown);
				return setDistance(tempDistance);

				// console.log('Countdown is over!');
			}

			setCountdownDate({
				"days": days,
				"hours": hours,
				"minutes": minutes,
				"seconds": seconds,
			} as CountdownDate)

			setDistance(tempDistance);

		}, 1000);


	}, []);

	if (distance < 0) {
		return null
		// console.log('Countdown is over!');
	}

	return countdownDate
}

export default HeroBanner