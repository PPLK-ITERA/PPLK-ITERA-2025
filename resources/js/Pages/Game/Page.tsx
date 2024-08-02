import { Unity, useUnityContext } from "react-unity-webgl";

import React, { Fragment } from "react";

function Page() {
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl:
            "https://krossmanzs.github.io/test-naramuda-explorer/Build/naramuda_explorer.loader.js",
        dataUrl:
            "https://krossmanzs.github.io/test-naramuda-explorer/Build/naramuda_explorer.data",
        frameworkUrl:
            "https://krossmanzs.github.io/test-naramuda-explorer/Build/naramuda_explorer.framework.js",
        codeUrl:
            "https://krossmanzs.github.io/test-naramuda-explorer/Build/naramuda_explorer.wasm",
    });

    return (
        <Fragment>
            {!isLoaded && (
                <p>
                    Loading Application...{" "}
                    {Math.round(loadingProgression * 100)}%
                </p>
            )}
            <Unity
                className="w-screen h-screen"
                unityProvider={unityProvider}
                style={{ visibility: isLoaded ? "visible" : "hidden" }}
            />
        </Fragment>
    );
}

export default Page;
