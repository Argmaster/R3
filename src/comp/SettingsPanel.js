import {
    IconButton,
    List,
    ListItem,
    SwipeableDrawer,
    Typography,
    withStyles,
    FormLabel,
} from "@material-ui/core";
import {
    ArrowDropDown,
    ChevronLeft,
    Settings as SettingsIcon,
} from "@material-ui/icons";
import React, { useState } from "react";
import MapEntry from "./Entry/MapEntry";

/**
 * @param {Array} entryList array of settings blocks in form:
 * [ {
 *      title: string,
 *      list: [ {
 *                  type: string,
 *                  label: string,
 *                  defaultVal: value }, ... ] },...]
 * @returns React Component
 */
function SettingsPanel({ classes, entryList }) {
    // controls wheather this menu should be shown or hidden
    const [isOpen, setIsOpen] = useState(false);
    // get index of currently extended dropdown inside this menu
    const [indexOfShown, setIndexOfShown] = useState(-1);
    return (
        <>
            <IconButton edge="start" onClick={() => setIsOpen(true)}>
                <SettingsIcon className={classes.menuButton} />
            </IconButton>
            <SwipeableDrawer
                anchor="left"
                open={isOpen}
                onClose={() => setIsOpen(false)}
                onOpen={() => setIsOpen(true)}
            >
                <List className={classes.listClass}>
                    <ListItem>
                        <IconButton
                            onClick={() => setIsOpen(false)}
                            className={classes.drawerHideIcon}
                        >
                            <ChevronLeft />
                        </IconButton>
                        <Typography
                            variant="h6"
                            className={classes.drawerTitle}
                        >
                            Global settings panel
                        </Typography>
                    </ListItem>
                    {entryList.map((block, index) => (
                        <div key={index}>
                            <div
                                className={classes.ListTitleItem}
                                onClick={() =>
                                    setIndexOfShown(
                                        index != indexOfShown ? index : -1
                                    )
                                }
                            >
                                <ArrowDropDown></ArrowDropDown>
                                <Typography>{block.title}</Typography>
                            </div>
                            <div hidden={index != indexOfShown}>
                                {block.list.length != 0 ? (
                                    block.list.map((entry, index) => {
                                        const EntryType = MapEntry(entry.type);
                                        return (
                                            <ListItem key={index}>
                                                <EntryType
                                                    label={entry.label}
                                                    defaultVal={
                                                        entry.defaultVal
                                                    }
                                                    entryArgs={entry.entryArgs}
                                                    RNA={`${block.title}::${entry.label}`}
                                                    onChange={entry.callback}
                                                />
                                            </ListItem>
                                        );
                                    })
                                ) : (
                                    <FormLabel className={classes.emptyLabel}>
                                        No options to show
                                    </FormLabel>
                                )}
                            </div>
                        </div>
                    ))}
                </List>
            </SwipeableDrawer>
        </>
    );
}

export default withStyles(theme => ({
    menuButton: {
        color: theme.palette.primary.contrastText,
    },
    ListTitleItem: {
        display: "flex",
        borderBottom: `2px solid ${theme.palette.secondary.light}`,
        cursor: "pointer",
        padding: "0.5rem 1rem 0.5rem 1rem",
    },
    emptyLabel: {
        display: "block",
        padding: "1rem",
    },
    listClass: {
        maxWidth: "35rem",
        userSelect: "none",
        overflowY: "scroll",
        height: "100%",
        "::-webkit-scrollbar": {
            width: theme.typography.fontSize,
            height: theme.typography.fontSize,
        },
        "::-webkit-scrollbar-track": {
            backgroundColor: theme.palette.augmentColor({
                main: theme.palette.background.paper,
            }).light,
            boxShadow: "0 0 5px #FFF",
        },
        "::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
        },
        "::-webkit-scrollbar-thumb:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
        "::-webkit-scrollbar-corner": {
            backgroundColor: theme.palette.augmentColor({
                main: theme.palette.background.paper,
            }).light,
        },
    },
    drawerTitle: {
        marginRight: "1rem",
    },
    drawerHideIcon: {
        float: "right",
    },
}))(SettingsPanel);
