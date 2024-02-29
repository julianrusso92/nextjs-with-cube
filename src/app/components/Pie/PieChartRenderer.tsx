import { COLORS_SERIES } from "@/app/constants";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChartRenderer = ({
  resultSet,
  pivotConfig,
  onDrilldownRequested,
}: any) => {
  const data = {
    labels: resultSet.categories(pivotConfig).map((c: any) => c.x),
    datasets: resultSet.series(pivotConfig).map((s: any) => ({
      label: s.title,
      data: s.series.map((r: any) => r.value),
      yValues: [s.key],
      backgroundColor: COLORS_SERIES,
      hoverBackgroundColor: COLORS_SERIES,
    })),
  };

  return <Pie data={data} />;
};
