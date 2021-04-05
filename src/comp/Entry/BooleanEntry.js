import React, { useState } from "react";
import { Checkbox, InputLabel } from "@material-ui/core";

/**
 * Boolean Checkbox entry with label component
 * @param {object} entryArgs none available
 * @param {string} label label to be displayed next to checkbox
 * @param {function} onChange function to be called on state change
 * @param {bool} defaultVal default checkbox value
 * @returns React Component
 */
function BooleanEntry({ entryArgs, label, onChange, defaultVal }) {
    const [isChecked, setChecked] = useState(defaultVal);
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <Checkbox
                checked={isChecked}
                onChange={() => {
                    onChange(!isChecked);
                    setChecked(!isChecked);
                }}
            ></Checkbox>
            <InputLabel>{label}</InputLabel>
        </div>
    );
}

export default BooleanEntry;
