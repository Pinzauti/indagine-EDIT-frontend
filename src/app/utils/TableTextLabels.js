const getTextLabels = () => ({
	body: {
		noMatch: 'Nessun dato presente',
		toolTip: 'Ordina',
	},
	pagination: {
		next: 'Avanti',
		previous: 'Indietro',
		rowsPerPage: 'Righe per pagina:',
		displayRows: 'di',
	},
	toolbar: {
		search: 'Cerca',
		downloadCsv: 'Scarica CSV',
		print: 'Stampa',
		viewColumns: 'Visualizza colonne',
		filterTable: 'Filtra tabella',
	},
	filter: {
		all: 'Tutti',
		title: 'FILTRI',
		reset: 'RESET',
	},
	viewColumns: {
		title: 'Mostra colonne',
		titleAria: 'Mostra/nascondi colonne',
	},
	selectedRows: {
		text: 'Righe selezionate',
		delete: 'Cancella',
		deleteAria: 'Cancella le righe selezionate',
	},
});

export default getTextLabels;