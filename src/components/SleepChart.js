import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useState } from 'react';

function SleepChart() {
	const [data, setData] = useState({
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		datasets: [
			{
				label: 'Hours of sleep',
				data: [7, 6.5, 8, 6, 7.5, 6.5, 7],
			},
		],
	});
	return <Line data={data} />;
}

export default SleepChart;
