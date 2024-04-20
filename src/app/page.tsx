"use client"

import style from './page.module.css'
import HeroBanner from "@/components/sections/HeroBanner";
import DoveECome from "@/components/sections/DoveECome";
import PerChiVieneDaFuori from "@/components/sections/PerChiVieneDaFuori";
import NeiDintorni from "@/components/sections/NeiDintorni";
import Partecipazione from "@/components/sections/Partecipazione";
import dynamic from "next/dynamic";
import Gallery from "@/components/sections/Gallery";

const ScrollTop = dynamic(() => import("@/components/ScrollTop"), {ssr: false});
const CustomAppBar = dynamic(() => import("@/components/CustomAppBar"), {ssr: false});


export default async function Home() {

	return (
		<>
			<CustomAppBar/>
			<main className={style.wrapper}>
				<HeroBanner/>
				<DoveECome/>
				<PerChiVieneDaFuori/>
				<NeiDintorni/>
				<Gallery/>
				<Partecipazione/>
				{/*<IlNostroFuturo/>*/}
			</main>
			<ScrollTop/>

		</>
	);
}
