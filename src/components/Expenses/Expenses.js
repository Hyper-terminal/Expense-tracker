import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState(2022);

    const expenseFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={expenseFilterHandler}
            />
            {props.item.map((expenseItem, index) => {
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
        </Card>
    );
};

export default Expenses;
