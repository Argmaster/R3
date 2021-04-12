import React, { useState } from "react";
import { TextField, withStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { selectRNAwithDefault, setRNA } from "../../redux/settingsSlice";

const _float_regex = /^[\-+]?[0-9]*\.?[0-9]+$/;
const _int_regex = /^[\-+][0-9]+$/;
const _uint_regex = /^[0-9]+$/;
/**
 * Number entry with validation
 * @param {object} entryArgs
 *      @key min : min value
 *      @key max : max value
 *      @key type: "unsigned", "int", "float"
 * @param {string} label label to be displayed next to text entry
 * @param {string} RNA object id in storage
 * @param {function} onChange function to be called on state change
 * @param {bool} defaultVal default checkbox value
 * @returns React Component
 */
function NumberEntry({ entryArgs, label, onChange, defaultVal, RNA, classes }) {
    const dispatch = useDispatch();
    let value = selectRNAwithDefault(RNA, defaultVal);
    const [isError, setError] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const [message, setMessage] = useState("");
    let regex = _float_regex;
    let minVal = -Infinity;
    let maxVal = Infinity;
    if (entryArgs != undefined) {
        switch (entryArgs.type) {
            case "float":
                regex = _float_regex;
                break;
            case "int":
                regex = _int_regex;
                break;
            case "unsigned":
                regex = _uint_regex;
                break;
            default:
                regex = _float_regex;
                break;
        }
        if (entryArgs.min != undefined) minVal = entryArgs.min;
        if (entryArgs.max != undefined) maxVal = entryArgs.max;
    }
    let rangeTest = value => entryArgs.min < value && value < entryArgs.max;
    return (
        <div className={classes.container}>
            <TextField
                error={isError}
                value={inputValue}
                size="small"
                type="number"
                onChange={event => {
                    if (event.target.value.match(regex)) {
                        const newValue = parseFloat(event.target.value);
                        if (rangeTest(newValue)) {
                            onChange(newValue);
                            dispatch(setRNA([[RNA, newValue]]));
                            setError(false);
                            setMessage("");
                        } else {
                            setError(true);
                            setMessage(`Out of range (${minVal}, ${maxVal})`);
                        }
                    } else {
                        setError(true);
                        setMessage("Invalid literal");
                    }
                    setInputValue(event.target.value);
                }}
                helperText={message}
                label={label}
                color="secondary"
                variant="outlined"
                fullWidth={true}
            ></TextField>
        </div>
    );
}

export default withStyles(theme => ({
    entryClass: {},
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
}))(NumberEntry);
