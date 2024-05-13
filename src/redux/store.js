import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import balanceReducer from "./balanceSlice";
import localeReducer from "./localeSlice";

const balancePersistConfig = {
  key: "balanceValue",
  storage,
  whitelist: ["value"],
};

const pBalanceReducer = persistReducer(balancePersistConfig, balanceReducer);

export const store = configureStore({
  reducer: {
    balance: pBalanceReducer, // initialValue balanceReducer = { value: 100 }
    locale: localeReducer, // initialValue localeReducer = { lang: "uk" }
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
