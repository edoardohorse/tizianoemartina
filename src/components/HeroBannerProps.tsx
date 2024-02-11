import style from './style/herobanner.module.css'
import Image from "next/image";



type HeroBannerProps = {
	title: string,
	date: string
}

const HeroBanner = (props: HeroBannerProps)=>{
	const countdown = ""

	return (<>
		<section className={style.herobanner}>
			<Image className={style.hero} src={'/bouchet/ai/test1.png'} alt={"bouchet"} fill={true} />
			<div className={style.content}>
				<h1>{props.title}</h1>
				<h2>{props.date}</h2>
			</div>
		</section>
	</>)
}

export default HeroBanner