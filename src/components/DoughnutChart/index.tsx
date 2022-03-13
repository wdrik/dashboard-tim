import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  labels: string[];
  data: number[];
}

function DoughnutChart({ labels, data }: DoughnutChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        label: '# of Votes',
        data,
        backgroundColor: [
          'rgba(65, 136, 80, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(65, 136, 80, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={chartData} />;
}

export default DoughnutChart;
