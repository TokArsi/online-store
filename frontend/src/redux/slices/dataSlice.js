import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: [],
    reducers: {
        setData: (state, action) => action.payload
    },
});

export const { setData, resetData } = dataSlice.actions;
export default dataSlice.reducer;
