import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [userInputs, setUserInputs] = useState({
        enteredAmount: "",
        enteredTitle: "",
        enteredDate: "",
    });

    const titleChangeHandler = (event) => {
        // useState is asynchronous function that's we're using callback to make sure we always get latest previous state values
        setUserInputs((prevStateValues) => {
            return {
                ...prevStateValues,
                enteredTitle: event.target.value,
            };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInputs((prevStateValues) => {
            return {
                ...prevStateValues,
                enteredAmount: event.target.value,
            };
        });
    };

    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        setUserInputs((prevStateValues) => {
            return {
                ...prevStateValues,
                enteredDate: event.target.value,
            };
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const {
            title: { value: title },
            amount: { value: amount },
            date: { value: date },
        } = event.target;

        console.log(`Title: ${title}, Amount: ${amount}, Date: ${date}`);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter title here..."
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        name="amount"
                        placeholder="Enter amount here..."
                        min="0"
                        onChange={amountChangeHandler}
                    />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        name="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
