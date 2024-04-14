"use client"

import HeroBanner from "@/components/sections/HeroBanner";
import style from './page.module.css'
import IndicazioniStradaliBanner from "@/components/sections/IndicazioniStradaliBanner";
import PerChiVieneDaFuori from "@/components/sections/PerChiVieneDaFuori";
import NeiDintorni from "@/components/sections/NeiDintorni";
import Partecipazione from "@/components/sections/Partecipazione";
import data from '@/data/data.json'
import dynamic from "next/dynamic";
const ScrollTop = dynamic(() => import("@/components/ScrollTop"), {ssr: false});
const CustomAppBar = dynamic(() => import("@/components/CustomAppBar"), {ssr: false});
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: '#158e83',
		},
		secondary: {
			main: '#e2f0ed',
		},
	},
});

export default async function Home() {

	return (
		<>
			<ThemeProvider theme={theme}>
				{/*<Header></Header>*/}
				<CustomAppBar/>
				<main className={style.wrapper}>
					<HeroBanner/>

					<IndicazioniStradaliBanner/>
					<PerChiVieneDaFuori/>
					<NeiDintorni/>
					{/*<Partecipazione/>*/}
				</main>
				<ScrollTop/>
			</ThemeProvider>
		</>
	);
}
