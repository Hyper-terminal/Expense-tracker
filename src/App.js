import ExpenseForm from "./components/Expenses/ExpenseForm";
import Expenses from "./components/Expenses/Expenses";

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

    return (
        <>
            <h2>Let's get started!</h2>
            <ExpenseForm />
            <Expenses item={expenses} />
        </>
    );
};

export default App;
