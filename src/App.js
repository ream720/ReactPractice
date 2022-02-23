import Expenses from "./components/Expenses";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
