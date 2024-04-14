"use client"

import HeroBanner from "@/components/sections/HeroBanner";
import style from './page.module.css'
import IndicazioniStradaliBanner from "@/components/sections/IndicazioniStradaliBanner";
import PerChiVieneDaFuori from "@/components/sections/PerChiVieneDaFuori";
import NeiDintorni from "@/components/sections/NeiDintorni";
import Partecipazione from "@/components/sections/Partecipazione";
import data from '@/data/data.json'
import dynamic from "next/dynamic";
// import ScrollTop from "@/components/ScrollTop";
const ScrollTop = dynamic(() => import("@/components/ScrollTop"), { ssr: false });
import Toolbar from '@mui/material/Toolbar';


export default async function Home() {

  return (
    <>
      {/*<Header></Header>*/}
      <Toolbar id="back-to-top-anchor" />

      <main className={style.wrapper}>
        <HeroBanner title={data.hero.title} date={data.hero.date}/>

        <IndicazioniStradaliBanner/>
        <PerChiVieneDaFuori/>
        <NeiDintorni/>
        {/*<Partecipazione/>*/}
      </main>
      <ScrollTop/>
    </>
  );
}
