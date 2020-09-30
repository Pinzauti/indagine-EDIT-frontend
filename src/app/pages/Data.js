import React from "react";
import {useSubheader} from "../../_theme/layout";
import getTextLabels from '../utils/TableTextLabels';
import MUIDataTable from "mui-datatables";
import {Card, CardHeader, CardBody} from '../../_theme/_partials/controls/Card';
import axios from "axios";
import {makeStyles, CircularProgress} from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});


export default function Data() {
	const suhbeader = useSubheader();
	suhbeader.setTitle("Indagine EDIT");

	const classes = useStyles();

	const [data, setData] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		let localData = localStorage.getItem('data');
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(process.env.REACT_APP_ENDPOINT_DATA);
				setData(response.data);
				try{
					localStorage.setItem("data", JSON.stringify(response.data));
				}
				catch{
					localStorage.clear();
				}
			} catch (error) {
				alert("Si è verificato un errore!");
				return false;
			}
			setIsLoading(false);
		}
		if(localData) {
			setData(JSON.parse(localData))
		} else {
			fetchData();
		}
	}, []);

	const columns = [{
		name: "ID_EDIT",
		options: {
			filter: false,
		}
	}, 'ANNO', 'PESO', 'GENERE', 'ETA', 'PROVINCIA_RESIDENZA', 'COMUNE_RESIDENZA', 'GIOCO', 'NASCONDI_ENTITA_DENARO', 'IMPULSO_A_SPENDERE_DI_PIU', 'PROVATO_FUMARE', 'ATTUALMENTE_FUMI', 'NUMERO_SIGARETTE', 'ANNI_FUMO', 'BEVUTO_VITA', 'UBRIACO_ANNO', 'FREQUENZA_UBRIACATO_ANNO', 'BINGE_MESE', 'FREQ_BINGE_MESE', 'PRIMA_SOSTANZA', 'ETA_PRIMO_USO_SOSTANZA', 'FREQUENZA_GUIDA', 'GUIDA_TIPO_MEZZO', 'ALMENO_1_INCIDENTE', 'NUM_INCIDENTI', 'GUIDA_CELL', 'GUIDA_SIGARETTA', 'GUIDA_UBRIACO', 'GUIDA_UBRIACO_VOLTE', 'GUIDA_DOPO_DROGA', 'VOLTE_GUIDA_DOPO_DROGA', 'SU_MEZZO_CON_UBRIACO', 'VOLTE_CON_UBRIACO_GUIDA', 'SU_MEZZO_CON_DROGATO', 'VOLTE_SU_MEZZO_CON_DROGATO', 'SUBITO_PREPOTENZE', 'ATTIVITA_FISICA', 'ATTIVITA_SPORTIVA', 'TIPO_SPORT', 'FREQ_SPORT', 'RAPPORTO_SESSUALE', 'ANNI_PRIMO_RAPPORTO', 'NUMERO_PARTNER', 'USO_ALCOL_DROGA_PRIMA_SESSO', 'USO_PRESERVATIVO', 'BMI', 'BMI_4CLASSI', 'BMI_6CLASSI', 'PESO_CORPOREO', 'ALTEZZA', 'CONSUMO_VERDURA', 'CONSUMO_FRUTTA', 'PORZ_FRUTTA_E_VERDURA', 'SOSTANZE_VITA', 'GHB_1_VOLTA	CANNA_1_VOLTA', 'ECSTASY_1_VOLTA', 'AMFETAMINE_1_VOLTA', 'LSD_1_VOLTA', 'COCA_1_VOLTA', 'FUNGHI_1_VOLTA', 'POPPER_1_VOLTA', 'EROINA_1_VOLTA', 'KETAMINA_1_VOLTA', 'CRACK_1_VOLTA', 'ANABOL_1_VOLTA', 'PILLOLE_1_VOLTA', 'SMART_1_VOLTA', 'ALTRE_SOST_1_VOLTA', 'ECST_GHB_1_VOLTA', 'ANAB_ENERGY_1_VOLTA', 'CANNAB_SINT_1_VOLTA', 'USO_SOST_NEI_30_GG', 'GHB_30_GG', 'CANNA_30_GG', 'ECSTASY_30_GG', 'AMFETAMINE_30_GG', 'LSD_30_GG', 'COCA_30_GG', 'FUNGHI_30_GG', 'POPPER_30_GG', 'EROINA_30_GG', 'KETAMINA_30_GG', 'CRACK_30_GG', 'ANABOLIZZ_30_GG', 'PILLOLE_30_GG', 'SMART_30_GG', 'ALTRO_30_GG', 'ECSTASY_GHB_30_GG', 'ANABOL_ENERGY_30_GG', 'CANNAB_SINT_30_GG'];

	const options = {
		filterType: 'dropdown',
		responsive: 'standard',
		textLabels: getTextLabels(),
		selectableRows: 'none',
		elevation: 0,
		downloadOptions: {
			separator: ';',
			filename: 'Dataset.csv',
			filterOptions: {useDisplayedRowsOnly: true, useDisplayedColumnsOnly: true}
		},
	};
	return (
		<>
			<Card>
				<CardHeader title={'Dati'}/>
				<CardBody>
					{isLoading ? (<div className={classes.root} style={{
						position: 'absolute',
						zIndex: 110,
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						background: 'rgba(255,255,255,0.8)'
					}}>
						<CircularProgress/>
					</div>) : ("")}
					<MUIDataTable
						data={data}
						columns={columns}
						options={options}
					/>
				</CardBody>
			</Card>
		</>
	);
};
