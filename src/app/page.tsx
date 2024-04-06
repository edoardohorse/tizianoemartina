"use client"

import HeroBanner from "@/components/sections/HeroBanner";
import style from './page.module.css'
import IndicazioniStradaliBanner from "@/components/sections/IndicazioniStradaliBanner";
import PerChiVieneDaFuori from "@/components/sections/PerChiVieneDaFuori";
import NeiDintorni from "@/components/sections/NeiDintorni";


function ArrowDownwardIcon() {
  return null;
}

export default async function Home() {

  return (
    <>
      {/*<Header></Header>*/}
      <main className={style.wrapper}>
        <HeroBanner title={'Tiziano & Martina'} date={'31/10/2024'}/>

        <IndicazioniStradaliBanner/>
        <PerChiVieneDaFuori/>
        <NeiDintorni/>

      </main>

    </>
  );
}
