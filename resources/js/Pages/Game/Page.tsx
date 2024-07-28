import { Unity, useUnityContext } from "react-unity-webgl";

import React, { Fragment } from "react";

function Page() {
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: "naramuda_explorer/Build/naramuda_explorer.loader.js",
        dataUrl: "naramuda_explorer/Build/naramuda_explorer.data",
        frameworkUrl: "naramuda_explorer/Build/naramuda_explorer.framework.js",
        codeUrl: "naramuda_explorer/Build/naramuda_explorer.wasm",
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
