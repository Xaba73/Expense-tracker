import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHendler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);

    if(enteredExpenseData.title && enteredExpenseData.amount){
      setIsEditing(false);
    }
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Добавить новый продукт</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHendler}
        />
      )}
    </div>
  );
};

export default NewExpense;
