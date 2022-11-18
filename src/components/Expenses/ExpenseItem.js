import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
    const [amount, setAmount] = useState(props.amount);

    const clickHandler = (e) => {
        setAmount(100);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <p>{props.locationOfExpenditure}</p>
                <div className="expense-item__price">${amount}</div>
                <button onClick={clickHandler}>update</button>
            </div>
        </Card>
    );
};

export default ExpenseItem;
