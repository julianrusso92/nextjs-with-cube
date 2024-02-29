'use client'
import { cubejsApi } from "@/app/constants";
import { QueryRenderer } from "@cubejs-client/react";
import { AreaChartRenderer } from "./AreaChartRenderer";

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
    <AreaChartRenderer
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
        dimensions: ["your_table_name.importe"],
        timeDimensions: [],
        order: {
          "your_table_name.sum": "desc",
        },
      }}
      cubejsApi={cubejsApi}
      resetResultSetOnChange={false}
      render={(props) =>
        renderChart({
          ...props,
          chartType: "area",
          pivotConfig: {
            x: ["your_table_name.importe"],
            y: ["measures"],
            fillMissingDates: true,
            joinDateRange: false,
          },
        })
      }
    />
  );
};
