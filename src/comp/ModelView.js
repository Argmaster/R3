import React, { useEffect, useRef } from "react";
import {
    Engine,
    Scene,
    Vector3,
    HemisphericLight,
    Color3,
    SceneLoader,
    ArcRotateCamera,
} from "@babylonjs/core";
import { withStyles } from "@material-ui/core";
const fs = window.require("fs");
import {} from "@babylonjs/loaders/glTF/index";
import { selectTNAwithDefault } from "../redux/tempSlice";
import { useDispatch } from "react-redux";

const loadModel = ($_SCENE, $_GLTFpath) => {
    // load GLB file and convert it to base64 (otherwise cannot be loaded)
    // I have tried using btoa but it turned out it fails to encode it properly
    // but Buffer seem to do it just fine
    try {
        let buff = Buffer.from(fs.readFileSync($_GLTFpath, { encoding: null }));
        let base64_buff = "data:base64," + buff.toString("base64");
        // Import model from string
        return SceneLoader.Append(
            "",
            base64_buff,
            $_SCENE,
            function () {
                $_SCENE.createDefaultCamera(true, true, true);
            },
            undefined,
            undefined,
            ".glb"
        );
    } catch (e) {}
};

export default withStyles(theme => ({
    canvas: {
        width: "100%",
        height: "100%",
        display: "block",
    },
    view: {
        height: "100%",
        overflow: "hidden",
    },
}))(
    ({
        lightPower,
        engineOptions,
        sceneOptions,
        onRender,
        classes,
        default_gltf,
        TNA,
        ...kwargs
    }) => {
        const reactCanvas = useRef(null);

        let $_ENGINE, $_SCENE, $_LIGHT, $_RESIZE;

        let $_GLTFpath = selectTNAwithDefault(
            `${TNA}::$_GLTFpath`,
            default_gltf
        );
        let $_isDirty = selectTNAwithDefault(`${TNA}::$_isDirty`, 0);

        if ($_LIGHT != undefined) $_LIGHT.intensity = lightPower;
        useEffect(() => {
            $_ENGINE = new Engine(
                reactCanvas.current,
                true,
                engineOptions,
                true
            );

            $_SCENE = new Scene($_ENGINE, sceneOptions);
            $_SCENE.clearColor = new Color3(0.6, 0.6, 0.6);
            $_LIGHT = new HemisphericLight(
                "light",
                new Vector3(1, 1, 0),
                $_SCENE
            );
            $_LIGHT.intensity = lightPower;
            const onSceneReady = () => {
                var camera = new ArcRotateCamera(
                    "camera1",
                    0,
                    0,
                    10,
                    new Vector3(0, 0, 0),
                    $_SCENE
                );
                const canvas = $_SCENE.getEngine().getRenderingCanvas();
                camera.attachControl(canvas, true);
                if ($_GLTFpath != undefined) loadModel($_SCENE, $_GLTFpath);
            };
            if ($_SCENE.isReady()) onSceneReady();
            else $_SCENE.onReadyObservable.addOnce(onSceneReady);

            $_ENGINE.runRenderLoop(() => {
                if (typeof onRender === "function") {
                    onRender($_SCENE);
                }
                $_SCENE.render();
            });
            $_RESIZE = () => $_ENGINE.resize();
            window.addEventListener("resize", $_RESIZE);

            return () => {
                $_SCENE.getEngine().dispose();
                if (window) {
                    window.removeEventListener("resize", $_RESIZE);
                }
            };
        }, [reactCanvas, $_GLTFpath, $_isDirty]);
        return (
            <div className={classes.view}>
                <canvas
                    className={classes.canvas}
                    ref={reactCanvas}
                    {...kwargs}
                />
            </div>
        );
    }
);
