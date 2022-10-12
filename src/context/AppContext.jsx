import { createContext, useReducer } from "react";
import { AppReducer, ACTIONS } from "./AppReducer";
const initialState = {
  transactions: []
};

export const AppContext = createContext(initialState);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({ type: ACTIONS.ADD, payload: transaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: ACTIONS.DELETE, payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
