import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
    name: "gobalSettings",
    initialState: {},
    reducers: {
        setter: (state, action) => {
            state[action.payload.RNA] = action.payload.value;
        },
    },
});

export const { setter } = settingsSlice.actions;

export default settingsSlice.reducer;