import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
    reducer: {
        cartSlice: persistedReducer
    }
});
export const persistor = persistStore(store);
export default store;