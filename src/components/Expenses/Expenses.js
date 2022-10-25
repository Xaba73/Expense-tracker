import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [enterdYear, setEnteredYead] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setEnteredYead(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enterdYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={enterdYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
