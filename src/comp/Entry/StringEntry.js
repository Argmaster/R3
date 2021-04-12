import React, { useState } from "react";
import { TextField, Tooltip, withStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { selectRNAwithDefault, setRNA } from "../../redux/settingsSlice";
import Zoom from "@material-ui/core/Zoom";

/**
 * String entry with regex validation
 * @param {object} entryArgs
 *      @key regex : regex to match contents of entry against
 * @param {string} label label to be displayed next to text entry
 * @param {string} RNA object id in storage
 * @param {function} onChange function to be called on state change
 * @param {bool} defaultVal default checkbox value
 * @returns React Component
 */
function StringEntry({ entryArgs, label, onChange, defaultVal, RNA, classes }) {
    const dispatch = useDispatch();
    let value = selectRNAwithDefault(RNA, defaultVal);
    const [isError, setError] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const [message, setMessage] = useState("");
    let regex = ".*?";
    if (entryArgs != undefined) {
        if (entryArgs.regex != undefined) regex = entryArgs.regex;
    }
    return (
        <div className={classes.container}>
            <Tooltip
                title={`regex: ${regex.toString()}`}
                placement="right"
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 600 }}
            >
                <TextField
                    error={isError}
                    value={inputValue}
                    size="small"
                    type="text"
                    onChange={event => {
                        if (event.target.value.match(regex)) {
                            setMessage("");
                            onChange(event.target.value);
                            dispatch(setRNA([[RNA, event.target.value]]));
                        } else {
                            setError(true);
                            setMessage("Text doesnt match regex.");
                        }
                        setInputValue(event.target.value);
                    }}
                    helperText={message}
                    label={label}
                    color="secondary"
                    variant="standard"
                    fullWidth={true}
                ></TextField>
            </Tooltip>
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
}))(StringEntry);
