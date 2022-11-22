import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseObj = {
            ...enteredExpenseData,
            id: Math.random(),
        };
        props.onAddExpense(expenseObj);
    };

    const formToggleHandler = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="new-expense">
            {isOpen && (
                <ExpenseForm
                    formToggle={formToggleHandler}
                    onSaveExpenseData={saveExpenseDataHandler}
                />
            )}

            {!isOpen && (
                <button onClick={formToggleHandler}>Add new Expense</button>
            )}
        </div>
    );
};
export default NewExpense;
