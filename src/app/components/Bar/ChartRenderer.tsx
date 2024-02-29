'use client'
import cubejs from "@cubejs-client/core";
import { QueryRenderer } from "@cubejs-client/react";
import { BarChartRenderer } from "./BarChartRenderer";
import { cubejsApi } from "@/app/constants";

  const renderChart = ({ resultSet, error, pivotConfig, onDrilldownRequested }: any) => {
    if (error) {
      return <div>{error.toString()}</div>;
    }
  
    if (!resultSet) {
      return <>Cargando...</>;
    }
  
    return (
    <BarChartRenderer
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
    "measures": [
      "your_table_name.sum"
    ],
    "dimensions": [
      "your_table_name.fecha"
    ],
    "order": {
      "your_table_name.sum": "desc"
    }
  }}
        cubejsApi={cubejsApi}
        resetResultSetOnChange={false}
        render={(props) => renderChart({
          ...props,
          chartType: 'bar',
          pivotConfig: {
    "x": [
      "your_table_name.fecha"
    ],
    "y": [
      "measures"
    ],
    "fillMissingDates": true,
    "joinDateRange": false
  }
        })}
      />
    );
  };