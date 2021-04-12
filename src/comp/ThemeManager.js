import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { selectRNAwithDefault } from "../redux/settingsSlice";
const { app } = window.require("@electron/remote");

export default function ThemeManager({ Child }) {
    /* Toggle dev tools based on Redux storage switch */
    if (selectRNAwithDefault("Home Page::Show dev tools"))
        app.mainWindow.webContents.openDevTools();
    else app.mainWindow.webContents.closeDevTools();
    /* Toggle windows always on top state based on Redux storage switch */
    app.mainWindow.setAlwaysOnTop(
        selectRNAwithDefault("Home Page::Keep window topmost", true)
    );
    let fontSize = selectRNAwithDefault("Home Page::Font size", 14);
    let isDark = selectRNAwithDefault("Home Page::Dark theme", true);

    let theme;
    if (isDark)
        theme = createMuiTheme({
            palette: {
                type: "dark",
            },
            typography: {
                fontSize: fontSize,
                fontWeightBold: 400,
                fontWeightMedium: 300,
                fontWeightRegular: 300,
                fontWeightLight: 200,
            },
        });
    else
        theme = createMuiTheme({
            palette: {
                type: "light",
            },
            typography: {
                fontSize: fontSize,
                fontWeightBold: 500,
                fontWeightMedium: 400,
                fontWeightRegular: 400,
                fontWeightLight: 300,
            },
        });

    return (
        <>
            <MuiThemeProvider theme={theme}>
                <Child />
            </MuiThemeProvider>
        </>
    );
}
