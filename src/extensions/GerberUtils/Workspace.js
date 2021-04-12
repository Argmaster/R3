import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    withStyles,
    Dialog,
    DialogTitle,
    Paper,
    Button,
    TableContainer,
    TableHead,
    TableCell,
    Table,
    TableBody,
    TableRow,
    TextField,
} from "@material-ui/core";
import React from "react";
import {
    AddCircle,
    ChevronLeft,
    ChevronRight,
    GavelRounded,
    ReorderRounded,
    Save,
    VisibilityOffOutlined,
} from "@material-ui/icons";
import clsx from "clsx";
import ModelView from "../../comp/ModelView";
import { selectRNAwithDefault } from "../../redux/settingsSlice";
import { selectTNAwithDefault, setTNA } from "../../redux/tempSlice";
import { useDispatch } from "react-redux";
import Draggable from "react-draggable";

const { dialog } = window.require("@electron/remote");
const fs = window.require("fs");

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

const saveModel = model_path => {
    dialog
        .showSaveDialog({
            title: "Save 3D model",
            properties: [],
            filters: [{ name: "glTF 2.0", extensions: ["glb"] }],
        })
        .then(({ canceled, filePath }) => {
            if (!canceled) {
                fs.copyFileSync(model_path, filePath);
            }
        });
};

function Workspace({ classes }) {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = React.useState(false);
    const [showPopup, setShowPopup] = React.useState(false);
    const [layersList, setLayersList] = React.useState([]);

    const lightPower = selectRNAwithDefault(
        "Gerber Utils v3.0::Light intensity",
        1
    );

    const TNA = "GerberUtils::PreviewModel";
    const nextIsDrity = (selectTNAwithDefault(`${TNA}::$_isDirty`, 0) + 1) % 2;
    const modelPath = selectRNAwithDefault(
        `${TNA}::$_GLTFpath`,
        "./src/extensions/GerberUtils/block.glb"
    );

    return (
        <div className={classes.workspace}>
            <ModelView
                lightPower={lightPower}
                TNA={TNA}
                default_gltf="./src/extensions/GerberUtils/block.glb"
            ></ModelView>
            <Drawer
                anchor="right"
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: isOpen,
                    [classes.drawerClose]: !isOpen,
                })}
                classes={{
                    paper: clsx(classes.drawer, {
                        [classes.drawerOpen]: isOpen,
                        [classes.drawerClose]: !isOpen,
                    }),
                }}
            >
                <div>
                    <IconButton
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        {isOpen ? <ChevronRight /> : <ChevronLeft />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem
                        button
                        onClick={() => {
                            dispatch(
                                setTNA([
                                    [`${TNA}::$_isDirty`, nextIsDrity],
                                    [`${TNA}::$_GLTFpath`, "out.glb"],
                                ])
                            );
                        }}
                        className={classes.listItem}
                    >
                        <ListItemIcon>
                            <VisibilityOffOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Show preview model" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => saveModel(modelPath)}
                        className={classes.listItem}
                    >
                        <ListItemIcon>
                            <Save />
                        </ListItemIcon>
                        <ListItemText primary="Save preview model" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => setShowPopup(true)}
                        className={classes.listItem}
                    >
                        <ListItemIcon>
                            <ReorderRounded />
                        </ListItemIcon>
                        <ListItemText primary="Compose layer stack" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => saveModel(modelPath)}
                        className={classes.listItem}
                    >
                        <ListItemIcon>
                            <GavelRounded />
                        </ListItemIcon>
                        <ListItemText primary="Build 3D model" />
                    </ListItem>
                </List>
            </Drawer>
            <Dialog
                open={showPopup}
                PaperComponent={PaperComponent}
                PaperProps={{ style: { minWidth: 960 } }}
            >
                <DialogTitle
                    style={{ cursor: "move" }}
                    id="draggable-dialog-title"
                >
                    Modify Gerber Layer Stack
                </DialogTitle>
                <TableContainer component={Paper} style={{ minWidth: 960 }}>
                    <Table>
                        <TableHead>
                            <TableCell align="right">
                                Source gerber file path
                            </TableCell>
                            <TableCell align="right">Functionality</TableCell>
                            <TableCell align="right">Invert</TableCell>
                        </TableHead>
                        <TableBody>
                            {layersList.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell align="right">
                                        <TextField value={}></TextField>
                                    </TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell
                                    align="right"
                                    style={{ cursor: "pointer" }}
                                >
                                    <AddCircle
                                        color="info"
                                        fontSize="large"
                                    ></AddCircle>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button variant="contained" onClick={() => setShowPopup(false)}>
                    Apply
                </Button>
            </Dialog>
        </div>
    );
}

export const EXTDEC = {
    name: "Gerber Utils v3.0",
    version: "v3.0",
    workspace: withStyles(theme => ({
        workspace: {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backgroundColor: theme.palette.background.paper,
        },
        drawer: {
            zIndex: theme.zIndex.appBar - 100,
            paddingTop: "3rem",
        },
        drawerOpen: {
            width: "fit-content",
        },
        drawerClose: {
            width: theme.typography.fontSize * 3.9,
            overflowX: "hidden",
        },
        listItem: {
            minWidth: "max-content",
            paddingRight: "1rem",
        },
    }))(Workspace),
    settings: [
        {
            label: "Light intensity",
            type: "Slider",
            entryArgs: { min: 0, max: 3, step: 0.1 },
            defaultVal: 1,
            callback: newVal => {},
        },
    ],
};
