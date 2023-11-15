import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Matrimonio di     Tiziano e Martina" />
        <p className="description">
            <Image src={"/work-penguin.gif"} alt={"Work in progress"} width={200} height={200}/>
        </p>
      </main>

      {/*<Footer />*/}
    </div>
  )
}
