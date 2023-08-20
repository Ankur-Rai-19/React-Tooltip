import React, { useState } from "react";

//The Tooltip component displays a tooltip when the user hovers over its children.
const Tooltip = ({ position, text, children }) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    //The handleMouseOver function sets the tooltipVisible state to true.
    const handleMouseOver = () => {
        setTooltipVisible(true);
    };

    //The handleMouseOver function sets the tooltipVisible state to false.
    const handleMouseOut = () => {
        setTooltipVisible(false);
    };

    return (
        <div
            className="tooltip-container"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {children}
            {isTooltipVisible && (
                <div className={`tooltip tooltip-${position}`}>{text}</div>
            )}
        </div>
    );
};

export default Tooltip;
