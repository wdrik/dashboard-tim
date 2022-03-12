import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => getRandomArbitrary(0, 1000)),
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgb(75, 192, 192, 0.5)',
    },
  ],
};

function HorizontalBarChart() {
  return <Bar options={options} data={data} />;
}

export default HorizontalBarChart;
