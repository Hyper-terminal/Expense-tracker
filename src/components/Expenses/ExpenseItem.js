import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <p>{props.locationOfExpenditure}</p>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;
