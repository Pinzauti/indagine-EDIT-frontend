import React from 'react';
import {
	PieChart, Pie, ResponsiveContainer, Cell
} from 'recharts';
import axios from "axios";


const COLORS = ['#0061f0', '#e577d8'];

export function Gender() {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(process.env.REACT_APP_ENDPOINT_GENDER);
				setData(response.data);
			} catch (error) {
				alert("Si è verificato un errore!");
				return false;
			}
		}
		fetchData();
	}, []);

	let renderLabel = function (entry) {
		return entry.name + ": " + entry.value + "%";
	}

	return (
		<div style={{width: '100%', height: 300}}>
			<ResponsiveContainer>
				<PieChart width={400} height={400}>
					<Pie dataKey="value" startAngle={180} endAngle={0} data={data} cy={200} outerRadius={80}
					     fill="#8884d8" label={renderLabel}>  {
						data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
					} </Pie>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}
