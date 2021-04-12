import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "./rwstate";
import { useSelector } from "react-redux";

export const globalSettingsSlice = createSlice({
    name: "globalSettings",
    initialState: loadState("globalSettings", {}),
    reducers: {
        /**
         * set multiple DNA values in state in global settings
         * usage:
         *  setRNA([
         *          ["some RNA", value],
         *          ["another RNA", another_value]
         *      ])
         * @param {object} items object containing key-value pairs to be set
         */
        setRNA: (state, action) => {
            for (const item of action.payload) {
                state[item[0]] = item[1];
            }
        },
    },
});

export const { setRNA } = globalSettingsSlice.actions;

export const selectRNA = RNA => useSelector(state => state.globalSettings[RNA]);
export const selectRNAwithDefault = (RNA, defaultVal) => {
    let val = useSelector(state => state.globalSettings[RNA]);
    return val != undefined ? val : defaultVal;
};
