import React, { Component, createRef } from "react";
import {
    MenuList,
    MenuItem,
    Button,
    ClickAwayListener,
    Paper,
    Popper,
    Grow,
} from "@material-ui/core";
import { MemorySharp as ListIcon } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

/**
 * Extension AppBar menu, used to select workspace
 */
class HiddenListMenu extends Component {
    state = {
        open: false,
        label: "Home Page",
    };
    // Indicates what should popup menu stick to
    menuAnchor = createRef(null);
    /**
     * Toggle popup state
     */
    handleToggle = () => {
        this.setState({ open: !this.state.open });
    };
    /**
     * Handle menu button onClick
     * @param {event} event
     * @param {int} id of component to select and display
     * @param {str} name of component to display on button
     */
    handleSelect = (event, id, name) => {
        if (
            !(
                this.menuAnchor.current &&
                this.menuAnchor.current.contains(event.target)
            )
        ) {
            if (id !== undefined) this.setState({ label: name });
            this.setState({ open: false });
        }
    };
    /**
     * Called when user clicked out of popup menu
     * @param {event} event
     */
    handleOutClick = event => {
        if (event.key === "Tab") {
            event.preventDefault();
            this.setState({ open: false });
        }
    };
    render() {
        return (
            <>
                <Button
                    onClick={this.handleToggle}
                    ref={this.menuAnchor}
                    className={this.props.classes.shadowButton}
                >
                    {this.state.label}
                </Button>
                <Popper
                    open={this.state.open}
                    anchorEl={this.menuAnchor.current}
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
                                <ClickAwayListener
                                    onClickAway={this.handleSelect}
                                >
                                    <MenuList
                                        autoFocusItem={this.state.open}
                                        id="menu-list-grow"
                                        onKeyDown={this.handleOutClick}
                                    >
                                        {this.props.extensions.map(ext => {
                                            return (
                                                <MenuItem
                                                    key={ext.id}
                                                    onClick={event => {
                                                        this.handleSelect(
                                                            event,
                                                            ext.id,
                                                            ext.name
                                                        );
                                                        this.props.onLoadWorkspace(
                                                            ext
                                                        );
                                                    }}
                                                >
                                                    <ListIcon
                                                        style={{
                                                            paddingRight:
                                                                "1rem",
                                                        }}
                                                    />
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
}

export default withStyles(theme => ({
    shadowButton: {
        boxShadow: `0 0 2px ${theme.palette.primary.contrastText}`,
        marginLeft: "1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        color: theme.palette.primary.contrastText,
    },
}))(HiddenListMenu);