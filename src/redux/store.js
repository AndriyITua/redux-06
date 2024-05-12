import { createStore, combineReducers } from "redux";
import { balanceReducer } from "./balanceSlice";
import { localeReducer } from "./localeSlice";

const rootReducer = combineReducers({
  balance: balanceReducer, // initialValue balanceReducer = { value: 100 }
  locale: localeReducer, // initialValue localeReducer = { lang: "uk" }
});

export const store = createStore(rootReducer);
