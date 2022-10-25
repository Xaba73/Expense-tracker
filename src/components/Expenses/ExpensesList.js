import React from "react";
import './ExpensesList.css'
import ExpensiveItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Нет ни одного продукта</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => 
        <ExpensiveItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      )}
    </ul>
  );
};

export default ExpensesList;