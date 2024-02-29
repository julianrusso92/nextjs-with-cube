import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { PALE_COLORS_SERIES, commonOptions } from "@/app/constants";
import { useDeepCompareMemo } from "use-deep-compare";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const AreaChartRenderer = ({
    resultSet,
    pivotConfig,
    onDrilldownRequested,
  }) => {
    const datasets = useDeepCompareMemo(
      () =>
        resultSet.series(pivotConfig).map((s, index) => ({
          label: s.title,
          data: s.series.map((r) => r.value),
          yValues: [s.key],
          pointRadius: 1,
          pointHoverRadius: 1,
          backgroundColor: 'limegreen',//PALE_COLORS_SERIES[index],
          borderWidth: 0,
          fill: true,
          tension: 0,
        })),
      [resultSet, pivotConfig]
    );
    const data = {
      labels: resultSet.categories(pivotConfig).map((c) => c.x),
      datasets,
    };
    const options = {
      ...commonOptions,
      scales: {
        ...commonOptions.scales,
        y: {
          stacked: true,
        },
      },
    };
    return (
        <Line options={options} data={data} />
    );
  };