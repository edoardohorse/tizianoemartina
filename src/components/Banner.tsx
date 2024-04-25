"use client"

import React, {ReactNode, useRef} from 'react';
import {Card} from "@mui/material";
import style from './style/banner.module.css'
import {Parallax} from "react-parallax";
import clsx from "clsx";
import {useInView} from "framer-motion";

type BannerProps = {
	title: string | null,
	children: ReactNode,
	id?: string,
	background?: string | null
	classNameInView?: string
	amoutInView? : number,
	classtitle?: string
}


const Banner = (props: BannerProps) => {
	const ref = useRef(null)
	const isInView = useInView(ref, {amount: props.amoutInView ?? 0.3})

	const content =
		<>
			<Banner.Title className={props.classtitle}>{props.title}</Banner.Title>
			<div>
				{props.children}
			</div>
		</>

	return (
		<Card className={clsx(props?.id,style.banner, isInView && props?.classNameInView, {
			[style.banner_parallax]: props.background,
		})}
		      elevation={0} id={props?.id} ref={ref}>
			{props.background
				? <Parallax bgImage={props.background} strength={500} className={style.banner_parallax_image}>
					{content}
				</Parallax>
				: <>{content}</>
			}
		</Card>

	)
}

const BannerTitle = (props: { children: ReactNode, className?: string }) => {
	if (props.children == null) return <></>
	return <h1 className={clsx(style.banner_title,props.className)}>{props.children}</h1>
}

Banner.Title = BannerTitle


export default Banner;