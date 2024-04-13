"use client"

import style from '../style/herobanner.module.css'
import Image from "next/image";
import {useEffect, useState} from "react";

type HeroBanner = {
	title: string,
	date: string
}

const HeroBanner = (props: HeroBanner) => {
	const countdown = ""

	return (<>
		<section className={style.herobanner}>
			<Image className={style.hero} src={'/bouchet/ai/test1.png'} alt={"bouchet"} fill={true} sizes={"100vw"} priority/>
			<div className={style.content}>
				<h1>{props.title}</h1>
				<h2>{props.date}</h2>
				<Countdown/>
			</div>
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
			<span>{date.hours} ore</span>
			<span>{date.minutes} minuti</span>
			<span>{date.seconds} secondi</span>
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