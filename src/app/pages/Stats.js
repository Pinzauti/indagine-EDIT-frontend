import React from "react";
import {useSubheader} from "../../_theme/layout";
import {Card, CardHeader, CardBody, CardFooter} from '../../_theme/_partials/controls/Card'
import {Gender, Bars, LifeStyle, Drunk, Bmi} from "./charts/";

export const Stats = () => {
	const suhbeader = useSubheader();
	suhbeader.setTitle("Indagine EDIT");

	return (<>
		<Card>
			<CardBody>Di seguito saranno analizzati i dati raccolti tramite questionari sottolineando le correlazioni statistiche tra i vari comportamenti individuali e l'essere stati coinvolti o meno in incidenti stradali.</CardBody>
		</Card>
		<div className="row">
			<div className="col-lg-6 col-xxl-4">
				<Card>
					<CardHeader title="Incidenti per genere"/>
					<CardBody><Gender/></CardBody>
					<CardFooter>Viene confrontata la percentuale di incidenti commessi in percentuale al sesso dei soggetti intervistati. Ben 1/3 dei maschi intervistati è stato coinvolto in un incidente.</CardFooter>
				</Card>
			</div>
			<div className="col-lg-6 col-xxl-4">
				<Card>
					<CardHeader title="Alcol alla guida"/>
					<CardBody><Bars endpoint={process.env.REACT_APP_ENDPOINT_ALCOHOL}/></CardBody>
					<CardFooter>Viene confrontato il numero di incidenti stradali commesso da chi afferma di aver almeno una volta guidato ubriaco e chi sostiene di non averlo mai fatto.</CardFooter>
				</Card>
			</div>

			<div className="col-lg-6 col-xxl-4">
				<Card>
					<CardHeader title="Numero medio di ubriacature annue"/>
					<CardBody><Drunk/></CardBody>
					<CardFooter>Si è fatta una media del numero di volte che i soggetti si sono ubriacati in un anno a seconda del numero di incidentri stradali commessi.</CardFooter>
				</Card>
			</div>

			<div className="col-lg-6 col-xxl-4 order-1 order-xxl-1">
				<Card>
					<CardHeader title="Sostanze stupefacenti alla guida"/>
					<CardBody><Bars endpoint={process.env.REACT_APP_ENDPOINT_DRUGS}/></CardBody><br/><br/> <br/>
					<CardFooter>Viene confrontato il numero di incidenti stradali commesso da chi afferma di aver almeno una volta guidato drogato e chi sostiene di non averlo mai fatto.</CardFooter>
				</Card>
			</div>
			<div className="col-xxl-8 order-2 order-xxl-1">
				<Card>
					<CardHeader title="Stili di vita e incidenti stradali"/>
					<CardBody>
						<div className="row">
							<div className="col-lg-6">
								<LifeStyle endpoint={process.env.REACT_APP_ENDPOINT_LIFESTYLE}/> <br/><br/> <br/>

							</div>
							<div className="col-lg-6">
								<LifeStyle endpoint={process.env.REACT_APP_ENDPOINT_ACCIDENTS_LIFESTYLE}/> <br/><br/> <br/>
							</div>
						</div>
					</CardBody>
					<CardFooter>Sulla sinistra abbiamo coloro i quali non sono mai stati coinvolti in incidentri stradali. Sulla destra le persone che invece hanno commesso almeno un incidente. Si confrontano i differenti stili di vita dei soggetti.</CardFooter>
				</Card>
			</div>
			<div className="col-lg-6 col-xxl-4 order-1 order-xxl-2">
				<Card>
					<CardHeader title="BMI (Body Mass Index)"/>
					<CardBody><Bmi/></CardBody>
					<CardFooter>Si confronta, in base al BMI degli intervistati, la percentuale di persone coinvolte in incidenti stradali.</CardFooter>
				</Card>
			</div>
			<div className="col-lg-6 col-xxl-4 order-1 order-xxl-2">
				<Card>
					<CardHeader title="Fumatori abituali"/>
					<CardBody><Bars endpoint={process.env.REACT_APP_ENDPOINT_SMOKE}/></CardBody>
					<CardFooter>Viene confrontato il numero di incidenti stradali commesso dai fumatori abituali e dai non fumatori.</CardFooter>
				</Card>
			</div>
			<div className="col-lg-12 col-xxl-4 order-1 order-xxl-2">
				<Card>
					<CardHeader title="Essere stati in un mezzo con un ubriaco alla guida"/>
					<CardBody><Bars endpoint={process.env.REACT_APP_ENDPOINT_DROVE_WITH_DRUNK}/></CardBody>
					<CardFooter>Viene confrontato il numero di incidenti stradali commesso da chi è stato almeno una volta in un mezzo con alla guida un ubriaco e chi sostiene di non averlo mai fatto.</CardFooter>
				</Card>
			</div>
		</div>
	</>);
};
