import { promises as fs } from 'fs';
import HeroBanner from "@/components/HeroBannerProps";
import style from './page.module.css'

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/data/texts.json', 'utf8');
  const data = JSON.parse(file);

/*
  //<editor-fold desc="page.tsx > Home - line 12 at 11/02/2024 11:13:10">
  console.group('page.tsx > Home - line 12 at 11/02/2024 11:13:10');
  console.log(data);
  console.groupEnd();
  //</editor-fold>*/

  return (
    <>
      {/*<Header></Header>*/}
      <main className={style.wrapper}>
        <HeroBanner title={data.banners[0].title} date={data.banners[0].date}/>
      </main>

    </>
  );
}
