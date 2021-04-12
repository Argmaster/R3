import React from "react";
import { Button, withStyles } from "@material-ui/core";

/**
 * Button compontent for one-time callback invocation
 * @param {string} label label to be displayed next to checkbox
 * @param {function} onChange function to be called on state change
 * @returns React Component
 */
function ButtonEntry({ label, onChange, classes }) {
    return (
        <div className={classes.container}>
            <Button
                onClick={onChange}
                variant="contained"
                color="secondary"
                className={classes.buttonClass}
            >
                {label}
            </Button>
        </div>
    );
}

export default withStyles(theme => ({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "2rem",
    },
    buttonClass: {
        width: "100%",
        fontWeight: theme.typography.fontWeightBold,
    },
}))(ButtonEntry);
