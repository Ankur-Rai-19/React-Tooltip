import React from "react";
import Tooltip from "./Tooltip";

const App = () => {
    return (
        <>
            <h1 className="heading">Tooltip App</h1>
            <div className="wrapper">
                <Tooltip position="top" text="Top Tooltip">
                    <button className="top-btn">Hover me! TOP </button>
                </Tooltip>

                <Tooltip position="bottom" text="Bottom Tooltip">
                    <button className="bottom-btn">Hover me! BOTTOM</button>
                </Tooltip>

                <Tooltip position="right" text="Right Tooltip">
                    <button className="right-btn">Hover me! RIGHT</button>
                </Tooltip>

                <Tooltip position="left" text="Left Tooltip">
                    <button className="left-btn">Hover me! LEFT</button>
                </Tooltip>
            </div>
        </>
    );
};

export default App;
