import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
} from "@material-ui/core";
import {
    Settings as MenuIcon,
    Close,
    Minimize,
    CropSquare,
    Refresh,
} from "@material-ui/icons";
import ExtensionMenu from "./comp/ExtensionMenu";

import LibraryWorkspace from "./extensions/MeshLibraryv1.0/Workspace";
import GerberWorkspace from "./extensions/GerberUtilsv1.0/Workspace";
import AssemblerWorkspace from "./extensions/PCBAssemblerv1.0/Workspace";

const { BrowserWindow, app } = window.require("@electron/remote");
const mainWindow = BrowserWindow.getFocusedWindow();

function ReloadApp() {
    mainWindow.reload();
}
function MinimizeApp() {
    mainWindow.minimize();
}
function RestoreApp() {
    if (!mainWindow.isMaximized()) mainWindow.maximize();
    else mainWindow.restore();
}

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    menuButton: {
        padding: "0.4rem",
        borderRadius: 0,
    },
    title: {
        paddingLeft: "1rem",
    },
    spacer: {
        flexGrow: 1,
    },
});

function AppRoot() {
    const classes = useStyles();
    const [ExtensionList, setExtensionList] = useState([
        {
            id: 0,
            name: "Home Page",
            version: "v1.0",
        },
        {
            id: 1,
            name: "Mesh Library v1.0",
            version: "v1.0",
            workspace: LibraryWorkspace,
        },
        {
            id: 2,
            name: "Gerber Utils v1.0",
            version: "v1.0",
            workspace: GerberWorkspace,
        },
        {
            id: 3,
            name: "PCB Assembler v1.0",
            version: "v1.0",
            workspace: AssemblerWorkspace,
        },
    ]);
    return (
        <>
            <AppBar position="fixed">
                <Toolbar id="DragBar" variant="dense">
                    <IconButton edge="start" color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="subtitle1" className={classes.title}>
                        Extension:
                    </Typography>
                    <ExtensionMenu extensions={ExtensionList} />
                    <Box className={classes.spacer}></Box>
                    <IconButton
                        color="inherit"
                        onClick={ReloadApp}
                        className={classes.menuButton}
                    >
                        <Refresh />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        onClick={MinimizeApp}
                        className={classes.menuButton}
                    >
                        <Minimize />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        onClick={RestoreApp}
                        className={classes.menuButton}
                    >
                        <CropSquare />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        onClick={CloseApp}
                        className={classes.menuButton}
                    >
                        <Close />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default AppRoot;
