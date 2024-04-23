"use client"

import style from './page.module.css'
import HeroBanner from "@/components/sections/HeroBanner";
import DoveECome from "@/components/sections/DoveECome";
import PerChiVieneDaFuori from "@/components/sections/PerChiVieneDaFuori";
import NeiDintorni from "@/components/sections/NeiDintorni";
import Partecipazione from "@/components/sections/Partecipazione";
import dynamic from "next/dynamic";
import Gallery from "@/components/sections/Gallery";
import {useRef, useState} from "react";

const ScrollTop = dynamic(() => import("@/components/ScrollTop"), {ssr: false});
const CustomAppBar = dynamic(() => import("@/components/CustomAppBar"), {ssr: false});

function ConfirmForm() {

	const refPartecipazione = useRef<HTMLInputElement>(null);
	const [accept, setAccept] = useState(false)
	const [noAccept, setNoAccept] = useState(false)

	function toggleAccept(event: any) {
		var answer = event.target.getAttribute('data-answer');

		if (answer == "Si") {
			setAccept(true);
			setNoAccept(false);
		} else {
			setNoAccept(true);
			setAccept(false);
		}

		if (refPartecipazione != undefined) {
			const inputPartecipazione = refPartecipazione.current as HTMLInputElement;
			inputPartecipazione.value = answer
		}
		event.preventDefault();
	}

	return (
		<>
			<div className="mb-5 has-text-centered">
				<span className="wrapped-border is-size-5">CONFERMA PARTECIPAZIONE</span>
			</div>
			<div className="content my-2 ">
				<p className="has-text-justified">Ti chiediamo cortesemente di compilare le informazioni riguardo la tua partecipazione, specificando <b>Nome</b> e <b>Cognome</b> della famiglia.
				</p>
			</div>
			<form name="invite-confermation" data-netlify="true" method="post">
				<input type="hidden" name="form-name" value="invite-confermation"/>
				<div className="field">
					<label className="label">Nome</label>
					<input className="input" type="text" name="name" placeholder="es. Andrea"/>
				</div>
				<div className="field">
					<label className="label">Cognome</label>
					<input className="input" type="text" name="cognome" placeholder="es. Rosafio"/>
				</div>

				<div className="columns">
					<div className="column is-6">
						<label className="label">Parteciperai?</label>

						<input type="hidden" name="partecipazione" ref={refPartecipazione}/>
						<div className="buttons has-addons">
							<button className={`button ${accept ? "is-selected is-success" : ""}`} data-answer="Si" onClick={toggleAccept}>Si</button>
							<button className={`button ${noAccept ? "is-selected is-warning" : ""}`} data-answer="No" onClick={toggleAccept}>No</button>
						</div>
					</div>

					<div className="column">
						<div className="field">
							<label className="label">Quanti sarete?</label>
							<input className="input" type="number" name="numero" placeholder="es. 2"/>


						</div>
					</div>

				</div>

				<div className="field">
					<label className="label mb-1">Allergeni o Intolleranze</label>
					<article className="mb-2">
						<div className="is-bold">
							Se ci sono delle intolleranze o allergie, per favore, specificale qui
						</div>
					</article>
					<textarea className="textarea" name="note" placeholder="es. Lattosio, Glutine etc..."></textarea>
				</div>

				<p className="has-text-centered">
					<button className="button is-outlined is-fullwidth" type="submit">Conferma</button>
				</p>
			</form>
		</>
	);
}

export default function Home() {

	return (
		<>
			<CustomAppBar/>
			<main className={style.wrapper}>
				<HeroBanner/>
				<DoveECome/>
				<PerChiVieneDaFuori/>
				<NeiDintorni/>
				<Gallery/>
				<Partecipazione/>
				{/*<ConfirmForm/>*/}
				{/*<IlNostroFuturo/>*/}
			</main>
			<ScrollTop/>

		</>
	);
}
