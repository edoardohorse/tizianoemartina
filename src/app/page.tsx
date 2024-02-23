import HeroBanner from "@/components/HeroBannerProps";
import style from './page.module.css'
import {useFetchTexts} from "@/utility/utility";
import IndicazioniStradaliBanner from "@/components/IndicazioniStradaliBanner";

export default async function Home() {
  const data = await useFetchTexts()

  return (
    <>
      {/*<Header></Header>*/}
      <main className={style.wrapper}>
        <HeroBanner title={data.banners[0].title} date={data.banners[0].date}/>
        <IndicazioniStradaliBanner title={data.banners[1].title} indicazioni={data.banners[1].content}/>
      </main>

    </>
  );
}
