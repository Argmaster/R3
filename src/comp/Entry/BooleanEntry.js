import React from "react";
import { Switch, InputLabel, withStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { selectRNAwithDefault, setRNA } from "../../redux/settingsSlice";

/**
 * Boolean Checkbox entry with label component
 * @param {object} entryArgs none available
 * @param {string} label label to be displayed next to checkbox
 * @param {string} RNA object id in storage
 * @param {function} onChange function to be called on state change
 * @param {bool} defaultVal default checkbox value
 * @returns React Component
 */
function BooleanEntry({
    entryArgs,
    label,
    onChange,
    defaultVal,
    RNA,
    classes,
}) {
    const dispatch = useDispatch();
    let isChecked = selectRNAwithDefault(RNA, defaultVal);
    return (
        <div className={classes.container}>
            <Switch
                className={classes.entryClass}
                checked={isChecked}
                onChange={() => {
                    onChange(!isChecked);
                    dispatch(setRNA([[RNA, !isChecked]]));
                }}
            ></Switch>
            <InputLabel className={classes.label}>{label}</InputLabel>
        </div>
    );
}

export default withStyles(theme => ({
    entryClass: {},
    label: {
        fontWeight: theme.typography.fontWeightBold,
    },
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "2rem",
    },
}))(BooleanEntry);
