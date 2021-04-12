import React, { useState } from "react";
import { Slider, Typography, withStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { selectRNAwithDefault, setRNA } from "../../redux/settingsSlice";

/**
 * Slider entry
 * @param {object} entryArgs
 *      @key min : min value
 *      @key max : max value
 * @param {string} label label to be displayed next to text entry
 * @param {string} RNA object id in storage
 * @param {function} onChange function to be called on state change
 * @param {bool} defaultVal default checkbox value
 * @returns React Component
 */
function NumberEntry({ entryArgs, label, onChange, defaultVal, RNA, classes }) {
    const dispatch = useDispatch();
    let value = selectRNAwithDefault(RNA, defaultVal);
    const [inputValue, setInputValue] = useState(value);
    let minVal = -10;
    let maxVal = 10;
    let stepVal = 1;
    let rangeTest = value => true;
    if (entryArgs != undefined) {
        if (entryArgs.min != undefined) minVal = entryArgs.min;
        if (entryArgs.max != undefined) maxVal = entryArgs.max;
        if (entryArgs.step != undefined) stepVal = entryArgs.step;
    }
    return (
        <div className={classes.container}>
            <Typography>{label}</Typography>
            <Slider
                value={inputValue}
                size="small"
                type="number"
                min={minVal}
                max={maxVal}
                step={stepVal}
                marks
                onChange={(event, newValue) => {
                    onChange(newValue);
                    dispatch(setRNA([[RNA, newValue]]));
                    setInputValue(newValue);
                }}
                color="secondary"
                valueLabelDisplay="on"
            ></Slider>
        </div>
    );
}

export default withStyles(theme => ({
    entryClass: {},
    container: {
        width: "100%",
        marginLeft: "1rem",
        marginRight: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}))(NumberEntry);
