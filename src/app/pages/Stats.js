import React from "react";
import {useSubheader} from "../../_theme/layout";
import {Card, CardHeader, CardBody, CardFooter} from '../../_theme/_partials/controls/Card'
import {Gender, Bars, LifeStyle, Drunk, Bmi} from "./charts/";

export const Stats = () => {
	const suhbeader = useSubheader();
	suhbeader.setTitle("Indagine EDIT");

	return (<>
		<div className="row">
			<div className="col-lg-6 col-xxl-4">
				<Card>
					<CardHeader title="Incidenti per genere"/>
					<CardBody><Gender/></CardBody>
					<CardFooter>Notiamo come gli uomini siano maggiormente coinvolti in incidenti stradali rispetto alle
						donne.</CardFooter>
				</Card>
			</div>
			<div className="col-lg-6 col-xxl-4">
				<Card>
					<CardHeader title="Alcol alla guida"/>
					<CardBody><Bars endpoint={process.env.REACT_APP_ENDPOINT_ALCOHOL}/></CardBody>
					<CardFooter>È presente una maggior incidenza di sinistri stradali in chi almeno una volta ha
						guidato dopo avere bevuto troppo.</CardFooter>
				</Card>
			</div>

			<div className="col-lg-6 col-xxl-4">
				<Card>
					<CardHeader title="Numero medio di ubriacature annue"/>
					<CardBody><Drunk/></CardBody>
					<CardFooter>Sembra esserci una correlazione tra l'ubriacarsi frequentemente e l'essere maggiormente
						coinvolti in incidenti stradali.</CardFooter>
				</Card>
			</div>

			<div className="col-lg-6 col-xxl-4 order-1 order-xxl-1">
				<Card>
					<CardHeader title="Sostanze stupefacenti alla guida"/>
					<CardBody><Bars endpoint={process.env.REACT_APP_ENDPOINT_DRUGS}/></CardBody><br/><br/>
					<CardFooter>È presente una maggiore incidenza di sinistri stradali in chi almeno una volta ha
						guidato dopo aver assunto sostanze psicotrope.</CardFooter>
				</Card>
			</div>
			<div className="col-xxl-8 order-2 order-xxl-1">
				<Card>
					<CardHeader title="Stili di vita e incidenti stradali"/>
					<CardBody>
						<div className="row">
							<div className="col-lg-6">
								<LifeStyle endpoint={process.env.REACT_APP_ENDPOINT_LIFESTYLE}/> <br/><br/>

							</div>
							<div className="col-lg-6">
								<LifeStyle endpoint={process.env.REACT_APP_ENDPOINT_ACCIDENTS_LIFESTYLE}/> <br/><br/>
							</div>
						</div>
					</CardBody>
					<CardFooter>Notiamo come chi sia stato coinvolto in incidenti stradali abbia generalmente stili di
						vita significativamente più a rischio rispetto a chi non ha mai fatto sinistri stradali. Nello
						specifico lo stile di vita più differente sembra essere il consumo di sostanze
						stupefacenti.</CardFooter>
				</Card>
			</div>
			<div className="col-lg-6 col-xxl-4 order-1 order-xxl-2">
				<Card>
					<CardHeader title="BMI (Body Mass Index)"/>
					<CardBody><Bmi/></CardBody>
					<CardFooter>Non sembrano esservi particolari coorelazioni tra BMI e probabilità di rimanere
						coinvolti in un incidente stradale.</CardFooter>
				</Card>
			</div>
			<div className="col-lg-6 col-xxl-4 order-1 order-xxl-2">
				<Card>
					<CardHeader title="Fumatori abituali"/>
					<CardBody><Bars endpoint={process.env.REACT_APP_ENDPOINT_SMOKE}/></CardBody>
					<CardFooter>Notiamo una correlazione tra il fumare e il coinvolgimento in incidentri stradali.
						Interessante il fatto che tra i giovani intervistati i fumatori siano la
						maggioranza.</CardFooter>
				</Card>
			</div>
			<div className="col-lg-12 col-xxl-4 order-1 order-xxl-2">
				<Card>
					<CardHeader title="Essere stati in un mezzo con un ubriaco alla guida"/>
					<CardBody><Bars endpoint={process.env.REACT_APP_ENDPOINT_DROVE_WITH_DRUNK}/></CardBody>
					<CardFooter>Quasi la metà di coloro i quali sono stati su un mezzo con un conducente ubriaco sono
						stati coinvolti in incidenti stradali.</CardFooter>
				</Card>
			</div>
		</div>
	</>);
};
