import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";


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
0
ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
                <App />
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
