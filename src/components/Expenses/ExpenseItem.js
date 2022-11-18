import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickHandler = (e) => {
    const parentNode = e.target.parentNode.parentNode;

    const nodeToBeDeleted = e.target.parentNode;

    parentNode.remove(nodeToBeDeleted);

    console.log("Deleted");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p>{props.locationOfExpenditure}</p>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>X</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
