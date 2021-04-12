import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import store from "./redux/store";
import { Provider } from "react-redux";
import ThemeManager from "./comp/ThemeManager";

ReactDOM.render(
    //<React.StrictMode>
    <Provider store={store}>
        <ThemeManager Child={App} />
    </Provider>, //</React.StrictMode>,
    document.getElementById("root")
);
