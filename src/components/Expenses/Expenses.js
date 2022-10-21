import React from "react";

import './Expenses.css';
import ExpensiveItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            {props.items.map((item) => (
                <ExpensiveItem 
                title={item.title}
                amount={item.amount}
                date={item.date}
                />)
            )}
        </Card>
    );
}
export default Expenses;