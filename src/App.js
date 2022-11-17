import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {
            title: "Birthday Party",
            amount: 5000,
            date: new Date(2023, 0, 20).toUTCString(),
            locationOfExpenditure: "Delhi",
        },
        {
            title: "Car Insurance",
            amount: 15000,
            date: new Date(2023, 0, 25).toUTCString(),
            locationOfExpenditure: "Gurgaon",
        },
        {
            title: "Republic Day",
            amount: 10000,
            date: new Date(2023, 0, 26).toUTCString(),
            locationOfExpenditure: "Delhi",
        },
    ];

    return (
        <div>
            <h2>Let's get started!</h2>
            {expenses.map((expenseItem, index) => {
                return (
                    <ExpenseItem
                        key={index}
                        title={expenseItem.title}
                        amount={expenseItem.amount}
                        date={expenseItem.date}
                        locationOfExpenditure={
                            expenseItem.locationOfExpenditure
                        }
                    />
                );
            })}
        </div>
    );
}

export default App;
