"use client"

import HeroBanner from "@/components/sections/HeroBanner";
import style from './page.module.css'
import DoveECome from "@/components/sections/DoveECome";
import PerChiVieneDaFuori from "@/components/sections/PerChiVieneDaFuori";
import NeiDintorni from "@/components/sections/NeiDintorni";
import Partecipazione from "@/components/sections/Partecipazione";
import dynamic from "next/dynamic";

const ScrollTop = dynamic(() => import("@/components/ScrollTop"), {ssr: false});
const CustomAppBar = dynamic(() => import("@/components/CustomAppBar"), {ssr: false});


export default async function Home() {

	return (
		<>
			{/*<Header></Header>*/}
			<CustomAppBar/>
			<main className={style.wrapper}>
				<HeroBanner/>

				<DoveECome/>
				<PerChiVieneDaFuori/>
				<NeiDintorni/>
				{/*<Partecipazione/>*/}
			</main>
			<ScrollTop/>

		</>
	);
}
