import { useState } from "react";

const usePointerInteraction = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const pointerHandlers = {
        onPointerEnter: () => {
            setIsHovered(true);
        },

        onPointerLeave: () => {
            setIsHovered(false);
        },

        onPointerDown: () => {
            setIsPressed(true);
        },

        onPointerUp: () => {
            setIsPressed(false);
        },

        onPointerCancel: () => {
            setIsPressed(false);
        },
    };

    return {
        isActive: isHovered || isPressed,
        pointerHandlers,
    };
};

export default usePointerInteraction