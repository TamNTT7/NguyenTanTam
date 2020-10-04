import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import {CartReducer} from "../reducer/cart";

const reducer = combineReducers({
    
    cartReducer:CartReducer,
  });

  const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
export const Store = () => {
  const store = createStore(reducer, enhancer);
  return store;
};
