import React from "react";
import {
    MenuList,
    MenuItem,
    Button,
    ClickAwayListener,
    Paper,
    Popper,
    Grow,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    whiteText: {
        color: "white",
    },
});

function ExtensionMenu({ extensions }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [label, setLabel] = React.useState("Home Page");
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleSelect = (event, id, name) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        if (id !== undefined) setLabel(name);
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);
    return (
        <>
            <Button ref={anchorRef} onClick={handleToggle} color="inherit">
                {label}
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === "bottom"
                                    ? "center top"
                                    : "center bottom",
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleSelect}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="menu-list-grow"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {extensions.map(ext => {
                                        return (
                                            <MenuItem
                                                key={ext.id}
                                                onClick={event =>
                                                    handleSelect(
                                                        event,
                                                        ext.id,
                                                        ext.name
                                                    )
                                                }
                                            >
                                                {ext.name}
                                            </MenuItem>
                                        );
                                    })}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
}

export default ExtensionMenu;
