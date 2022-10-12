import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const IncomeExpenses = () => {
  const { transactions } = useContext(AppContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts.filter((amount) => amount > 0);
  const inc = income.reduce((acc, num) => acc + num, 0).toFixed(2);

  const expenses = amounts.filter((amount) => amount < 0);
  const exp = Math.abs(expenses.reduce((acc, num) => acc + num, 0)).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{inc}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{exp}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
