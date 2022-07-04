import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

function SleepChart() {
	const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const datasets = [5, 8, 9, 6, 7, 8, 6, 9];
	const chartData = { labels, datasets };
	return <Line data={chartData} />;
}

export default SleepChart;
