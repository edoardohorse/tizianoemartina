"use client"

import HeroBanner from "@/components/HeroBannerProps";
import style from './page.module.css'
import IndicazioniStradaliBanner from "@/components/IndicazioniStradaliBanner";


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

      </main>

    </>
  );
}
