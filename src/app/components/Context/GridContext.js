// GridRefContext.js
import { createContext, useContext, useRef, useEffect, useState } from "react";

const GridRefContext = createContext(null);

const useGridRef = () => {
    return useContext(GridRefContext);
}

export { useGridRef, GridRefContext }