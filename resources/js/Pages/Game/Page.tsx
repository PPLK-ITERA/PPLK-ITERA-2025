import { Unity, useUnityContext } from "react-unity-webgl";

import React, { Fragment } from "react";

function Page() {
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl:
            "https://cdn.jsdelivr.net/gh/krossmanzs/test-naramuda-explorer@main/Build/naramuda_explorer.loader.js",
        dataUrl:
            "https://cdn.jsdelivr.net/gh/krossmanzs/test-naramuda-explorer@main/Build/naramuda_explorer.data",
        frameworkUrl:
            "https://cdn.jsdelivr.net/gh/krossmanzs/test-naramuda-explorer@main/Build/naramuda_explorer.framework.js",
        codeUrl:
            "https://cdn.jsdelivr.net/gh/krossmanzs/test-naramuda-explorer@main/Build/optimized.wasm",
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
