<<<<<<< HEAD
import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS } from 'chart.js/auto';
import { useState } from 'react';
=======
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title);
>>>>>>> d26147b3545ec7904d9843f8b4c2f3baeca38418

function SleepChart() {
	const [data, setData] = useState({
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
<<<<<<< HEAD
		datasets: [{
			label: 'Hours of sleep',
			data: [7, 6.5, 8, 6, 7.5, 6.5, 7]
		}],
	});
=======
		data: [5, 8, 9, 6, 7, 8, 6, 9]
	})
>>>>>>> d26147b3545ec7904d9843f8b4c2f3baeca38418
	return <Line data={data} />;
}

export default SleepChart;
