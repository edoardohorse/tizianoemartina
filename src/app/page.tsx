

import HeroBanner from "@/components/HeroBannerProps";
import style from './page.module.css'
import {useFetchTexts} from "@/utility/utility";
import IndicazioniStradaliBanner from "@/components/IndicazioniStradaliBanner";


function ArrowDownwardIcon() {
  return null;
}

export default async function Home() {
    const data = await useFetchTexts()


  return (
    <>
      {/*<Header></Header>*/}
      <main className={style.wrapper}>
        <HeroBanner title={data.banners[0].title} date={data.banners[0].date}/>

        <IndicazioniStradaliBanner/>

      </main>

    </>
  );
}
