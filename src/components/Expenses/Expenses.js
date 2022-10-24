import React, {useState} from "react";

import "./Expenses.css";
import ExpensiveItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";


const Expenses = (props) => {
  const [enterdYear, setEnteredYead] = useState("2021");

  const filterChangeHandler = selectedYear => {
   setEnteredYead(selectedYear);
  }

  return (
      <Card className="expenses">
        <ExpensesFilter selected={enterdYear} onChangeFilter = {filterChangeHandler}></ExpensesFilter>
        {props.items.map((item) => (
          <ExpensiveItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
  );
};
export default Expenses;
