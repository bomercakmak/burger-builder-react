import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return updatedObject(state, { purchased: false });
    case actionTypes.PURCHASE_BURGER_START:
      return updatedObject(state, { loading: true });
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = updatedObject(action.orderData, { id: action.orderId });
      return updatedObject(state, {
        loading: false,
        purchased: true,
        order: state.orders.concat(newOrder),
      });

    case actionTypes.PURCHASE_BURGER_FAIL:
      return updatedObject(state, { loading: false });
    case actionTypes.FETCH_ORDERS_START:
      return updatedObject(state, { loading: true });

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return updatedObject(state, { orders: action.orders, loading: false });
    case actionTypes.FETCH_ORDERS_FAIL:
      return updatedObject(state, { loading: false });

    default:
      return state;
  }
};

export default reducer;
