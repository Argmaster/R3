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
    MenuItem,
    TableFooter,
    Grid,
    FormControl,
    InputAdornment,
    Input,
} from "@material-ui/core";
import React from "react";
import {
    AddCircle,
    ArrowDownward,
    ArrowUpward,
    ChevronLeft,
    ChevronRight,
    DeleteForever,
    GavelRounded,
    ReorderRounded,
    Save,
    Search,
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

let LayerRow = withStyles(theme => ({}))(
    ({ layer, index, Layers, setLayers, classes }) => {
        return (
            <TableRow>
                <TableCell>
                    <Input
                        value={layer.source}
                        placeholder="Path to .grb file"
                        color="secondary"
                        onChange={event => {
                            let newLayers = [...Layers];
                            newLayers[index].source = event.target.value;
                            setLayers(newLayers);
                        }}
                        variant="outlined"
                        margin="dense"
                        fullWidth={true}
                        endAdornment={
                            <InputAdornment>
                                <IconButton
                                    onClick={() => {
                                        dialog
                                            .showOpenDialog({
                                                title: "Save 3D model",
                                                properties: ["openFile"],
                                                filters: [
                                                    {
                                                        name: "GERBER",
                                                        extensions: ["grb"],
                                                    },
                                                ],
                                            })
                                            .then(({ canceled, filePaths }) => {
                                                if (!canceled) {
                                                    let newLayers = [...Layers];
                                                    newLayers[index].source =
                                                        filePaths[0];
                                                    setLayers(newLayers);
                                                }
                                            });
                                    }}
                                >
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </TableCell>
                <TableCell>
                    <TextField
                        value={layer.role}
                        select
                        onChange={event => {
                            let newLayers = [...Layers];
                            newLayers[index].role = event.target.value;
                            setLayers(newLayers);
                        }}
                        color="secondary"
                        variant="standard"
                        fullWidth={true}
                    >
                        {[
                            ["NONE", "None"],
                            ["COPPER", "Copper"],
                            ["SILK", "Silk"],
                            ["SOLDER_MASK", "Solder mask"],
                            ["PASTE_MASK", "Paste mask"],
                        ].map(([VALUE, Label], index) => (
                            <MenuItem value={VALUE} key={index}>
                                {Label}
                            </MenuItem>
                        ))}
                    </TextField>
                </TableCell>
                <TableCell>
                    <TextField
                        value={layer.side}
                        select
                        onChange={event => {
                            let newLayers = [...Layers];
                            newLayers[index].side = event.target.value;
                            setLayers(newLayers);
                        }}
                        color="secondary"
                        variant="standard"
                        fullWidth={true}
                    >
                        {[
                            ["TOP", "Top"],
                            ["BOT", "Bottom"],
                        ].map(([VALUE, Label], index) => (
                            <MenuItem value={VALUE} key={index}>
                                {Label}
                            </MenuItem>
                        ))}
                    </TextField>
                </TableCell>
                <TableCell align="right" padding="none">
                    <div>
                        {index != 0 ? (
                            <IconButton
                                onClick={() => {
                                    let newLayers = [...Layers];
                                    let other = newLayers[index - 1];
                                    let self = newLayers[index];
                                    newLayers[index - 1] = self;
                                    newLayers[index] = other;
                                    setLayers(newLayers);
                                }}
                            >
                                <ArrowUpward></ArrowUpward>
                            </IconButton>
                        ) : undefined}
                        {index != Layers.length - 1 ? (
                            <IconButton
                                onClick={() => {
                                    let newLayers = [...Layers];
                                    let other = newLayers[index + 1];
                                    let self = newLayers[index];
                                    newLayers[index + 1] = self;
                                    newLayers[index] = other;
                                    setLayers(newLayers);
                                }}
                            >
                                <ArrowDownward></ArrowDownward>
                            </IconButton>
                        ) : undefined}
                        <IconButton
                            onClick={() => {
                                let newLayers = [...Layers];
                                newLayers.pop(index);
                                setLayers(newLayers);
                            }}
                        >
                            <DeleteForever></DeleteForever>
                        </IconButton>
                    </div>
                </TableCell>
            </TableRow>
        );
    }
);

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

const dispatchDir = () => {
    let newLayers = undefined;
    const filePaths = dialog.showOpenDialogSync({
        title: "Load gerber files from directory",
        properties: ["openDirectory"],
    });

    if (filePaths != undefined) {
        newLayers = [];
        let RE_TOP_COPPER = /.*?copper.*?top.*?.g[rb][rb]|.*?top.*?copper.*?.g[rb][rb]/i;
        let RE_TOP_PASTE = /.*?paste.*?top.*?.g[rb][rb]|.*?top.*?paste.*?.g[rb][rb]/i;
        let RE_TOP_SOLDER = /.*?solder.*?top.*?.g[rb][rb]|.*?top.*?solder.*?.g[rb][rb]/i;
        let RE_TOP_SILK = /.*?silk.*?top.*?.g[rb][rb]|.*?top.*?silk.*?.g[rb][rb]/i;
        let top_regex = new Map([
            [RE_TOP_COPPER, null],
            [RE_TOP_PASTE, null],
            [RE_TOP_SOLDER, null],
            [RE_TOP_SILK, null],
        ]);
        let RE_BOT_COPPER = /.*?copper.*?bot.*?.g[rb][rb]|.*?bot.*?copper.*?.g[rb][rb]/i;
        let RE_BOT_PASTE = /.*?paste.*?bot.*?.g[rb][rb]|.*?bot.*?paste.*?.g[rb][rb]/i;
        let RE_BOT_SOLDER = /.*?solder.*?bot.*?.g[rb][rb]|.*?bot.*?solder.*?.g[rb][rb]/i;
        let RE_BOT_SILK = /.*?silk.*?bot.*?.g[rb][rb]|.*?bot.*?silk.*?.g[rb][rb]/i;
        let bot_regex = new Map([
            [RE_BOT_COPPER, null],
            [RE_BOT_PASTE, null],
            [RE_BOT_SOLDER, null],
            [RE_BOT_SILK, null],
        ]);
        _traverse_files_in_dir: for (const filename of fs.readdirSync(
            filePaths[0]
        )) {
            for (const [regex, _] of top_regex) {
                if (filename.match(regex)) {
                    top_regex[regex] = `${filePaths[0]}/${filename}`;
                    continue _traverse_files_in_dir;
                }
            }
            for (const [regex, _] of bot_regex) {
                if (filename.match(regex)) {
                    bot_regex[regex] = `${filePaths[0]}/${filename}`;
                    continue _traverse_files_in_dir;
                }
            }
        }
        if (top_regex[RE_TOP_SILK] != null)
            newLayers.push({
                source: top_regex[RE_TOP_SILK],
                role: "SILK",
                side: "TOP",
            });
        if (top_regex[RE_TOP_SOLDER] != null)
            newLayers.push({
                source: top_regex[RE_TOP_SOLDER],
                role: "SOLDER_MASK",
                side: "TOP",
            });
        if (top_regex[RE_TOP_PASTE] != null)
            newLayers.push({
                source: top_regex[RE_TOP_PASTE],
                role: "PASTE_MASK",
                side: "TOP",
            });
        if (top_regex[RE_TOP_COPPER] != null)
            newLayers.push({
                source: top_regex[RE_TOP_COPPER],
                role: "COPPER",
                side: "TOP",
            });
        if (bot_regex[RE_BOT_COPPER] != null)
            newLayers.push({
                source: bot_regex[RE_BOT_COPPER],
                role: "COPPER",
                side: "BOT",
            });
        if (bot_regex[RE_BOT_PASTE] != null)
            newLayers.push({
                source: bot_regex[RE_BOT_PASTE],
                role: "PASTE_MASK",
                side: "BOT",
            });
        if (bot_regex[RE_BOT_SOLDER] != null)
            newLayers.push({
                source: bot_regex[RE_BOT_SOLDER],
                role: "SOLDER_MASK",
                side: "BOT",
            });
        if (bot_regex[RE_BOT_SILK] != null)
            newLayers.push({
                source: bot_regex[RE_BOT_SILK],
                role: "SILK",
                side: "BOT",
            });
    }

    return newLayers;
};

function Workspace({ classes }) {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = React.useState(false);
    const [showPopup, setShowPopup] = React.useState(false);

    const lightPower = selectRNAwithDefault(
        "Gerber Utils v3.0::Light intensity",
        1
    );

    const ViewTNA = "GerberUtils::PreviewModel";
    const nextIsDrity =
        (selectTNAwithDefault(`${ViewTNA}::$_isDirty`, 0) + 1) % 2;
    const modelPath = selectRNAwithDefault(
        `${ViewTNA}::$_GLTFpath`,
        "./src/extensions/GerberUtils/block.glb"
    );

    const [Layers, setLayers] = React.useState([
        {
            source: "",
            role: "NONE",
            side: "TOP",
        },
    ]);

    return (
        <div className={classes.workspace}>
            <ModelView
                lightPower={lightPower}
                TNA={ViewTNA}
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
                                    [`${ViewTNA}::$_isDirty`, nextIsDrity],
                                    [`${ViewTNA}::$_GLTFpath`, "out.glb"],
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
                        onClick={() => console.log(Layers)}
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
                onClose={() => setShowPopup(false)}
                PaperComponent={PaperComponent}
                PaperProps={{ style: { minWidth: "960px" } }}
            >
                <DialogTitle
                    id="draggable-dialog-title"
                    className={classes.dialogTitle}
                >
                    Modify Gerber Layer Stack
                </DialogTitle>
                <TableContainer component={Paper} style={{ minWidth: "960px" }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">
                                    Source gerber file path
                                </TableCell>
                                <TableCell align="right">Function</TableCell>
                                <TableCell align="right">Side</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Layers.map((layer, index) => (
                                <LayerRow
                                    key={index}
                                    layer={layer}
                                    index={index}
                                    Layers={Layers}
                                    setLayers={setLayers}
                                ></LayerRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell align="left">
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        onClick={() => setShowPopup(false)}
                                        fullWidth={true}
                                    >
                                        Confirm
                                    </Button>
                                </TableCell>
                                <TableCell align="right">
                                    {" "}
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        onClick={() => {
                                            let newLayers = dispatchDir();
                                            if (newLayers != undefined)
                                                setLayers(newLayers);
                                        }}
                                    >
                                        Dispatch directory
                                    </Button>
                                </TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        style={{
                                            cursor: "pointer",
                                        }}
                                        onClick={() => {
                                            setLayers([
                                                ...Layers,
                                                {
                                                    source: "",
                                                    role: "NONE",
                                                    side: "TOP",
                                                },
                                            ]);
                                        }}
                                    >
                                        <AddCircle
                                            color="secondary"
                                            fontSize="large"
                                        ></AddCircle>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
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
        dialogTitle: {
            cursor: "move",
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
