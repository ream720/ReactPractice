import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 20th 2020</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$29.26</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
