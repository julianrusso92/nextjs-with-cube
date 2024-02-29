import { COLORS_SERIES } from "@/app/constants";
import { useDeepCompareMemo } from "use-deep-compare";
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
export const BarChartRenderer = ({ resultSet, pivotConfig, onDrilldownRequested }: any) => {
    const datasets = useDeepCompareMemo(
      () =>
        resultSet.series(pivotConfig).map((s: any, index: any) => ({
          label: s.title,
          data: s.series.map((r: any) => r.value),
          yValues: [s.key],
          backgroundColor: COLORS_SERIES[index],
          fill: false,
        })),
      [resultSet, pivotConfig]
    );

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };

    const data = {
      labels: resultSet.categories(pivotConfig).map((c: any) => c.x),
      datasets,
    };

    return (
        <Bar options={options} data={data} />
    );
  };