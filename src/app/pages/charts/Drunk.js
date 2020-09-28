import React, {PureComponent} from 'react';
import {
	ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios';

export class Drunk extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			data: [{"Numero di incidenti": 0, "Ubriacature nell'ultimo anno": 1.0}, {
				"Numero di incidenti": 1,
				"Ubriacature nell'ultimo anno": 2.0
			}, {"Numero di incidenti": 2, "Ubriacature nell'ultimo anno": 3.0}, {
				"Numero di incidenti": 3,
				"Ubriacature nell'ultimo anno": 3.0
			}, {"Numero di incidenti": 4, "Ubriacature nell'ultimo anno": 3.0}]
		};
	}

	componentDidUpdate() {
		axios.get(process.env.REACT_APP_ENDPOINT_DRUNK)
			.then(result => this.setState({
				data: result.data,
			}))
	}

	render() {
		return (
			<div style={{width: '100%', height: 300}}>
				<ResponsiveContainer>
					<LineChart
						width={500}
						height={300}
						data={this.state.data}
						margin={{
							top: 5, bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3"/>
						<XAxis dataKey="name"/>
						<YAxis/>
						<Tooltip/>
						<Legend/>
						<Line type="monotone" dataKey="Numero di incidenti" stroke="#8884d8" activeDot={{r: 8}}/>
						<Line type="monotone" dataKey="Ubriacature nell'ultimo anno" stroke="#82ca9d"/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		);
	}
}
