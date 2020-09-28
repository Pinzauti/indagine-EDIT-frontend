import React from 'react';
import {
	BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import axios from "axios";

export function Bars({endpoint}) {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(endpoint);
				setData(response.data);
			} catch (error) {
				alert("Si è verificato un errore!");
				return false;
			}
		}
		fetchData();
	}, [endpoint]);

	return (
		<div style={{width: '100%', height: 300}}>
			<ResponsiveContainer>
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 20, right: 30, left: 20, bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3"/>
					<XAxis dataKey="name"/>
					<YAxis/>
					<Tooltip/>
					<Bar dataKey='Hanno avuto incidenti' stackId="a" fill="#8884d8"/>
					<Bar dataKey='Mai avuto incidenti' stackId="a" fill="#82ca9d"/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
