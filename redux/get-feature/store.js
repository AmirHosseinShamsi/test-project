import {configureStore} from "@reduxjs/toolkit";
import apiDataSlice from "./apiGetSlice";

export const store = configureStore({
    reducer: {
        apiData: apiDataSlice.reducer,
    },
});