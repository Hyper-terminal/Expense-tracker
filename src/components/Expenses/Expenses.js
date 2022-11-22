import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2023");

    const expenseFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.item.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={expenseFilterHandler}
            />

            {filteredExpenses.map((expenseItem) => {
                return (
                    <ExpenseItem
                        key={expenseItem.id}
                        title={expenseItem.title}
                        amount={expenseItem.amount}
                        date={expenseItem.date}
                        locationOfExpenditure={
                            expenseItem.locationOfExpenditure
                        }
                    />
                );
            })}
        </Card>
    );
};

export default Expenses;
