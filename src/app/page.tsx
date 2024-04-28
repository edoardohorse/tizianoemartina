"use client"

import style from './page.module.css'
import HeroBanner from "@/components/sections/HeroBanner";
import DoveECome from "@/components/sections/DoveECome";
import PerChiVieneDaFuori from "@/components/sections/PerChiVieneDaFuori";
import NeiDintorni from "@/components/sections/NeiDintorni";
import Partecipazione from "@/components/sections/Partecipazione";
import dynamic from "next/dynamic";
import Gallery from "@/components/sections/Gallery";
import IlNostroFuturo from "@/components/sections/IlNostroFuturo";
import Divider from "@/components/Divider";

const ScrollTop = dynamic(() => import("@/components/ScrollTop"), {ssr: false});
const CustomAppBar = dynamic(() => import("@/components/CustomAppBar"), {ssr: false});

export default function Home() {

	return (
		<>
			<CustomAppBar/>
			<main className={style.wrapper}>
				<HeroBanner/>
				<Divider type={"odd"} marginBottom={10}/>
				<DoveECome/>
				<Divider type={"even"} marginTop={20} marginBottom={10}/>
				<PerChiVieneDaFuori/>
				<Divider type={"odd"} marginBottom={10}/>
				<NeiDintorni/>
				<Divider type={"even"}/>
				<Gallery/>
				<Divider type={"odd"}/>
				<IlNostroFuturo/>
				<Divider type={"even"}/>
				<Partecipazione/>
			</main>
			<ScrollTop/>

		</>
	);
}
