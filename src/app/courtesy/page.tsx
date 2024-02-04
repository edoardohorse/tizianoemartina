"use client"


import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import {askPreviewMode, useCheckPreviewModeOn, COOKIE_ID} from "@/utility/preview";
import {useCookies} from "next-client-cookies";
import Link from "next/link";
import {redirect} from "next/navigation";

/*export const metadata: Metadata = {
	title: "Tiziano e Martina - pagina di cortesia",
	description: "Il sito è ancora in costruzione, pazientate",
};*/



export default function Page() {
	const cookies = useCookies()

	useCheckPreviewModeOn(cookies)

	const handleAskPreviewModeOn = ()=>{
		if(askPreviewMode(cookies)) redirect("/")
	}

	return (
		<div className="container">
			<Head>
				<title>Next.js Starter!</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main>
				<Header title="Matrimonio di Tiziano e Martina"/>
				<Link href={"/"} title={"Home"}>Home</Link>
				<p className="description">
					<Image onClick={handleAskPreviewModeOn} src={"/work-penguin.gif"} alt={"Work in progress"} width={200} height={200}/>
				</p>
			</main>

		</div>
	)
}