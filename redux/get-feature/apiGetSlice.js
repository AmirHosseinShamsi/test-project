import { createSlice } from '@reduxjs/toolkit';

const apiDataSlice = createSlice({
    name: 'apiData',
    initialState: [],
    reducers: {
        setApiData: (state, action) => {
            return action.payload;
        },
    },
});

export default apiDataSlice;
