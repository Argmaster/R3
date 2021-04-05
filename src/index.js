import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import store from "./redux/settings/store";
import { Provider } from "react-redux";

const theme = createMuiTheme({
    palette: {
        type: "dark",
    },
    typography: {
        fontSize: 14,
        h3: {
            fontWeight: 200,
        },
        h5: {
            fontWeight: 200,
        },
        body1: {
            fontWeight: 100,
        },
        body2: {
            fontWeight: 100,
        },
    },
});

ReactDOM.render(
    //<React.StrictMode>
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </Provider>,
    //</React.StrictMode>,
    document.getElementById("root")
);
