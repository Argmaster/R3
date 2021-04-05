import {
    IconButton,
    List,
    ListItem,
    Paper,
    SwipeableDrawer,
    Typography,
    withStyles,
} from "@material-ui/core";
import { Close, Settings as SettingsIcon } from "@material-ui/icons";
import React, { useState } from "react";
import SelectEntry from "./Entry/SelectEntry";
import { setter } from "../redux/settings/slice";
import { useDispatch, useSelector } from "react-redux";

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
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <IconButton edge="start" onClick={() => setIsOpen(true)}>
                <SettingsIcon />
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
                            <Close />
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
                            <Paper square={true} elevation={6}>
                                <ListItem className={classes.ListTitleItem}>
                                    {block.title}
                                </ListItem>
                            </Paper>
                            {block.list.map((entry, index) => {
                                let RNA = `${block.title}::${entry.label}`;
                                const EntryType = SelectEntry(entry.type);
                                const dispatch = useDispatch();
                                let defaultVal = useSelector(
                                    state => state[RNA]
                                );
                                if (defaultVal === undefined) {
                                    defaultVal = entry.defaultVal;
                                }
                                return (
                                    <ListItem key={index}>
                                        <EntryType
                                            label={entry.label}
                                            defaultVal={defaultVal}
                                            entryArgs={entry.entryArgs}
                                            onChange={(value, event) => {
                                                entry.callback(value, event);
                                                dispatch(
                                                    setter({
                                                        RNA: RNA,
                                                        value: value,
                                                    })
                                                );
                                            }}
                                        />
                                    </ListItem>
                                );
                            })}
                        </div>
                    ))}
                </List>
            </SwipeableDrawer>
        </>
    );
}

export default withStyles(theme => ({
    ListTitleItem: {
        borderBottom: `2px solid ${theme.palette.secondary.light}`,
    },
    listClass: {
        maxWidth: "30rem",
    },
    drawerTitle: {
        marginRight: "1rem",
    },
    drawerHideIcon: {
        float: "right",
    },
}))(SettingsPanel);
