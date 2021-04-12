import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Divider, Paper, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";

const { shell } = window.require("electron");

/**
 * Function generator for openExternal shell function
 * @param {string} link URL to open
 * @returns a function, opeingin external link
 */
const getOpenExternal = link => {
    return () => shell.openExternal(link);
};
/**
 * Home Page Extension workspace
 * Contains brief history of R3 and works as a
 * start page for this app
 * @param {classes} prop object
 * @returns React Component
 */
function HomePage({ classes }) {
    const nestedElevation = 6;
    /* construct and return react component */
    return (
        <div className={classes.containerWorkspace}>
            <img src="logo-wide.png" className={classes.panelImage} />
            <Container className={classes.containerStyle} maxWidth="lg">
                <Paper elevation={14}>
                    <Typography variant="h3" className={classes.titleStyle}>
                        R3 Project
                    </Typography>
                    <Typography variant="h4" className={classes.titleStyle}>
                        3D model manipulation software
                    </Typography>
                    <Divider></Divider>
                    <div className={classes.storyComp}>
                        <Typography
                            variant="h5"
                            paragraph={true}
                            className={classes.semiTitle}
                        >
                            A brief history of R3
                        </Typography>
                        <Paper
                            elevation={nestedElevation}
                            style={{ padding: "1rem", marginTop: "1rem" }}
                        >
                            <Typography variant="body1">
                                A long time ago, there was an idea, idea for
                                automation. This idea evloved into this
                                software, however it had to acomplish a long
                                journey before. It all has began with idea for a
                                simple and semi-automated CLI interface for 2D
                                graphical visualization of PCB projects
                                (provided in Gerber format). The only extension
                                over the typical Gerber viewer was that it aimed
                                to auto-mount icons of components onto the
                                board. At this stage of development, the project
                                wast using only{" "}
                                <span
                                    className={classes.prettyLink}
                                    onClick={getOpenExternal(
                                        "https://www.python.org/"
                                    )}
                                >
                                    Python
                                </span>{" "}
                                and{" "}
                                <span
                                    className={classes.prettyLink}
                                    onClick={getOpenExternal(
                                        "https://pillow.readthedocs.io/en/stable/"
                                    )}
                                >
                                    Pillow
                                </span>{" "}
                                library for image processing. However, due to
                                the project's core dev capriciousness, this
                                project became far more complicated.
                            </Typography>
                        </Paper>
                        <Paper
                            elevation={nestedElevation}
                            style={{ padding: "1rem", marginTop: "1rem" }}
                        >
                            <Typography variant="body1">
                                Soon after reaching the stability of the alpha
                                version, the first significant change happened.
                                We switched from 2D{" "}
                                <span
                                    className={classes.prettyLink}
                                    onClick={getOpenExternal(
                                        "https://pillow.readthedocs.io/en/stable/"
                                    )}
                                >
                                    Pillow
                                </span>{" "}
                                images to 3D{" "}
                                <span
                                    className={classes.prettyLink}
                                    onClick={getOpenExternal(
                                        "https://www.blender.org/"
                                    )}
                                >
                                    Blender
                                </span>{" "}
                                models (but still used only Python and CLI
                                interface). Development progressed, and at some
                                point, a decision has been made that we require
                                our own Gerber parsing and rendering system. And
                                so it was made, entirely in Python using Regexes
                                and Pillow for drawing (It is worth noticing
                                that again we have started with 2D). Yet time
                                has passed, the project was close to being
                                finished when we encountered a problem with the
                                ambiguity of component positioning. It turned
                                out that we can't establish easy to use
                                compromise over the location of the 'root' of a
                                component. From a designer's perspective, each
                                part had some unique point (eg. first pin, last
                                pin). But from a programmer's point of view, it
                                would be nicer to have root in a more
                                characteristic place. And that is where the
                                second version of this software got stuck. Also,
                                the exam session came at the same time.
                            </Typography>
                        </Paper>
                        <Paper
                            elevation={nestedElevation}
                            style={{ padding: "1rem", marginTop: "1rem" }}
                        >
                            <Typography variant="body1">
                                Not long after the last exam, work at third
                                revison has started. The first major change was
                                the graphic user interface, created using the{" "}
                                <span
                                    className={classes.prettyLink}
                                    onClick={getOpenExternal(
                                        "https://www.electronjs.org/"
                                    )}
                                >
                                    Electron
                                </span>{" "}
                                framework. It was a controversial solution, and
                                probably we could spend a lot of time arguing
                                about the pros and cons of this decision, but it
                                was made and here we are now thanks to it. The
                                second change was the Gerber rendering module,
                                it became 3D. Meshes it generates are far from
                                perfect, but when we close one eye, turn off
                                backface culling, and agree that we don't need
                                holes (and more advanced features of Gerber 3),
                                it looks kind of nice. And rendering takes
                                significantly less time.{" "}
                            </Typography>
                        </Paper>
                        <Paper
                            elevation={nestedElevation}
                            style={{ padding: "1rem", marginTop: "1rem" }}
                        >
                            <Typography variant="body1" paragraph={true}>
                                After few months of development, JavaScript
                                codebase, due to the lack of any serious
                                frameworks (jQuery and jQueryUI was only
                                libraries included) became messy and unstable,
                                so It was time to evolve. What you can see and
                                use now is the fourth revision of the project.
                                It is using{" "}
                                <span
                                    className={classes.prettyLink}
                                    onClick={getOpenExternal(
                                        "https://reactjs.org/"
                                    )}
                                >
                                    React
                                </span>{" "}
                                and{" "}
                                <span
                                    className={classes.prettyLink}
                                    onClick={getOpenExternal(
                                        "https://material-ui.com/"
                                    )}
                                >
                                    Material UI
                                </span>{" "}
                                for GUI, and{" "}
                                <span
                                    className={classes.prettyLink}
                                    onClick={getOpenExternal(
                                        "https://www.python.org/"
                                    )}
                                >
                                    Python
                                </span>{" "}
                                with{" "}
                                <span
                                    className={classes.prettyLink}
                                    onClick={getOpenExternal(
                                        "https://www.blender.org/"
                                    )}
                                >
                                    Blender
                                </span>{" "}
                                for model generation, mounting, and loads of
                                other necessary and hard to debug things.
                            </Typography>
                        </Paper>
                        <Paper
                            elevation={nestedElevation}
                            style={{ padding: "1rem", marginTop: "1rem" }}
                        >
                            <Typography variant="body1" paragraph={true}>
                                This project has already come a long way, but
                                there is still at least twice as much to do.
                                Hopefully there will be updates to share here.
                                Thank You for your attention.
                            </Typography>
                            <Typography variant="body1" paragraph={true}>
                                ~Core Dev
                            </Typography>
                            <Typography variant="body2">
                                2nd Dec 2020 - 2nd April 2021
                            </Typography>
                        </Paper>
                    </div>
                </Paper>
            </Container>
        </div>
    );
}
/**
 * Export HomePage workspace with custom CSS classes
 */
export default withStyles(theme => ({
    containerStyle: {
        minHeight: "100%",
        padding: "2%",
        alignContent: "center",
    },
    storyComp: {
        paddingTop: "5%",
        padding: "14%",
    },
    prettyLink: {
        display: "inline-flex",
        flexDirection: "row",
        color:
            theme.palette.type == "dark"
                ? theme.palette.info.light
                : theme.palette.info.dark,
        textDecoration: "underline",
        cursor: "pointer",
    },
    semiTitle: {
        borderBottom: `2px solid ${theme.palette.info.main}`,
        padding: "1rem",
    },
    panelImage: {
        width: "100%",
        height: "auto",
        padding: 0,
        margin: 0,
        outline: 0,
        userSelect: "none",
        pointerEvents: "none",
    },
    titleStyle: {
        display: "block",
        color: theme.palette.augmentColor({
            main: theme.palette.background.paper,
        }).contrastText,
        textAlign: "center",
        width: "100%",
        paddingBottom: "1rem",
        paddingTop: "1rem",
    },
    containerWorkspace: {
        position: "relative",
        height: "fit-content",
        backgroundColor: theme.palette.augmentColor({
            main: theme.palette.background.paper,
        }).dark,
        minHeight: "100%",
    },
}))(HomePage);
