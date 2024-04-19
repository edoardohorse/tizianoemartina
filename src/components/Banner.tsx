"use client"

import React, {ReactNode} from 'react';
import {Card} from "@mui/material";
import style from './style/banner.module.css'
import {Parallax} from "react-parallax";
import clsx from "clsx";

type BannerProps = {
	title: string | null,
	children: ReactNode,
	id?: string,
	background?: string | null
}


const Banner = (props: BannerProps) => {

	const content =
		<>
			<Banner.Title>{props.title}</Banner.Title>
			<div>
				{props.children}
			</div>
		</>

	return (
		<Card className={clsx(props?.id, style.banner, props.background && style.banner_parallax)} elevation={0} id={props?.id}>
			{props.background
				? <Parallax bgImage={props.background} strength={500} className={style.banner_parallax_image}>
					{content}
				</Parallax>
				: <>{content}</>
			}
		</Card>

	)
}

const BannerTitle = (props: { children: ReactNode }) => {
	if (props.children == null) return <></>
	return <h1 className={style.banner_title}>{props.children}</h1>
}

Banner.Title = BannerTitle


export default Banner;