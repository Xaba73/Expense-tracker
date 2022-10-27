import React from "react";
import Chart from "../Chart/Chart";

const ExpenesChart = (props) => {
  const chartDataPoints = [
    { label: "Янв", value: 0 },
    { label: "Фев", value: 0 },
    { label: "Март", value: 0 },
    { label: "Апр", value: 0 },
    { label: "Май", value: 0 },
    { label: "Июнь", value: 0 },
    { label: "Июль", value: 0 },
    { label: "Авг", value: 0 },
    { label: "Сен", value: 0 },
    { label: "Окт", value: 0 },
    { label: "Нбр", value: 0 },
    { label: "Дкбр", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints ={chartDataPoints}/>;
};

export default ExpenesChart;
