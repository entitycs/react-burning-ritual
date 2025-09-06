// GridRefProvider.jsx
"use client";
import { useRef, useEffect, useState } from "react";
import { GridRefContext } from "./GridContext";

function GridRefProvider({ children }) {
    const gridRef = useRef(null);
    const [gridElement, setGridElement] = useState(null);

    useEffect(() => {
        if (gridRef.current) {
            setGridElement(gridRef.current);
        }
    }, []);

    return (
        <GridRefContext.Provider value={gridElement}>
            {/* 👇 This span is rendered exactly where it used to be */}
            <span id="gridCollection" ref={gridRef}></span>
            {children}
        </GridRefContext.Provider>
    );
}
export { GridRefProvider }