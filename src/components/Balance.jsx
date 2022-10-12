import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Balance = () => {
  const { transactions } = useContext(AppContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts
    .reduce((acc, currAmount) => acc + currAmount, 0)
    .toFixed(2);
  const sign = total < 0 ? "-" : "+";
  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        {sign}${Math.abs(total)}
      </h1>
    </>
  );
};

export default Balance;
