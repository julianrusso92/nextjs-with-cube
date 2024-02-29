"use client";
import { cubejsApi } from "@/app/constants";
import { QueryRenderer } from "@cubejs-client/react";
import { PieChartRenderer } from "./PieChartRenderer";
const renderChart = ({
  resultSet,
  error,
  pivotConfig,
  onDrilldownRequested,
}: any) => {
  if (error) {
    return <div>{error.toString()}</div>;
  }

  if (!resultSet) {
    return <>Cargando...</>;
  }

  return (
    <PieChartRenderer
      resultSet={resultSet}
      pivotConfig={pivotConfig}
      onDrilldownRequested={onDrilldownRequested}
    />
  );
};
export const ChartRenderer = () => {
  return (
    <QueryRenderer
      query={{
        measures: ["your_table_name.sum"],
        dimensions: ["your_table_name.cliente"],
        order: {
          "your_table_name.sum": "desc",
        },
        filters: [
          {
            member: "your_table_name.importependienteorigen",
            operator: "gt",
            values: ["0"],
          },
        ],
      }}
      cubejsApi={cubejsApi}
      resetResultSetOnChange={false}
      render={(props) =>
        renderChart({
          ...props,
          chartType: "pie",
          pivotConfig: {
            x: ["your_table_name.cliente"],
            y: ["measures"],
            fillMissingDates: true,
            joinDateRange: false,
          },
        })
      }
    />
  );
};
