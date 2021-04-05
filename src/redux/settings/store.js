import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slice";

export default configureStore({
    reducer: {
        globalSettings: settingsReducer,
    },
});
