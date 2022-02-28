import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // will return true if the year stored in items Date is the same as the year
  //selected in filteredYear, false otherwise
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //if filteredExpenses is empty, render informative <p>.
  let expensesContent = <p>No expenses found.</p>

  // if filteredExpenses is not empty, render expense items
  // based on filteredExpenses results
  if(filteredExpenses.length > 0 ) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card class="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* renders based on expensesContent variable defined above */}
         {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
