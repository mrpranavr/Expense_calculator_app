import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
        stopEditing();
    };

    const startEditing = () => {
        setEditing(true);
    }

    const stopEditing = () => {
        setEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditing}>Add Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onCancel={stopEditing}
                    onSaveExpenseData={onSaveExpenseDataHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
