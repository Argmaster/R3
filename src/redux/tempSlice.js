import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const temporarySlice = createSlice({
    name: "temporary",
    initialState: {},
    reducers: {
        /**
         * set multiple DNA values in state in temporary data
         * usage:
         *  setTNA([
         *          ["some TNA", value],
         *          ["another TNA", another_value]
         *      ])
         * @param {array} items object containing [key, value] array-pairs to be set
         */
        setTNA: (state, action) => {
            for (const item of action.payload) state[item[0]] = item[1];
        },
    },
});

export const { setTNA } = temporarySlice.actions;

export const selectTNA = TNA => useSelector(state => state.temporary[TNA]);
export const selectTNAwithDefault = (TNA, defaultVal) => {
    let val = useSelector(state => state.temporary[TNA]);
    return val != undefined ? val : defaultVal;
};
