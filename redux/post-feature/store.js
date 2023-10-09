// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import apiDataSlice from "redux/get-feature/apiGetSlice";
// ... (existing code for fetching data)

export const postDataSlice = createSlice({
    name: 'postData',
    initialState: {},
    reducers: {
        setPostedData: (state, action) => {
            return action.payload;
        },
    },
});


export const store = configureStore({
    reducer: {
        apiData: apiDataSlice.reducer,
        postData: postDataSlice.reducer, // Add the new slice
    },
});
