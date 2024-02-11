import { promises as fs } from 'fs';
import HeroBanner from "@/components/HeroBannerProps";
import style from './page.module.css'

const fetchTexts = async ()=>{
  let baseURL = process?.env?.APP_URL
  if(baseURL == undefined ) baseURL = process.cwd()
  const file = await fs.readFile(baseURL + '/src/data/texts.json', 'utf8');
  return JSON.parse(file);
}

export default async function Home() {
  const data = await fetchTexts()

  return (
    <>
      {/*<Header></Header>*/}
      <main className={style.wrapper}>
        <HeroBanner title={data.banners[0].title} date={data.banners[0].date}/>
      </main>

    </>
  );
}
