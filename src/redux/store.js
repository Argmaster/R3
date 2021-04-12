import { configureStore } from "@reduxjs/toolkit";
import { throttle } from "lodash";
import { saveState } from "./rwstate";
import { globalSettingsSlice } from "./settingsSlice";
import { temporarySlice } from "./tempSlice";


const store = configureStore({
    reducer: {
        globalSettings: globalSettingsSlice.reducer,
        temporary: temporarySlice.reducer,
    },
});

export default store;

store.subscribe(
    throttle(
        () => saveState("globalSettings", store.getState().globalSettings),
        1000
    )
);
