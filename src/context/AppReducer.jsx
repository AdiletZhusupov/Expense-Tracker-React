export const ACTIONS = {
  ADD: "ADD_TRANSACTION",
  DELETE: "DELETE_TRANSACTION"
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    case ACTIONS.DELETE:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        )
      };
    default:
      return state;
  }
};
