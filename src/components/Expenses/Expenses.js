import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
    return (
        <Card className="expenses">
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
}

export default Expenses;
