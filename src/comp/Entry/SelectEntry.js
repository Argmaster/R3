import React, { useState } from "react";
import {
    TextField,
    withStyles,
    MenuItem,
    FormControl,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { selectRNAwithDefault, setRNA } from "../../redux/settingsSlice";

/**
 * Selection entry with limited values
 * @param {object} entryArgs
 *      @key values : list of possible values [VALUE, Label]
 * @param {string} label label to be displayed next to text entry
 * @param {string} RNA object id in storage
 * @param {function} onChange function to be called on state change
 * @param {bool} defaultVal default checkbox value
 * @returns React Component
 */
function SelectEntry({ entryArgs, label, onChange, defaultVal, RNA, classes }) {
    const dispatch = useDispatch();
    let value = selectRNAwithDefault(RNA, defaultVal);
    const [inputValue, setInputValue] = useState(value);
    return (
        <FormControl className={classes.container}>
            <TextField
                value={inputValue}
                select
                onChange={event => {
                    onChange(event.target.value);
                    dispatch(setRNA([[RNA, event.target.value]]));
                    setInputValue(event.target.value);
                }}
                label={label}
                inputProps={{ id: "uncontrolled-native" }}
                color="secondary"
                variant="standard"
            >
                {entryArgs.values.map(([VALUE, Label], index) => (
                    <MenuItem value={VALUE} key={index}>{Label}</MenuItem>
                ))}
            </TextField>
        </FormControl>
    );
}

export default withStyles(theme => ({
    entryClass: {},
    container: {
        width: "100%",
    },
}))(SelectEntry);
