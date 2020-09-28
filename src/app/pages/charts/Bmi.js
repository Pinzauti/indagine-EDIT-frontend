import React from 'react';
import {
	ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import axios from "axios";

export function Bmi() {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(process.env.REACT_APP_ENDPOINT_BMI);
				setData(response.data);
			} catch (error) {
				alert("Si è verificato un errore!");
				return false;
			}
		}
		fetchData();
	}, []);


	return (
		<div style={{width: '100%', height: 300}}>
			<ResponsiveContainer>
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5, bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3"/>
					<XAxis dataKey="name"/>
					<YAxis/>
					<Tooltip/>
					<Legend/>
					<Line type="monotone" dataKey="BMI" stroke="#8884d8" activeDot={{r: 8}}/>
					<Line type="monotone" dataKey="Incidenti" stroke="#82ca9d"/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
