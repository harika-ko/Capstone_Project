import favouritesReducer from "../reducers";
import localStorage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage: localStorage,
    transforms: [
        encryptTransform({
            secretKey: "GuesSTheSecrEtKeY",
        }),
    ],
};

const persistedReducer = persistReducer(persistConfig, favouritesReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;