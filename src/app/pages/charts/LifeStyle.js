import React from 'react';
import {RadialBarChart, RadialBar, Legend, ResponsiveContainer} from 'recharts';
import axios from "axios";

const style = {
	bottom: 1,
	lineHeight: '24px',
	position: 'relative',
};


export function LifeStyle({endpoint}) {
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
				<RadialBarChart width={500} innerRadius={20} outerRadius={140} barSize={10} data={data}>
					<RadialBar minAngle={15} label={{position: 'insideStart', fill: '#fff'}} background clockWise
					           dataKey="n"/>
					<Legend iconSize={10} layout="horizontal" verticalAlign="middle" wrapperStyle={style}/>
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	);
}
