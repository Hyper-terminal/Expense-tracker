import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React from "react";

const App = () => {
    const expenses = [
        {
            title: "Birthday Party",
            amount: 5000,
            date: new Date(2023, 0, 20),
            locationOfExpenditure: "Delhi",
        },
        {
            title: "Car Insurance",
            amount: 15000,
            date: new Date(2023, 0, 25),
            locationOfExpenditure: "Gurgaon",
        },
        {
            title: "Republic Day",
            amount: 10000,
            date: new Date(2023, 0, 26),
            locationOfExpenditure: "Delhi",
        },
    ];

    const addExpenseHandler = (expense) => {
        console.log(expense);
    };

    return (
        <React.StrictMode>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </React.StrictMode>
    );
};

export default App;
