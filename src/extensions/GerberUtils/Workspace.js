import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    withStyles,
} from "@material-ui/core";
import React from "react";
import {
    ChevronLeft,
    ChevronRight,
    VisibilityOffOutlined,
} from "@material-ui/icons";
import clsx from "clsx";
import ModelView from "../../comp/ModelView";
import { selectRNAwithDefault } from "../../redux/settingsSlice";
import { selectTNAwithDefault, setTNA } from "../../redux/tempSlice";
import { useDispatch } from "react-redux";

function Workspace({ classes }) {
    const lightPower = selectRNAwithDefault(
        "Gerber Utils v3.0::Light intensity",
        1
    );
    const TNA = "GerberUtils::PreviewModel";
    const dispatch = useDispatch();
    const nextIsDrity = (selectTNAwithDefault(`${TNA}::$_isDirty`, 0) + 1) % 2;
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
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
                    <IconButton onClick={toggleOpen}>
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
                </List>
            </Drawer>
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
