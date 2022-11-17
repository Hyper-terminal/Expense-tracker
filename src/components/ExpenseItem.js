import "./ExpenseItem.css";

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div>{props.date}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h3>{props.locationOfExpenditure}</h3>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
