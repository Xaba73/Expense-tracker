import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Йогурт Teos 250г",
    amount: 76.99,
    date: new Date(2022, 9, 19),
  },
  {
    id: "e2",
    title: "Куриное филе 1 кг",
    amount: 259,
    date: new Date(2022, 9, 18),
  },
  {
    id: "e3",
    title: "Видеокарта Geforce 3070",
    amount: 120000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Кефир пискаревский 1%",
    amount: 60,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
