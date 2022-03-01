import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    // takes dataPoints objects and maps just the value for each, returns array of values
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //finding max value of expenses for each month
    const totalMaximum = Math.max(...dataPointValues);


  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
