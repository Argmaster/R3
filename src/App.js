import React, { Component, useState } from "react";
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
    DeveloperBoard,
} from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import HiddenListMenu from "./comp/HiddenListMenu";
import HomePage from "./comp/HomePage";

const { app } = window.require("@electron/remote");
const fs = window.require("fs");

class App extends Component {
    state = {
        ExtensionList: [
            {
                id: 0,
                name: "Home Page",
                version: "v1.0",
                workspace: HomePage,
            },
        ],
        currentWorkspace: <HomePage />,
    };
    /**
     * Load Extensions from ./src/extensions folder
     */
    componentDidMount() {
        for (let path of fs.readdirSync("./src/extensions")) {
            this.LoadExtension(path);
        }
    }
    /**
     * Forcibly exit electron app (eg. after clicking X button)
     */
    CloseApp() {
        app.mainWindow.close();
        app.exit();
    }
    /**
     * Imports and saves into this.state an enxtension module
     * from ./extensions/ (Hopefully can be used at any time at runtime)
     * @param {string} extension directory from ./extensions/
     */
    async LoadExtension(extension) {
        const { EXTDEC } = await import(`./extensions/${extension}/Workspace`);
        const extdec = {
            ...EXTDEC,
            id: this.state.ExtensionList.length,
        };
        this.setState({ ExtensionList: [...this.state.ExtensionList, extdec] });
    }
    /**
     * Load workspace GUI into user visible space
     * @param {object} workspace workspace EXTDEC to load
     */
    LoadWorkspace = workspace => {
        this.setState({ currentWorkspace: <workspace.workspace /> });
    };
    /**
     * Render react component
     * @returns React.Component
     */
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.appBody}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar id="DragBar" variant="dense">
                        <IconButton edge="start" color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="subtitle1">Extension:</Typography>
                        <HiddenListMenu
                            extensions={this.state.ExtensionList}
                            onLoadWorkspace={this.LoadWorkspace}
                        />
                        <Box className={classes.spacer}>
                            <Typography variant="body2" >
                                v4.0.0-dev
                            </Typography>
                        </Box>
                        <IconButton
                            color="inherit"
                            onClick={() => {
                                if (
                                    app.mainWindow.webContents.isDevToolsOpened()
                                )
                                    app.mainWindow.webContents.closeDevTools();
                                else app.mainWindow.webContents.openDevTools();
                            }}
                            className={classes.menuButton}
                        >
                            <DeveloperBoard />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            onClick={() => app.mainWindow.reload()}
                            className={classes.menuButton}
                        >
                            <Refresh />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            onClick={() => app.mainWindow.minimize()}
                            className={classes.menuButton}
                        >
                            <Minimize />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            onClick={() => {
                                if (!app.mainWindow.isMaximized())
                                    app.mainWindow.maximize();
                                else app.mainWindow.restore();
                            }}
                            className={classes.menuButton}
                        >
                            <CropSquare />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            onClick={() => this.CloseApp()}
                            className={classes.menuButton}
                        >
                            <Close />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={classes.workspaceContainer}>
                    {this.state.currentWorkspace}
                </div>
            </div>
        );
    }
}
export default withStyles(theme => ({
    menuButton: {
        padding: "0.5rem",
    },
    title: {
        paddingLeft: "1rem",
    },
    spacer: {
        flexGrow: 1,
        textAlign: 'right'
    },
    appBar: {
        flexShrink: 0,
    },
    workspaceContainer: {
        display: "flex",
        height: "100%",
        overflowY: "scroll",
    },
    appBody: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
    },
    "@global": {
        "::-webkit-scrollbar": {
            width: (theme.typography.fontSize * 2) / 3,
            height: (theme.typography.fontSize * 2) / 3,
        },
        "::-webkit-scrollbar-track": {
            backgroundColor: theme.palette.grey[300],
            boxShadow: "0 0 5px #FFF",
        },
        "::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.grey[400],
        },
        "::-webkit-scrollbar-thumb:hover": {
            backgroundColor: theme.palette.primary.light,
        },
        "::-webkit-scrollbar-corner": {
            backgroundColor: theme.palette.grey[300],
        },
    },
}))(App);
