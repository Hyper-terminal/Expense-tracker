import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React from "react";

const DUMMY_EXPENSE = [
    {
        id: "e1",
        title: "Birthday Party",
        amount: 5000,
        date: new Date(2023, 0, 20),
        locationOfExpenditure: "Delhi",
    },
    {
        id: "e2",
        title: "Car Insurance",
        amount: 15000,
        date: new Date(2023, 0, 25),
        locationOfExpenditure: "Gurgaon",
    },
    {
        id: "e3",
        title: "Republic Day",
        amount: 10000,
        date: new Date(2023, 0, 26),
        locationOfExpenditure: "Delhi",
    },
];

const App = () => {
    const [expenses, setExpenses] = React.useState(DUMMY_EXPENSE);

    const addExpenseHandler = (expense) => {
        setExpenses((prevItem) => {
            return [expense, ...prevItem];
        });
    };

    return (
        <>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </>
    );
};

export default App;
