import { Fragment } from "react";
import BooleanEntry from "./BooleanEntry";
import NumberEntry from "./NumberEntry";
import ButtonEntry from "./ButtonEntry";
import StringEntry from "./StringEntry";
import SliderEntry from "./SliderEntry";
import SelectEntry from "./SelectEntry";

export default entryType => {
    switch (entryType) {
        case "Boolean":
            return BooleanEntry;
        case "Number":
            return NumberEntry;
        case "Button":
            return ButtonEntry;
        case "String":
            return StringEntry;
        case "Slider":
            return SliderEntry;
        case "Select":
            return SelectEntry;
        default:
            Fragment;
    }
};
