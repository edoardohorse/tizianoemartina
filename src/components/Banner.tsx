"use client"

import React, {ReactNode} from 'react';
import {Card} from "@mui/material";
import style from './style/banner.module.css'

type BannerProps = {
	title: string | null,
	children: ReactNode
}


const Banner = (props: BannerProps)=>{

	return (
		<>
			<Card className={style.banner} elevation={0}>
				<Banner.Title>{props.title}</Banner.Title>
				<div>
					{props.children}
				</div>
			</Card>
		</>

	)
}

const BannerTitle =( props : {children: ReactNode})=>{
	if(props.children == null) return <></>
	return <h1 className={style.banner_title}>{props.children}</h1>
}

Banner.Title = BannerTitle


export default Banner;