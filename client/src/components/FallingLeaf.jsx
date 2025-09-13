    import React from "react";
    import leaf from "../assets/leaf.png"; // Put your leaf SVG in the assets folder

    const FallingLeaf = () => {
    return (
        <img
        src={leaf}
        alt="Falling Leaf"
        className="leaf absolute w-10 h-10"
        />
    );
    };

    export default FallingLeaf;
