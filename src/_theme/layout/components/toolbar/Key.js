import React from "react";
import {Modal} from "react-bootstrap";

export default function Key({show, handleClose}) {

	return (
		<Modal size="lg"
		       aria-labelledby="contained-modal-title-vcenter"
		       centered
		       show={show}
		       onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Legenda domande</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					<b>ID_EDIT</b>: "Identificativo univoco del soggetto"
					<br/><b>ANNO</b>: "Anno di rilevazione dei dati"
					<br/><b>PESO</b>: "Peso campionario assegnato a ciascun soggetto"
					<br/><b>GENERE</b>: "Genere"
					<br/><b>ETA</b>: "Età"
					<br/><b>PROVINCIA_RESIDENZA</b>: "Provincia di residenza"
					<br/><b>COMUNE_RESIDENZA</b>: "Comune di residenza"
					<br/><b>GIOCO</b>: "Nel corso della tua vita, hai mai giocato o scommesso per soldi?"
					<br/><b>NASCONDI_ENTITA_DENARO</b>: "Ti è capitato di dover tenere nascosta l'entità di denaro che
					spendi per il gioco alle persone che ti stanno più vicine"
					<br/><b>IMPULSO_A_SPENDERE_DI_PIU</b>: "Hai mai sentito l'impulso di giocare somme sempre maggiori
					di denaro?"
					<br/><b>PROVATO_FUMARE</b>: "Nel corso della tua vita hai mai provato a fumare sigarette?"
					<br/><b>ATTUALMENTE_FUMI</b>: "Attualmente fumi sigarette?"
					<br/><b>NUMERO_SIGARETTE</b>: "Quante sigarette fumi al giorno?"
					<br/><b>ANNI_FUMO</b>: "A quanti anni hai cominciato a fumare con una certa regolarità?"
					<br/><b>BEVUTO_VITA</b>: "Consumo di almeno 1 bevanda alcolica nella vita"
					<br/><b>UBRIACO_ANNO</b>: "Nel corso dell'ultimo anno, ti è capitato di ubriacarti almeno una
					volta?"
					<br/><b>FREQUENZA_UBRIACATO_ANNO</b>: "In questo ultimo anno quante volte ti è capitato?"
					<br/><b>BINGE_MESE</b>: "In quest'ultimo mese, ti è capitato di aver bevuto 5 o + bicchieri di vino
					ecc.?"
					<br/><b>FREQ_BINGE_MESE</b>: "Quante volte ti è capitato?"
					<br/><b>PRIMA_SOSTANZA</b>: "Nel corso della tua vita, qual è stata la prima sostanza che hai
					usato?"
					<br/><b>ETA_PRIMO_USO_SOSTANZA</b>: "Quanti anni avevi quando l'hai usata la prima volta?"
					<br/><b>FREQUENZA_GUIDA</b>: "Con che frequenza guidi un mezzo tra
					ciclomotore/sccoter/motocicletta/auto?"
					<br/><b>GUIDA_TIPO_MEZZO</b>: "Quale mezzo guidi prevalentemente?"
					<br/><b>ALMENO_1_INCIDENTE</b>: "Nel corso della tua vita hai mai avuto incidenti stradali mentre
					eri alla guida di un mezzo?"
					<br/><b>NUM_INCIDENTI</b>: "Quante volte?"
					<br/><b>GUIDA_CELL</b>: "Nell'ultima settimana, quante volte hai guidato parlando al cellulare senza
					auricolare?"
					<br/><b>GUIDA_SIGARETTA</b>: "Nell'ultima settimana, quante volte hai guidato fumando una
					sigaretta?"
					<br/><b>GUIDA_UBRIACO</b>: "Nell'ultimo anno, ti è capitato di guidare dopo aver bevuto un po’
					troppo?"
					<br/><b>GUIDA_UBRIACO_VOLTE</b>: "Qaunte volte?"
					<br/><b>GUIDA_DOPO_DROGA</b>: "Nell'ultimo anno, ti è capitato di guidare dopo aver usato sostanze
					stupefacenti?"
					<br/><b>VOLTE_GUIDA_DOPO_DROGA</b>: "Qaunte volte?"
					<br/><b>SU_MEZZO_CON_UBRIACO</b>: "Nell'ultimo anno, ti è capitato di salire su un'auto o moto
					guidata da chi aveva bevuto un po’ troppo?"
					<br/><b>VOLTE_CON_UBRIACO_GUIDA</b>: "Quante volte?"
					<br/><b>SU_MEZZO_CON_DROGATO</b>: "Nell'ultimo anno, ti è capitato di salire su un'auto o moto
					guidata da chi aveva usato sostanze stupefacenti?"
					<br/><b>VOLTE_SU_MEZZO_CON_DROGATO</b>: "Quante volte?"
					<br/><b>SUBITO_PREPOTENZE</b>: "Nel corso dell'ultimo anno, hai mai subito prepotenze da un tuo
					coetaneo?"
					<br/><b>ATTIVITA_FISICA</b>: "In una settimana normale, quanti giorni svolgi attività fisica per un
					totale di almeno un'ora al giorno?"
					<br/><b>ATTIVITA_SPORTIVA</b>: "Nell'ultimo anno, hai praticato qualche attività sportiva?"
					<br/><b>TIPO_SPORT</b>: "Quale sport hai praticato prevalentemente?"
					<br/><b>FREQ_SPORT</b>: "Con che frequenza?"
					<br/><b>RAPPORTO_SESSUALE</b>: "Hai già avuto un rapporto sessuale completo?"
					<br/><b>ANNI_PRIMO_RAPPORTO</b>: "Quanti anni avevi quando hai avuto il tup primo rapporto sessuale
					completo?"
					<br/><b>NUMERO_PARTNER</b>: "Nella tua vita, con quante diverse persone hai avuto un rapporto
					sessuale completo?"
					<br/><b>USO_ALCOL_DROGA_PRIMA_SESSO</b>: "L'ultima volta che hai avuto un rapporto sessuale, hai
					consumato alcol o droghe nei momenti precedenti il rapporto?"
					<br/><b>USO_PRESERVATIVO</b>: "L'ultima volta che hai avuto un rapporto sessuale, tu o il tuo
					partner avete usato il profilattico?"
					<br/><b>BMI</b>: "Body Mass Index - Indice di massa corporea"
					<br/><b>BMI_4CLASSI</b>: "Classi di peso a 4 categorie: sottopeso, normopeso, sovrappeso, obeso"
					<br/><b>BMI_6CLASSI</b>: "Classi di peso a 6 categorie: sottopeso I, sottopeso II, sottopeso III,
					normopeso, sovrappeso, obeso"
					<br/><b>PESO_CORPOREO</b>: "Quanto pesi?"
					<br/><b>ALTEZZA</b>: "Quanto sei alto?"
					<br/><b>CONSUMO_VERDURA</b>: "Frequenza di consumo di verdura cruda o cotta"
					<br/><b>CONSUMO_FRUTTA</b>: "Frequenza di consumo di frutta"
					<br/><b>PORZ_FRUTTA_E_VERDURA</b>: "Quante porzioni di frutta e/o verdura consumi ogni giorno?"
					<br/><b>SOSTANZE_VITA</b>: "Consumo di almeno 1 sostanza stupefacente nel corso della vita"
					<br/><b>GHB_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la seguente
					sostanza? GHB"
					<br/><b>CANNA_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la seguente
					sostanza? CANNABIS"
					<br/><b>ECSTASY_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la seguente
					sostanza? ECSTASY"
					<br/><b>AMFETAMINE_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la seguente
					sostanza? AMFETAMINE"
					<br/><b>LSD_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la seguente
					sostanza? ALLUCINOGENI/LSD"
					<br/><b>COCA_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la seguente
					sostanza? COCAINA"
					<br/><b>FUNGHI_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la seguente
					sostanza? FUNGHI ALLUCINOGENI"
					<br/><b>POPPER_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la seguente
					sostanza? POPPER"
					<br/><b>EROINA_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la seguente
					sostanza? EROINA"
					<br/><b>KETAMINA_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la seguente
					sostanza? KETAMINA"
					<br/><b>CRACK_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la seguente
					sostanza? CRACK"
					<br/><b>ANABOL_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la seguente
					sostanza? ANABOLIZZANTI STEROIDI"
					<br/><b>PILLOLE_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la seguente
					sostanza? FARMACI O PSICOFARMACI"
					<br/><b>SMART_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la seguente
					sostanza? SMART DRUGS"
					<br/><b>ALTRE_SOST_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la seguente
					sostanza? ALTRO"
					<br/><b>ECST_GHB_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la seguente
					sostanza? ECSTASY E GHB"
					<br/><b>ANABOL_ENERGY_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la
					seguente sostanza? ANABOLIZZANTI STEROIDI O ENERGY DRINK"
					<br/><b>CANNAB_SINT_1_VOLTA</b>: "Nel corso della tua vita hai mai usato almeno una volta la
					seguente sostanza? CANNABINOIDI SINTETICI"
					<br/><b>USO_SOST_NEI_30_GG</b>: "Consumo di almeno 1 sostanza stupefacente nel corso dell'ultimo
					mese"
					<br/><b>GHB_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la seguente
					sostanza? GHB"
					<br/><b>CANNA_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la seguente
					sostanza? CANNABIS"
					<br/><b>ECSTASY_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la seguente
					sostanza? ECSTASY"
					<br/><b>AMFETAMINE_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la seguente
					sostanza? AMFETAMINE"
					<br/><b>LSD_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la seguente
					sostanza? ALLUCINOGENI/LSD"
					<br/><b>COCA_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la seguente
					sostanza? COCAINA"
					<br/><b>FUNGHI_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la seguente
					sostanza? FUNGHI ALLUCINOGENI"
					<br/><b>POPPER_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la seguente
					sostanza? POPPER"
					<br/><b>EROINA_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la seguente
					sostanza? EROINA"
					<br/><b>KETAMINA_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la seguente
					sostanza? KETAMINA"
					<br/><b>CRACK_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la seguente
					sostanza? CRACK"
					<br/><b>ANABOL_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la seguente
					sostanza? ANABOLIZZANTI STEROIDI"
					<br/><b>PILLOLE_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la seguente
					sostanza? FARMACI O PSICOFARMACI"
					<br/><b>SMART_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la seguente
					sostanza? SMART DRUGS"
					<br/><b>ALTRE_SOST_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la seguente
					sostanza? ALTRO"
					<br/><b>ECST_GHB_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la seguente
					sostanza? ECSTASY E GHB"
					<br/><b>ANABOL_ENERGY_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la
					seguente sostanza? CANNABINOIDI SINTETICI"
					<br/><b>CANNAB_SINT_30_GG</b>: "Negli ultimi trenta giorni hai mai usato almeno una volta la
					seguente sostanza? ANABOLIZZANTI STEROIDI O ENERGY DRINK"
				</p>
			</Modal.Body>
		</Modal>
	);
}