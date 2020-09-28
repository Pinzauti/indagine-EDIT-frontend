import React from "react";
import {useSubheader} from "../../_theme/layout";
import {Card, CardHeader, CardBody} from '../../_theme/_partials/controls/Card'

export const Project = () => {
	const suhbeader = useSubheader();
	suhbeader.setTitle("Indagine EDIT");

	return (
		<>
			<Card>
				<CardHeader title="Informazioni sul progetto"/>
				<CardBody>
					<p>Lo studio EDIT (Epidemiologia dei Determinanti dell'Infortunistica stradale in Toscana) nasce
						dalla necessità di migliorare le conoscenze sulle possibili cause degli incidenti stradali al
						fine di rilevare quegli aspetti dei loro stili di vita potenzialmente a rischio, in primis per
						la sicurezza stradale, ma in generale per la loro incolumità e salute, indagando perciò
						abitudini alla guida ed incidenti stradali, consumo di alcol, consumo di sostanze psicotrope,
						fumo, peso corporeo, bullismo, comportamento sessuale, gioco d'azzardo, attività fisica e
						abitudini alimentari. L’indagine è stata condotta dal settore Epidemiologia dei servizi sociali
						integrati dell´Agenzia regionale di sanità della Toscana, nei mesi compresi tra febbraio e
						maggio del 2005, 2008, 2011, 2013 e 2015 coinvolgendo un campione di studenti delle scuole medie
						superiori della regione. Per restituire risultati sufficientemente rappresentativi a livello di
						AUSL, sono stati selezionati almeno 400 soggetti per ogni territorio, corrispondenti a 4 scuole
						per AUSL. Gli istituti sono stati estratti indipendentemente per ogni AUSL tramite campionamento
						a probabilità variabile proporzionale alla dimensione studentesca della AUSL stessa. L’algoritmo
						utilizzato per l’estrazione delle unità di primo stadio (scuole) all’interno dei 12 strati
						(AUSL) è di tipo sistematico. La natura campionaria dell’indagine EDIT rende necessaria, in fase
						di analisi dei dati, l’applicazione di un sistema di pesi al fine di ottenere risultati
						rappresentativi dell’intera popolazione studentesca. Ad ogni unità di rilevazione è associato un
						peso campionario (nome variabile nel dataset: ‘peso’); per procedere al calcolo degli
						indicatori, anziché un conteggio delle unità, è quindi necessario effettuare una somma dei pesi
						associati alle unità.</p>
				</CardBody>
			</Card>
			<Card>
				<CardHeader title="Vuoi aiutarci?"/>
				<CardBody>
					<a href="https://github.com/Pinzauti/indagine-edit-frontend" target="_blank" rel="noopener noreferrer">Repository Frontend</a> <br/>
					<a href="https://github.com/Pinzauti/indagine-edit-api" target="_blank" rel="noopener noreferrer">Repository API</a>
				</CardBody>
			</Card>
		</>
	);
};
