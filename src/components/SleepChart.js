import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title);

function SleepChart() {
	const [data, setData] = useState({
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		data: [5, 8, 9, 6, 7, 8, 6, 9]
	})
	return <Line data={data} />;
}

export default SleepChart;
