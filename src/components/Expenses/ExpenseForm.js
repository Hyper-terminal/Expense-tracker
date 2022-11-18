const ExpenseForm = () => {
    const inputHandler = (e) => {
        console.log(e.target.value);
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter title here..."
                    onChange={inputHandler}
                />
                <input
                    type="text"
                    name="amount"
                    placeholder="Enter amount here..."
                    onChange={inputHandler}
                />
                <input type="date" name="date" />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ExpenseForm;
