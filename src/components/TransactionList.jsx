import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(AppContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
