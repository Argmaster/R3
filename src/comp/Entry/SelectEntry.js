import { Fragment } from "react";
import BooleanEntry from "./BooleanEntry";
import NumberEntry from "./NumberEntry";

export default entryType => {
    switch (entryType) {
        case "Boolean":
            return BooleanEntry;
        case "Number":
            return NumberEntry;
        default:
            Fragment;
    }
};
