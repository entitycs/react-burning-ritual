module.exports = [
"[project]/src/app/components/Context/GridContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// GridRefContext.js
__turbopack_context__.s([
    "GridRefContext",
    ()=>GridRefContext,
    "useGridRef",
    ()=>useGridRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const GridRefContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const useGridRef = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(GridRefContext);
};
;
}),
"[project]/src/app/components/Context/GridProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// GridRefProvider.jsx
__turbopack_context__.s([
    "GridRefProvider",
    ()=>GridRefProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Context$2f$GridContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Context/GridContext.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function GridRefProvider({ children }) {
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [gridElement, setGridElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (gridRef.current) {
            setGridElement(gridRef.current);
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Context$2f$GridContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GridRefContext"].Provider, {
        value: gridElement,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                id: "gridCollection",
                ref: gridRef
            }, void 0, false, {
                fileName: "[project]/src/app/components/Context/GridProvider.js",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Context/GridProvider.js",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
;
}),
"[project]/src/app/components/Event/FauxEvent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * FauxEvent
 * 
 * Object simulating value available from React.SyntheticEvent
 * 
 * @param {*} value 
 * @returns 
 */ __turbopack_context__.s([
    "FauxEvent",
    ()=>FauxEvent
]);
function FauxEvent(name, value, thisContext) {
    return {
        target: {
            ...thisContext,
            name,
            value
        }
    };
}
;
}),
"[project]/src/app/components/Util/Grid/Grid.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Grid",
    ()=>Grid,
    "GridSizeControl",
    ()=>GridSizeControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Event$2f$FauxEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Event/FauxEvent.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const _gridMax = 6;
/**
 * Grid
 * 
 * Allows for keying and positioning of elements based on an N x M grid
 * where (N * M) > 1
 * 
 * @typedef {{data:[], option:{xLength:number,yLength:number}}} GridOptions
 * @typedef {{keyId: string, top: number, left: number, occupants:string[]}[]} GridKey
 * @typedef {{data:[], option:{xLength:number,yLength:number}}} GridOptions
 * 
 * @param {{
 *   optionData: GridOptions, 
 *   form: React.JSXElementConstructor,
 *   onSetGrid: React.Reducer,
 *   children: React.JSXElementConstructor,
 * }} props
 * @returns {React.ReactComponentElement} Grid
 * 
 * @param {GridOptions} props.optionData - data used to initialize or resize the grid.
 * @param {React.JSXElementConstructor} props.form - for element for submissions to grid.
 * @param {React.Reducer} props.onSetGrid - reducer callback for grid state.
 * @param {React.JSXElementConstructor} props.children - grid item elements.
 */ function Grid({ optionData, form, onSetGrid, children }) {
    function checkSize(x, y) {
        if (x + y < 2) {
            throw new Error('Invalid Grid size; must be >= 1');
        }
    }
    // let onSetGrid prop dispatch grid state, using optionData for initial state
    //  
    const [gridState, gridDispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(onSetGrid, {
        gridData: optionData.data,
        gridKey: _gridKey(optionData.option.xLength, optionData.option.yLength),
        gridOptions: optionData
    });
    /**
   * gridKey
   * 
   * Sets the grid keys and positions based on grid size
   * 
   * @param {number} lenX 
   * @param {number} lenY 
   * @returns {GridKey} Metadata for each grid item slot
   */ function _gridKey(lenX, lenY) {
        checkSize(lenY, lenX);
        let grid = [];
        let keyId = 0;
        let xMult = 100 / lenX; //rem
        let yMult = 100 / lenY; //rem
        for(var y = 0; y < lenY; y++){
            let gridRow = [];
            for(var x = 0; x < lenX; x++){
                gridRow.push({
                    keyId: keyId,
                    top: y * yMult,
                    left: x * xMult,
                    occupants: [] // may change from array to single value in near future
                });
                keyId++;
            }
            grid.push(gridRow);
        } // endfor
        return grid;
    }
    ; // gridKey()
    /**
   * submitToGrid
   * 
   * Sends item to grid state dispatching function after checking for 
   * and if necessary setting up a new grid sizing event attached to 
   * item.event.
   * 
   * @param {Object} item 
   */ function submitToGrid(item) {
        if (!item) {
            return;
        }
        if (item.event) {
            if (item.event.newGrid) {
                let eventSize = item.event.newGrid;
                item.event.newGrid = _gridKey(eventSize.xLength ? eventSize.xLength : gridState.gridKey[0].length, eventSize.yLength ? eventSize.yLength : gridState.gridKey.length);
            }
        }
        gridDispatch({
            ...item
        });
    } //submitToGrid
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "Grid-reducer",
        children: [
            children(gridState.gridData),
            form(submitToGrid)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Util/Grid/Grid.js",
        lineNumber: 108,
        columnNumber: 5
    }, this);
} // Grid
/**
 * 
 * @param {*} param0 
 * @returns 
 */ function GridSizeControl({ onChange, className, defaultSize }) {
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultSize);
    const maxGrid = (()=>{
        let grid = [];
        for(var i = 1; i <= _gridMax; i++){
            grid.push(i);
        }
        return grid;
    })();
    const onChangeMemo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>onChange(e), [
        onChange
    ]);
    /**
   * onLocalChange
   * 
   * @param {string} name 
   * @param {React.SyntheticEvent} e 
   */ function onLocalChange(e) {
        let value = Number(e.target.value);
        if (e.target.name === 'yLength') {
            setSize((s)=>{
                return {
                    ...s,
                    y: Math.abs(value) % (_gridMax + 1)
                };
            });
        } else if (e.target.name === 'xLength') {
            setSize((s)=>{
                return {
                    ...s,
                    x: Math.abs(value) % (_gridMax + 1)
                };
            });
        }
        return onChangeMemo(e);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const changer = (e)=>{
            const value = Number(e.target.value);
            if (e.target.name === 'yLength') {
                setSize((s)=>{
                    return {
                        ...s,
                        y: Math.abs(value) % (_gridMax + 1)
                    };
                });
            } else if (e.target.name === 'xLength') {
                setSize((s)=>{
                    return {
                        ...s,
                        x: Math.abs(value) % (_gridMax + 1)
                    };
                });
            }
            return onChangeMemo(e);
        };
        changer((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Event$2f$FauxEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FauxEvent"])('yLength', defaultSize.y));
        changer((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Event$2f$FauxEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FauxEvent"])('xLength', defaultSize.x));
    }, [
        defaultSize,
        onChangeMemo
    ]);
    return [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: `gridSize ${className}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Grid Size:"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Util/Grid/Grid.js",
                    lineNumber: 166,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sliderVertical",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "yLength",
                        type: "range",
                        min: 1,
                        max: _gridMax,
                        step: 1,
                        value: size.y,
                        onChange: onLocalChange,
                        list: "tickmarks",
                        style: {
                            width: 4 + _gridMax + 'vh'
                        }
                    }, "yLength", false, {
                        fileName: "[project]/src/app/components/Util/Grid/Grid.js",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Util/Grid/Grid.js",
                    lineNumber: 167,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sliderHorizontal",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "t123",
                            style: {
                                width: (_gridMax + 0.5).toString() + 'vh',
                                height: _gridMax.toString() + 'vh'
                            },
                            children: maxGrid.map((n)=>maxGrid.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "gridOptSignifier " + (size.x >= m && size.y >= n ? '' : 'oob')
                                    }, (_gridMax * (n - 1) + (m - 1)).toString(), false, {
                                        fileName: "[project]/src/app/components/Util/Grid/Grid.js",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this)))
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Util/Grid/Grid.js",
                            lineNumber: 172,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "xLength",
                            type: "range",
                            min: 1,
                            max: _gridMax,
                            step: 1,
                            value: size.x,
                            onChange: onLocalChange,
                            list: "tickmarks",
                            style: {
                                width: 2 + _gridMax + 'vh'
                            }
                        }, "xLength", false, {
                            fileName: "[project]/src/app/components/Util/Grid/Grid.js",
                            lineNumber: 180,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Util/Grid/Grid.js",
                    lineNumber: 171,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                    id: "tickmarks",
                    children: maxGrid.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: n
                        }, n.toString(), false, {
                            fileName: "[project]/src/app/components/Util/Grid/Grid.js",
                            lineNumber: 184,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Util/Grid/Grid.js",
                    lineNumber: 183,
                    columnNumber: 7
                }, this)
            ]
        }, "gridSizer", true, {
            fileName: "[project]/src/app/components/Util/Grid/Grid.js",
            lineNumber: 165,
            columnNumber: 5
        }, this)
    ];
} //GridSizeControl
;
}),
"[project]/src/app/components/Util/Filter/PipeFilter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Filter",
    ()=>Filter,
    "OptionPipe",
    ()=>OptionPipe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
/**
 * Filter
 * 
 * @param {{
 *   name: string,
 *   style: callback,
 *   event: callback,
 *   content: callback,
 *   controllerSet: React.JSXElementConstructor,
 *   onFilterChange: callback
 * }} props - Component properties.
 * @returns {React.Component} Filter - A Filter component with or without rendered
 *                                     controllers.
 * 
 * @param {string} props.name - filter name.
 * @param {callback} props.style - filter style callback.
 * @param {callback} props.event - filter event callback.
 * @param {callback} props.content - filter content callback.
 * @param {React.JSXElementConstructor} props.controllerSet - callback for controller set 
 *                                                    rendering (if any).
 * @param {onUpdateFilterSet} props.onFilterChange  - callback for the case changes are made to the
 *                                                    Filter (via a controller)
 */ function Filter({ name, style, event, content, controllerSet, onFilterChange }) {
    /**
   * Assign the project to an employee.
   * @param {React.SyntheticEvent} e - onChange event (or FauxEvent)
   * @param {string} e.target.value - updated value.
   * @param {string} e.target.name - name of controller with update.
   */ function onChange(e, once = false) {
        let result = {};
        result[e.target.name] = {
            value: e.target.value,
            once
        };
        onFilterChange(result);
    }
    return controllerSet ? controllerSet(onChange) : "";
} // Filter
/**
 * OptionPipe
 * 
 * @typedef {string} FilterControlName
 * @typedef {{FilterControlName: {value: any, once: boolean}}} FilterControlValue
 * 
 * @param {{
 *   filterSet:React.JSXElementConstructor,
 *   input: React.JSXElementConstructor,
 *   onOutput: callback
 * }} props
 * @returns {React.Component} OptionPipe - Pipe & Filter component for modifying
 *                                         data between input and output enpoints.
 *
 * @param {...Filter} props.filterSet   - one or more Filter components.
 * @param {React.JSXElementConstructor} props.input - function to render input component
 * @param {callback} props.onOutput     - usually a callback expecting output from 
 *                                        the input component.
 */ function OptionPipe({ filterSet, input, onOutput }) {
    const [valueState, setValueState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [filter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(filterSet(onUpdateFilterSet));
    function onSubmitToPipe(value) {
        let element = {
            event: filter.reduce((acc, f)=>f && f.props.event ? {
                    ...acc,
                    ...f.props.event(value, valueState, acc)
                } : acc, {}),
            content: filter.reduce((acc, f)=>f && f.props.content ? f.props.content(value, valueState, acc) : acc, []),
            style: filter.reduce((acc, f)=>f && f.props.style ? {
                    ...acc,
                    ...f.props.style(value, valueState, acc)
                } : acc, {})
        };
        onOutput(element);
        // clear out (one-time) events.  This is allowed so that, for example, we do not attempt
        // re-building a Grid component on every grid element update render after a grid resizing event.
        setValueState((s)=>{
            Object.keys(s).forEach((stateValueKey)=>{
                if (s[stateValueKey].once) {
                    delete s[stateValueKey];
                }
            });
            return {
                ...s
            };
        });
    } // onSubmitToPipe
    /**
   * onUpdateFilterSet
   * 
   * @param {FilterControlValue} controllerValue - object containing keyed controller value.
   * @param {string} controllerValue.FilterControlName - the controller name.
   * @param {*} controllerValue.FilterControlName.value - the controller value.
   * @param {boolean} controllerValue.FilterControlName.once - if true, controller state is removed from filter after first use.
   */ function onUpdateFilterSet(controllerValue) {
        setValueState((s)=>{
            return {
                ...s,
                ...controllerValue
            };
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        id: "textInpupt",
        className: "filterUI",
        children: [
            input(onSubmitToPipe),
            filter
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Util/Filter/PipeFilter.js",
        lineNumber: 112,
        columnNumber: 5
    }, this);
} //OptionPipe
;
}),
"[project]/src/app/components/UX/useTouch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTouchRef",
    ()=>useTouchRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
/** useTouchRef
 * 
 * Prevents screen panning on touchscreen device while interacting with element
 * 
 * @param {bool} touchActive - true if element touch
 * @param {useRef} ref - useRef object (assumed assigned as element ref prop)
 */ function useTouchRef({ touchActive, ref }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onTouchMove = (e)=>{
            if (touchActive) {
                e.preventDefault();
                e.stopPropagation();
            }
        };
        const onTouchStart = onTouchMove;
        if (ref) {
            ref.current.addEventListener("touchmove", onTouchMove, {
                passive: false
            });
            ref.current.addEventListener("touchstart", onTouchStart, {
                passive: false
            });
        }
        // React docs suggest using copy for cleanup function as original ref object may be unreferencable
        const refTarget = {
            ...ref || {}
        };
        return ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                refTarget.current.removeEventListener("touchmove", onTouchMove);
                refTarget.current.removeEventListener("touchstart", onTouchStart);
            }
        };
    }, [
        touchActive,
        ref
    ]);
}
;
}),
"[project]/src/app/components/Element/BurningElement.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BurningElement",
    ()=>BurningElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$useTouch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/UX/useTouch.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function BurningElement({ burningItem }) {
    const smokeAnimClass = "engulfing";
    const fireAnimClass = "engulfingSlow";
    const letterAnimClass = "engulfingFast";
    const [pressed, setPressed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [item, setItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        ...burningItem
    });
    const dragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onPointerMove = (event)=>{
        if (pressed) {
            event.preventDefault();
            setPosition({
                x: position.x + event.movementX,
                y: position.y + event.movementY
            });
        }
    };
    const onPointerDown = (event)=>{
        dragRef.current.setPointerCapture(event.nativeEvent.pointerId);
        setPressed(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$useTouch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTouchRef"])({
        touchActive: pressed,
        ref: dragRef
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setItem((s)=>burningItem);
    }, [
        burningItem
    ]);
    return item?.style ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "burningItem",
        ref: dragRef,
        onPointerDown: onPointerDown,
        onPointerMove: pressed ? onPointerMove : (e)=>{},
        onPointerUp: ()=>setPressed(false),
        style: {
            ...item.style.burningElement,
            position: 'absolute',
            top: item.style.bottom + 'vh',
            left: item.style.left + 'vw',
            transform: `translate(${position.x}px, ${position.y}px)`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: 'itemContent container ' + (letterAnimClass || ''),
                style: {
                    backgroundColor: item.style.backgroundColor,
                    color: item.style.color,
                    animation: item.style.animationLetter
                },
                children: item.content
            }, void 0, false, {
                fileName: "[project]/src/app/components/Element/BurningElement.js",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flicker ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "red flame " + fireAnimClass,
                        style: {
                            animation: item.style.animationFire
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Element/BurningElement.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orange flame " + fireAnimClass,
                        style: {
                            animation: item.style.animationFire
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Element/BurningElement.js",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "yellow flame " + fireAnimClass,
                        style: {
                            animation: item.style.animationFire
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Element/BurningElement.js",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "white flame " + fireAnimClass,
                        style: {
                            animation: item.style.animationFire
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Element/BurningElement.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Element/BurningElement.js",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "smoke " + smokeAnimClass,
                style: {
                    animation: item.style.animationSmoke
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "s0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Element/BurningElement.js",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "s1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Element/BurningElement.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "s2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Element/BurningElement.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "s3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Element/BurningElement.js",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "s4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Element/BurningElement.js",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "s5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Element/BurningElement.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "s6"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Element/BurningElement.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "s7"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Element/BurningElement.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "s8"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Element/BurningElement.js",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "s9"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Element/BurningElement.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Element/BurningElement.js",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, "" + item.key, true, {
        fileName: "[project]/src/app/components/Element/BurningElement.js",
        lineNumber: 36,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
        fileName: "[project]/src/app/components/Element/BurningElement.js",
        lineNumber: 80,
        columnNumber: 16
    }, this);
}
;
}),
"[project]/src/app/components/Element/ElementView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementView",
    ()=>ElementView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Element$2f$BurningElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Element/BurningElement.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
/**
 * ElementView
 * 
 * @param {{
 *   data:BurningItem[],
 *   parent:React.DOMElement|undefined
 * }} props
 * @param {CSSStyleRule} data.style
 * @param {React.DOMElement|undefined} parent 
 * @returns {React.FunctionComponentElement} ElementView
 */ function ElementView({ data, parent }) {
    const [domEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(document.createElement('div'));
    const [thisParent, setParent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(parent);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let target = document.getElementById('gridCollection');
        if (thisParent !== target && target !== null) {
            target.appendChild(domEl);
            setParent((p)=>{
                target.appendChild(domEl);
                return target;
            });
        }
        if (thisParent) {
            thisParent.appendChild(domEl);
        }
        return ()=>{
            thisParent?.removeChild(domEl);
        };
    }, [
        thisParent,
        domEl
    ]);
    return data && data.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(data.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Element$2f$BurningElement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BurningElement"], {
            burningItem: item
        }, item.key, false, {
            fileName: "[project]/src/app/components/Element/ElementView.js",
            lineNumber: 38,
            columnNumber: 40
        }, this)), thisParent) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "welcome",
        children: [
            "Nothing burning.",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/app/components/Element/ElementView.js",
                lineNumber: 39,
                columnNumber: 49
            }, this),
            "Open the Submit/Options section below to get started."
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Element/ElementView.js",
        lineNumber: 39,
        columnNumber: 8
    }, this);
}
;
}),
"[project]/src/app/components/Util/grid.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNextKeyId",
    ()=>getNextKeyId,
    "gridOptionData",
    ()=>gridOptionData,
    "onSetGrid",
    ()=>onSetGrid
]);
const gridOptionData = {
    data: [],
    current: {
        x: 0,
        y: 0
    },
    option: {
        xLength: 1,
        yLength: 1
    }
};
function checkSize(x, y) {
    if (x + y < 2) {
        throw new Error('Invalid Grid size; must be >= 1');
    }
}
function getNextKeyId(gridState) {
    let option = gridState.gridOptions.option;
    let gridLength = option.xLength * option.yLength;
    let gridRandStart = gridState.gridData.length ? gridState.gridData[gridState.gridData.length - 1].key : Math.floor(Math.random() * gridLength);
    // check this 'fix' for single-item grid, when published / outside of strict mode
    gridRandStart = isNaN(gridRandStart) ? 0 : gridRandStart;
    let addIndex = gridRandStart;
    let addY, addX, gridAtKey;
    do {
        addIndex = (addIndex + 1) % gridLength;
        addY = Math.floor(addIndex / option.xLength);
        addX = addIndex % option.xLength;
        gridAtKey = gridState.gridKey[addY][addX];
        if (0 === gridAtKey.occupants.length) {
            break;
        }
    }while (addIndex !== gridRandStart)
    if (addIndex === gridRandStart) {
        addIndex = (addIndex + 1) % gridLength;
        addY = Math.floor(addIndex / option.xLength);
        addX = addIndex % option.xLength;
        gridAtKey = gridState.gridKey[addY][addX];
    }
    // check this 'fix' for single-item grid, when published / outside of strict mode
    if (gridRandStart === 0 && gridLength === 1) {
        //
        // For a single element grid, we change the key, from 0 to a random string,
        // which will create overflow in our grid collection, expanding the number
        // of elements to be greater than the (keyed) grid size.  This works from
        // a UX perspective, but we must constrain this overflow or face eventual
        // performance decline.  Note that for all other grid sizes > 1, this
        // overflow is not allowed, and keys must fall into the current grid index 
        // range.
        //
        return Math.random().toString(16);
    }
    return gridAtKey.keyId;
}
/**
 * gridKey
 * 
 * Sets the grid keys and positions based on grid size
 * 
 * @param {number} lenX 
 * @param {number} lenY 
 * @returns {GridKey} Metadata for each grid item slot
 */ function _gridKey(lenX, lenY) {
    checkSize(lenY, lenX);
    let grid = [];
    let keyId = 0;
    let xMult = 100 / lenX;
    let yMult = 100 / lenY;
    for(var y = 0; y < lenY; y++){
        let gridRow = [];
        for(var x = 0; x < lenX; x++){
            gridRow.push({
                keyId: keyId,
                top: y * yMult,
                left: x * xMult,
                occupants: [] // may change from array to single value in near future
            });
            keyId++;
        }
        grid.push(gridRow);
    } // endfor
    return grid;
}
; // gridKey()
/**
 * onSetGrid
 * 
 * acts as a reducer for grid state
 * 
 * @param {*} gridState contains grid positional keys, grid elements, and grid options
 * @param {*} itemAdded 
 * @returns 
 */ function onSetGrid(gridState, itemAdded) {
    if (!itemAdded) return gridState;
    let newGridKey, newGridData, gridLengthX, gridLengthY;
    if (itemAdded.event) {
        if (itemAdded.event.newGrid) {
            newGridKey = itemAdded.event.newGrid;
            newGridData = [];
            gridLengthY = itemAdded.event.newGrid.length;
            gridLengthX = itemAdded.event.newGrid[0].length;
        // console.log("newGridKey", gridLengthY * gridLengthX);
        }
    }
    newGridKey = newGridKey || [
        ...gridState.gridKey
    ];
    newGridData = newGridData || [
        ...gridState.gridData
    ];
    gridLengthY = gridLengthY || gridState.gridOptions.option.yLength;
    gridLengthX = gridLengthX || gridState.gridOptions.option.xLength;
    let g = {
        ...gridState
    };
    g.gridOptions.option.yLength = gridLengthY;
    g.gridOptions.option.xLength = gridLengthX;
    g.gridKey = newGridKey;
    g.gridData = newGridData;
    let addX, addY;
    let addIndex = getNextKeyId(g);
    if (isNaN(addIndex)) {
        addX = 0;
        addY = 0;
    } else {
        addY = Math.floor(addIndex / gridLengthX);
        addX = addIndex % gridLengthX;
    }
    let gridAtKey = newGridKey[addY][addX];
    if (newGridKey[addY][addX].occupants.length) {
        newGridKey[addY][addX].occupants = [];
        newGridData = newGridData.filter((k)=>k.key !== gridAtKey.keyId);
    }
    itemAdded.style.position = 'absolute'; //move to filter
    itemAdded.style.bottom = gridAtKey.top; //move to filter
    itemAdded.style.left = gridAtKey.left; //move to filter
    itemAdded.key = addIndex;
    if (itemAdded.event) {
        // delete(itemAdded.event);
        itemAdded.event = {
            ...itemAdded.event,
            key: itemAdded.key
        };
    }
    // in case of singular element grid size, constrain the number of grid elements
    if (newGridData.length > 25) {
        newGridData.shift();
    }
    try {
        newGridKey[addY][addX].occupants.push(itemAdded.key);
        newGridData.push(itemAdded);
    } catch (e) {
        console.log(newGridKey, "index", e.message);
    }
    ;
    gridOptionData.current = {
        x: addX,
        y: addY
    };
    return {
        gridData: newGridData,
        current: {
            x: addX,
            y: addY
        },
        gridKey: newGridKey,
        gridOptions: {
            data: [],
            option: {
                xLength: gridLengthX,
                yLength: gridLengthY
            }
        }
    };
} //onSetGrid
;
}),
"[project]/src/app/components/Util/input.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ControlSetInitializer",
    ()=>ControlSetInitializer,
    "numberToHex",
    ()=>numberToHex,
    "useInitializer",
    ()=>useInitializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Event$2f$FauxEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Event/FauxEvent.js [app-ssr] (ecmascript)");
"use client";
;
;
/**
 * useInitiator (hook) (alpha/concept)
 * 
 * Child input elements have their callbacks run on mount, with the value
 * sent being the value set in the input's defaultValue attribute.
 * 
 * Constraints: 
 * 
 * Child input elements must have (or be given) an onChange method.
 * 
 * Only immediate (or labeled) child inputs are initialized (see below).
 * 
 * It is assumed that inputs with a label are direct children of that label.
 * In such cases, the inputs will be included in the initializations.
 * 
 * @param {...React.ReactElement} children 
 * 
 * @see FauxEvent
 */ function useInitializer(children) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (children) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.toArray(children).forEach((child)=>{
                if (child.type === 'label') {
                    if (child.props.children) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.toArray(child.props.children).forEach((c)=>{
                            if (c.props) {
                                if (c.props.onChange) {
                                    c.props.onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Event$2f$FauxEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FauxEvent"])(c.props.name, c.props.defaultValue || c.props.value));
                                }
                            }
                        });
                    }
                } else if (child.props && child.props.onChange) {
                    child.props.onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Event$2f$FauxEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FauxEvent"])(child.props.name, child.props.defaultValue || child.props.value));
                }
            });
        }
    }, [
        children
    ]);
} //useInitializer
/**
 * ControlSetInitializer
 * 
 * Simple Component with useInitializer effect applied
 * 
 * @param {...React.ReactElement} children
 * @returns 
 */ function ControlSetInitializer({ children }) {
    useInitializer(children);
    return children;
}
/**
 * numberToHex
 * 
 * Converts number to css friendly hex string (eg. 15 converts to '0f' vs 'f')
 * 
 * @param {number} input - number to convert.
 * @returns {string} input number, in css-friendly hex string.
 */ function numberToHex(input) {
    if (isNaN(input)) {
        throw new Error(`Invalid input (Number expected). Received ${input}.`);
    }
    if (input === undefined || input === null) {
        input = 255;
    }
    let result = input.toString(16);
    if (result === '') {
        return '00';
    }
    while(result.length < 2){
        result = '0' + result;
    }
    return result;
} //numberToHex
;
}),
"[project]/src/app/components/Util/Parse/ElementParser.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseImages",
    ()=>parseImages,
    "parseParagraphs",
    ()=>parseParagraphs,
    "parseSpans",
    ()=>parseSpans
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
/**
 * parseChildren
 * 
 * @param {*} text 
 * @param {*} children 
 * @param {*} todo         list of todos when parsing siblings or children
 * @returns 
 */ function parseChildren(text, children, todo) {
    if (todo.span) {
        let hasChildren = parseSpans(text, children, todo);
        return hasChildren ? children : text;
    } else if (todo.img) {
        let hasChildren = parseImages(text, children, todo);
        return hasChildren ? children : text;
    }
} //parseChildren
/**
 * parseGeneric
 * 
 * Separates shared logic and parser specific matching logic
 * 
 * @param {*} text          textual input 
 * @param {*} targetArray   stores parsed text and elements in order of appearance
 * @param {*} pattern       pattern to match for parse
 * @param {*} callback      object containing pre-match, match, and post-match logic
 * 
 * @returns true if parsing was successful, with match, false otherwise
 */ function parseGeneric(text, targetArray, pattern, callback) {
    let results = text.match(pattern);
    if (results) {
        let prevIndex = 0, index = 0, length = 0, tmp = null;
        // loop on each match of pattern, and using the match index, call
        // pre/post/match callbacks as appropriate
        results.map((match)=>{
            index = text.substring(prevIndex).search(match) + prevIndex;
            length = match.length;
            // [pre]* [index + length]+ [post]*
            if (index > prevIndex) {
                tmp = callback.preMatch(prevIndex, index, length);
                if (tmp) {
                    targetArray.push(tmp);
                }
            }
            tmp = callback.match(prevIndex, index, length);
            if (tmp) {
                targetArray.push(tmp);
            }
            prevIndex = index + length;
            return null;
        }); // results.map
        tmp = callback.postMatch(prevIndex, index, length);
        if (tmp) {
            targetArray.push(tmp);
        }
        if (prevIndex > 0) return true;
    }
    return false;
} //parseGeneric
/**
 * parseImages
 * 
 * @param {*} text         textual input 
 * @param {*} targetArray  stores parsed text and elements in order of appearance
 * @param {*} todo         list of todos if parsing siblings or children
 * 
 * @returns true if images were parsed from text, false otherwise
 */ function parseImages(text, targetArray, todo = []) {
    let preMatch = (prevIndex, matchIndex, matchLength)=>{
        return text.slice(prevIndex, matchIndex - 1);
    };
    let match = (prevIndex, matchIndex, matchLength)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            alt: "burningItemImg",
            style: {
                maxWidth: '100%'
            },
            className: "darkening",
            src: text.slice(matchIndex, matchIndex + matchLength)
        }, matchIndex, false, {
            fileName: "[project]/src/app/components/Util/Parse/ElementParser.js",
            lineNumber: 84,
            columnNumber: 12
        }, this);
    };
    let postMatch = (prevIndex, matchIndex, matchLength)=>{
        if (prevIndex < text.length) {
            return text.slice(prevIndex, text.length);
        }
    };
    return parseGeneric(text, targetArray, /[^ \n]*(\.jpg|\.jpeg|\.png|\.svg|\.gif|\.webp)[\s\\n\\r]*/gi, {
        preMatch,
        match,
        postMatch
    });
} //parseImages
/**
 * parseParagraphs
 * 
 * @param {*} text         textual input 
 * @param {*} targetArray  stores parsed text and elements in order of appearance
 * @param {*} todo         list of todos if parsing siblings or children
 * 
 * @returns true if newlines were parsed from text, false otherwise
 */ function parseParagraphs(text, targetArray, todo = {}) {
    if (todo.img) {
        todo.span = true;
    }
    let preMatch = (prevIndex, matchIndex, matchLength)=>{
        if (matchIndex === prevIndex) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, matchIndex + "spaceAbove", false, {
            fileName: "[project]/src/app/components/Util/Parse/ElementParser.js",
            lineNumber: 110,
            columnNumber: 14
        }, this);
        else return null;
    };
    let match = (prevIndex, matchIndex, matchLength)=>{
        if (prevIndex === matchIndex) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, matchIndex + "spaceBelow", false, {
                fileName: "[project]/src/app/components/Util/Parse/ElementParser.js",
                lineNumber: 115,
                columnNumber: 14
            }, this);
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: parseChildren(text.slice(prevIndex, matchIndex), [], todo)
            }, matchIndex, false, {
                fileName: "[project]/src/app/components/Util/Parse/ElementParser.js",
                lineNumber: 118,
                columnNumber: 14
            }, this);
        }
    };
    let postMatch = (prevIndex, matchIndex, matchLength)=>{
        if (prevIndex < text.length) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: parseChildren(text.slice(prevIndex, text.length), [], todo)
            }, matchIndex, false, {
                fileName: "[project]/src/app/components/Util/Parse/ElementParser.js",
                lineNumber: 123,
                columnNumber: 14
            }, this);
        }
    };
    return parseGeneric(text, targetArray, /(\n|\r)/gi, {
        preMatch,
        match,
        postMatch
    });
} //parseParagraphs
/**
 * parseSpans
 * 
 * @param {*} text         textual input 
 * @param {*} targetArray  stores parsed text and elements in order of appearance
 * @param {*} todo         list of todos if parsing siblings or children
 * 
 * @returns true if spans were parsed from text successfully, false otherwise
 */ function parseSpans(text, targetArray, todo = {}) {
    let preMatch = (prevIndex, matchIndex, matchLength)=>{
        if (matchIndex === prevIndex) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                color: 'blue'
            },
            children: "placeholder"
        }, void 0, false, {
            fileName: "[project]/src/app/components/Util/Parse/ElementParser.js",
            lineNumber: 141,
            columnNumber: 14
        }, this);
        else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: parseChildren(text.slice(prevIndex, matchIndex - 1), [], todo)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Util/Parse/ElementParser.js",
                lineNumber: 143,
                columnNumber: 14
            }, this);
        }
    };
    let match = (prevIndex, matchIndex, matchLength)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: parseChildren(text.slice(prevIndex, matchIndex + matchLength), [], todo)
        }, void 0, false, {
            fileName: "[project]/src/app/components/Util/Parse/ElementParser.js",
            lineNumber: 147,
            columnNumber: 12
        }, this);
    };
    let postMatch = (prevIndex, matchIndex, matchLength)=>{
        if (prevIndex < text.length) {
            console.log("postMatch", prevIndex, text.length);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: parseChildren(text.slice(prevIndex, text.length), [], todo)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Util/Parse/ElementParser.js",
                lineNumber: 152,
                columnNumber: 14
            }, this);
        }
    };
    let result = parseGeneric(text, targetArray, /([*][*][^*]+[*][*])|([_][_][^_]+[_][_])/gi, {
        preMatch,
        match,
        postMatch
    });
    //<p>...<img>...</p> is allowed (without intermediate span), so we check if in todo regardless of result
    if (!result && todo.img) {
        return parseImages(text, targetArray, todo);
    }
} //parseSpans
;
}),
"[project]/src/app/components/UX/Knob/Knob.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Knob",
    ()=>Knob
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$useTouch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/UX/useTouch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Event$2f$FauxEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Event/FauxEvent.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
/**
 * Knob
 * 
 * A circular slider input.  Uses css property shape-outside and svg half-circle(s)
 * along with a parent element padding-top to push a knob slider 'around' the 
 * half-circle shape(s).
 * 
 * @param {Object} props - component properties.
 * @returns {React.ReactComponentElement} Knob component element
 * 
 * @param {string} props.name     - controller name
 * @param {number} props.r        - knob radius
 * @param {number} props.cy       - knob viewpoint center y
 * @param {number} props.cx       - knob viewpoint center x
 * @param {number} props.minValue - knob minimum value
 * @param {number} props.maxValue - knob maximum value
 * @param {number} props.defaultValue - knob default value
 * @param {callback} props.onChange - on value changed callback
 * @param {callback} props.styleProps - ocallback for dynamic styling based on knob state
 * @param {callback} props.handleColor - ocallback for changing knob color based on knob state

 */ function Knob({ name, r = 35, cy = 50, cx = 50, minValue = 10, maxValue = 30, defaultValue = 25, label = "", onChange, className, styleProps, handleColor }) {
    const knobMax = 75;
    const knobMin = 5;
    const [knob, setKnob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        side: 'right',
        // (left|right|both(not yet implemented))
        innerValue: convertValueKnob(defaultValue),
        refValue: {
            x: 0,
            y: 0
        },
        knobMax,
        knobMin,
        value: defaultValue,
        active: false,
        hoverInactive: false,
        initTouchValue: {
            x: 0,
            y: 0
        }
    });
    const knobRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [styleFunc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(styleProps || {
        knob: (value, style)=>{
            return style;
        },
        handle: (value, style)=>{
            return style;
        }
    });
    /* using quadrants to calculate relative velocity delta */ function getKnobQuadrant(offset) {
        let quad = 1; //topright, botright, botleft, topleft
        if (offset.y >= 50) if (offset.x >= 50) quad = 2;
        else quad = 3;
        else if (offset.x < 50) quad = 4;
        return quad;
    }
    /**
   * 
   * @param {x,y coords} offset 
   * @returns 
   */ function getKnobMultiplier(offset) {
        return Math.sqrt(Math.pow(knob.initTouchValue.x - 50, 2) + Math.pow(knob.initTouchValue.y - 50, 2)) / 50;
    }
    /**
   * convertKnobValue
   * 
   * Converts constrained knob inner value to outer value.
   * 
   * @param {Number} innerValue 
   * @returns 
   */ function convertKnobValue(innerValue) {
        if (innerValue > knob.knobMax) {
            innerValue = knob.knobMax;
        } else if (innerValue < knob.knobMin) {
            innerValue = knob.knobMin;
        }
        return {
            innerValue,
            value: Math.floor((innerValue - knob.knobMin) * ((maxValue - minValue) / (knob.knobMax - knob.knobMin))) + minValue
        };
    }
    /**
   * convertValueKnob
   * 
   * Converts knob outer value to constrained inner value.
   * 
   * @param {Number} innerValue 
   * @returns 
   */ function convertValueKnob(value) {
        let result = (value - minValue) / ((maxValue - minValue) / (knobMax - knobMin)) + knobMin;
        return result < knobMin ? knobMin : result > knobMax ? knobMax : result;
    }
    /**
   * onKnobKey
   * 
   * Keyboard accessibility event handler
   * 
   * @param {React.SyntheticEvent} e 
   */ function onKnobKey(e) {
        let multiplier;
        switch(e.key){
            case "ArrowUp":
            case "ArrowRight":
                e.preventDefault();
                e.stopPropagation();
                multiplier = 1.01;
                break;
            case "ArrowDown":
            case "ArrowLeft":
                e.preventDefault();
                e.stopPropagation();
                multiplier = 0.99;
                break;
            default:
                break;
        }
        let val = convertKnobValue(knob.innerValue * multiplier);
        if (!isNaN(multiplier)) {
            setKnob((knob)=>{
                return {
                    ...knob,
                    innerValue: val.innerValue,
                    value: val.value
                };
            });
            onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Event$2f$FauxEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FauxEvent"])(name, val.value));
        }
    }
    function onValueChange(value) {
        setKnob((k)=>{
            return {
                ...k,
                ...value
            };
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$useTouch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTouchRef"])({
        touchActive: knob.active,
        ref: knobRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 100 100",
        className: `knob ${className}`,
        style: {
            cursor: knob.active ? 'grabbing' : 'grab'
        },
        ref: knobRef,
        onPointerEnter: (e)=>{
            if (!knob.active) {
                onValueChange({
                    hoverInactive: true
                });
            }
        },
        onPointerLeave: (e)=>{
            onValueChange({
                hoverInactive: false
            });
            if (knob.active) {
                onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Event$2f$FauxEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FauxEvent"])(name, knob.value));
            }
        },
        onPointerDown: (e)=>{
            e.nativeEvent.preventDefault();
            knobRef.current.setPointerCapture(e.nativeEvent.pointerId);
            const rect = e.currentTarget.getBoundingClientRect();
            // Local coordinates inside the element’s box, scaled to 0–100
            const offset = {
                x: (e.clientX - rect.left) / rect.width * 100,
                y: (e.clientY - rect.top) / rect.height * 100
            };
            setKnob((knob)=>{
                return {
                    ...knob,
                    initTouchValue: offset
                };
            });
            onValueChange({
                refValue: {
                    x: offset.x,
                    y: offset.y
                },
                active: true,
                hoverInactive: false
            });
        },
        onPointerUp: (e)=>{
            onValueChange({
                active: false,
                hoverInactive: true
            });
            onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Event$2f$FauxEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FauxEvent"])(name, knob.value));
        },
        onPointerMove: (e)=>{
            if (!knob.active) {
                return;
            }
            onValueChange({
                hoverInactive: false
            });
            let knobValue;
            const rect = e.currentTarget.getBoundingClientRect();
            // Local coordinates inside the element’s box, scaled to 0–100
            const offset = {
                x: (e.clientX - rect.left) / rect.width * 100,
                y: (e.clientY - rect.top) / rect.height * 100
            };
            let quad = getKnobQuadrant(offset);
            let velocity = {
                x: offset.x - knob.refValue.x,
                y: offset.y - knob.refValue.y,
                xDominant: false
            };
            let knobMultiplier = getKnobMultiplier(offset);
            let multiplier = 1.17 * Math.pow(Math.min(1.5, knobMultiplier), 2.5);
            // console.log(`multiplier: ${multiplier}, knobMultiplier: ${knobMultiplier}`);
            if (Math.abs(velocity.x) > Math.abs(velocity.y)) {
                velocity.xDominant = true;
            } else if (Math.abs(velocity.x) === Math.abs(velocity.y)) {
                velocity.y = 1.5 * velocity.y;
            }
            switch(quad){
                case 2:
                    velocity.x = -1 * velocity.x;
                    break;
                case 3:
                    velocity = {
                        ...velocity,
                        x: -1 * velocity.x,
                        y: -1 * velocity.y
                    };
                    break;
                case 4:
                    velocity.y = -1 * velocity.y;
                    break;
                default:
                    break;
            }
            ;
            if (velocity.xDominant) {
                knobValue = convertKnobValue(knob.innerValue + multiplier * velocity.x);
            } else {
                knobValue = convertKnobValue(knob.innerValue + multiplier * velocity.y);
            }
            setKnob((knob)=>{
                return {
                    ...knob,
                    innerValue: knobValue.innerValue,
                    value: knobValue.value,
                    refValue: {
                        x: offset.x,
                        y: offset.y
                    }
                };
            });
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                stroke: "#ffffff00",
                pointerEvents: "all",
                strokeWidth: "0.5vh",
                fill: "#ffffff00",
                r: r + 7,
                cy: cy,
                cx: cx
            }, void 0, false, {
                fileName: "[project]/src/app/components/UX/Knob/Knob.js",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                stroke: "black",
                pointerEvents: "none",
                strokeWidth: "0.5vh",
                fill: styleFunc.knob(knob.value, knob.active ? "green" : "WHITE"),
                r: r - 7,
                cy: cy,
                cx: cx
            }, void 0, false, {
                fileName: "[project]/src/app/components/UX/Knob/Knob.js",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
                height: "100",
                width: "100",
                pointerEvents: 'none',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "knobLabel",
                        style: {
                            width: 0,
                            height: 0
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UX/Knob/Knob.js",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "roundedBorderLeft"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UX/Knob/Knob.js",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "roundedBorderRight"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UX/Knob/Knob.js",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dialValue",
                        children: knob ? knob.value : ""
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UX/Knob/Knob.js",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text",
                        style: {
                            textAlign: knob.side,
                            paddingTop: 'calc(' + knob.innerValue + 'px)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            tabIndex: 0,
                            onKeyDown: (e)=>{
                                onKnobKey(e);
                            },
                            style: styleFunc.handle(knob.value, {
                                background: knob.active ? 'red' : knob.hoverInactive ? 'green' : handleColor ? handleColor : 'black'
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/UX/Knob/Knob.js",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UX/Knob/Knob.js",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/UX/Knob/Knob.js",
                lineNumber: 252,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/UX/Knob/Knob.js",
        lineNumber: 153,
        columnNumber: 5
    }, this);
} //Knob
;
}),
"[project]/src/app/components/UX/controller.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "controllerSetDuration",
    ()=>controllerSetDuration,
    "controllerSetFont",
    ()=>controllerSetFont,
    "controllerSetGrid",
    ()=>controllerSetGrid,
    "controllerSetPaper",
    ()=>controllerSetPaper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Util/input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$Knob$2f$Knob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/UX/Knob/Knob.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Util/Grid/Grid.js [app-ssr] (ecmascript)");
;
;
;
;
// Controllers
//-----------------------------------------------------------------------------/
//  Knobs and other input elements 
//  
//  (used as part of pipe filters)
//
/**
 * controllerSetDuration
 * 
 * @param {*} onOptionChange 
 * @returns 
 */ function controllerSetDuration(onOptionChange) {
    return [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ControlSetInitializer"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$Knob$2f$Knob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Knob"], {
                name: "duration",
                minValue: 10,
                maxValue: 300,
                label: "Burn Duration",
                className: "controlBorder",
                onChange: onOptionChange,
                defaultValue: "30"
            }, "duration", false, {
                fileName: "[project]/src/app/components/UX/controller.js",
                lineNumber: 19,
                columnNumber: 45
            }, this)
        }, "duration", false, {
            fileName: "[project]/src/app/components/UX/controller.js",
            lineNumber: 19,
            columnNumber: 5
        }, this)
    ];
} //controllerSetDuration
/**
 * controllerSetPaper
 * @callback controllerSet
 * @param {*} onOptionChange 
 * @returns 
 */ function controllerSetPaper(onOptionChange) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ControlSetInitializer"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$Knob$2f$Knob$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Knob"], {
                name: "opacity",
                minValue: 0,
                maxValue: 255,
                defaultValue: 98,
                label: "Paper Opacity",
                onChange: onOptionChange,
                styleProps: (value)=>{
                    return {
                        knob: (val, style)=>{
                            return '#ffffff' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(val);
                        },
                        handle: (value, style)=>{
                            return style;
                        }
                    };
                },
                handleColor: 'white'
            }, "opacity", false, {
                fileName: "[project]/src/app/components/UX/controller.js",
                lineNumber: 35,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                name: "bgColor",
                className: "colorChooser controlBorder",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Paper Color:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UX/controller.js",
                        lineNumber: 45,
                        columnNumber: 84
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "bgColor",
                        type: "color",
                        defaultValue: "#dfae9f",
                        onChange: onOptionChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UX/controller.js",
                        lineNumber: 45,
                        columnNumber: 103
                    }, this)
                ]
            }, "bgColor", true, {
                fileName: "[project]/src/app/components/UX/controller.js",
                lineNumber: 45,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                name: "color",
                className: "colorChooser controlBorder",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Text Color:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UX/controller.js",
                        lineNumber: 46,
                        columnNumber: 80
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "color",
                        type: "color",
                        defaultValue: "#080808",
                        onChange: onOptionChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UX/controller.js",
                        lineNumber: 46,
                        columnNumber: 98
                    }, this)
                ]
            }, "color", true, {
                fileName: "[project]/src/app/components/UX/controller.js",
                lineNumber: 46,
                columnNumber: 5
            }, this)
        ]
    }, "paperControl", false, {
        fileName: "[project]/src/app/components/UX/controller.js",
        lineNumber: 34,
        columnNumber: 10
    }, this);
} //controllerSetPaper
/**
 * controllerSetGrid
 * @callback controllerSetRender
 * @param {*} onOptionChange 
 * @returns 
 */ function controllerSetGrid(onOptionChange) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GridSizeControl"], {
        className: "controlBorder",
        onChange: (e)=>onOptionChange(e, true),
        defaultSize: {
            y: 2,
            x: 2
        }
    }, void 0, false, {
        fileName: "[project]/src/app/components/UX/controller.js",
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
/**
* controllerSetGrid
* @callback controllerSetRender
* @param {*} onOptionChange 
* @returns 
*/ function controllerSetFont(onOptionChange) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ControlSetInitializer"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            name: "fontSize",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Font Size:"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/UX/controller.js",
                    lineNumber: 67,
                    columnNumber: 75
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    name: "fontSize",
                    type: "number",
                    min: 1,
                    max: 10,
                    defaultValue: 2,
                    onChange: onOptionChange
                }, void 0, false, {
                    fileName: "[project]/src/app/components/UX/controller.js",
                    lineNumber: 67,
                    columnNumber: 92
                }, this)
            ]
        }, "fontSize", true, {
            fileName: "[project]/src/app/components/UX/controller.js",
            lineNumber: 67,
            columnNumber: 33
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/UX/controller.js",
        lineNumber: 67,
        columnNumber: 10
    }, this);
}
;
}),
"[project]/src/app/components/Util/filter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterSet",
    ()=>filterSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Filter$2f$PipeFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Util/Filter/PipeFilter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Util/input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Parse$2f$ElementParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Util/Parse/ElementParser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$controller$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/UX/controller.js [app-ssr] (ecmascript)");
;
;
;
;
;
/**
 * filterSet
 * 
 * @param {*} onFilterChange 
 * @returns 
 */ function filterSet(onFilterChange) {
    return [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Filter$2f$PipeFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Filter"], {
            content: (value, state, acc)=>{
                if (!value) value = 'eg: Farewell Twitter https://images.gr-assets.com/authors/1718224641p5/15042371.jpg';
                let content = acc; //Array.isArray(acc) ? acc : [];//acc || [];
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Parse$2f$ElementParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseParagraphs"])(value, content, {
                    img: true
                })) {
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Parse$2f$ElementParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseSpans"])(value, content, {
                        img: true
                    })) {
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Parse$2f$ElementParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseImages"])(value, content, {
                            img: true
                        })) {
                            content.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: value
                            }, Math.random().toString(16) + content.length, false, {
                                fileName: "[project]/src/app/components/Util/filter.js",
                                lineNumber: 21,
                                columnNumber: 28
                            }, void 0));
                        }
                    }
                }
                return content;
            }
        }, "textParsing", false, {
            fileName: "[project]/src/app/components/Util/filter.js",
            lineNumber: 14,
            columnNumber: 5
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Filter$2f$PipeFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Filter"], {
            name: "grid",
            event: (value, state, acc)=>{
                if (state && (state.xLength || state.yLength)) {
                    let newGridOptions = {
                        data: [],
                        option: {}
                    };
                    if (state.xLength && !isNaN(state.xLength.value)) {
                        newGridOptions.option.xLength = state.xLength.value;
                    }
                    if (state.yLength && !isNaN(state.yLength.value)) {
                        newGridOptions.option.yLength = state.yLength.value;
                    }
                    return {
                        newGrid: {
                            ...newGridOptions.option
                        }
                    };
                } else {
                    return {
                        ...state,
                        value: value
                    };
                }
            },
            onFilterChange: onFilterChange,
            controllerSet: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$controller$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["controllerSetGrid"]
        }, "grid", false, {
            fileName: "[project]/src/app/components/Util/filter.js",
            lineNumber: 28,
            columnNumber: 5
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Filter$2f$PipeFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Filter"], {
            name: "duration",
            style: (value, state, acc)=>{
                if (!isNaN(state.duration.value)) {
                    return {
                        animationLetter: `letterAnim ${state.duration.value}s cubic-bezier(1, 0.3, 0, 1.02) 0s normal forwards`,
                        animationSmoke: `smokeAnim ${state.duration.value}s cubic-bezier(.14,.73,.96,.09) 0s normal forwards`,
                        animationFire: `flameAnim ${state.duration.value}s cubic-bezier(.14,.73,.96,.09) 0s normal forwards`
                    };
                } else return {};
            },
            onFilterChange: onFilterChange,
            controllerSet: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$controller$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["controllerSetDuration"]
        }, "fireEffect", false, {
            fileName: "[project]/src/app/components/Util/filter.js",
            lineNumber: 48,
            columnNumber: 5
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Filter$2f$PipeFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Filter"], {
            name: "pos",
            style: (value, acc)=>{
                let rotate = Math.floor(Math.random() * 40) * (Math.floor(Math.random() * 100) % 2 === 0 ? -1 : 1);
                return {
                    transform: `rotate(${rotate}deg)`
                };
            },
            onFilterChange: onFilterChange
        }, "gridPosition", false, {
            fileName: "[project]/src/app/components/Util/filter.js",
            lineNumber: 62,
            columnNumber: 5
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Filter$2f$PipeFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Filter"], {
            name: "paperEffect",
            style: (value, state, acc)=>{
                if (!state) {
                    state = {
                        opacity: {
                            value: 210
                        },
                        bgColor: {
                            value: '#cdae9f'
                        },
                        color: {
                            value: '#080808'
                        }
                    };
                }
                let backgroundColor, color;
                if (state.bgColor.value) {
                    backgroundColor = state.bgColor.value;
                    if (state.opacity && !isNaN(state.opacity.value)) {
                        backgroundColor += (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(state.opacity.value);
                    }
                } else {
                    backgroundColor = '#eeeeeedd';
                }
                if (state.color) {
                    color = state.color.value;
                }
                let item = {
                    backgroundColor,
                    color
                };
                return {
                    ...item
                };
            },
            onFilterChange: onFilterChange,
            controllerSet: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$controller$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["controllerSetPaper"]
        }, "paperEffect", false, {
            fileName: "[project]/src/app/components/Util/filter.js",
            lineNumber: 69,
            columnNumber: 5
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Filter$2f$PipeFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Filter"], {
            name: "fontSize",
            style: (value, state, acc)=>{
                let a = {
                    fontSize: (state?.fontSize?.value || 6) + 'em'
                };
                return state ? {
                    burningElement: {
                        ...state.burningElement || {},
                        ...a
                    }
                } : {
                    burningElement: {
                        ...a
                    }
                };
            },
            onFilterChange: onFilterChange,
            controllerSet: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$controller$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["controllerSetFont"]
        }, "fontSize", false, {
            fileName: "[project]/src/app/components/Util/filter.js",
            lineNumber: 96,
            columnNumber: 5
        }, this)
    ];
} //filterSet
;
}),
"[project]/src/app/components/UX/input.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * inputElement
 * 
 * @param {string} inputState 
 * @param {*} onChange 
 * @returns 
 */ __turbopack_context__.s([
    "inputElement",
    ()=>inputElement,
    "submitElement",
    ()=>submitElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const inputElement = (inputState = '', onChange)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            placeholder: "eg: Farewell Twitter https://images.gr-assets.com/authors/1718224641p5/15042371.jpg",
            onChange: onChange,
            value: inputState
        }, "inputTextarea", false, {
            fileName: "[project]/src/app/components/UX/input.js",
            lineNumber: 10,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, "inputText", false, {
        fileName: "[project]/src/app/components/UX/input.js",
        lineNumber: 9,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
function submitElement(onSubmitInput) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        name: "submitInput",
        onClick: onSubmitInput,
        type: "submit",
        children: "Burn It"
    }, void 0, false, {
        fileName: "[project]/src/app/components/UX/input.js",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
;
}),
"[project]/src/app/components/UX/Input/MixedInputForm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MixedInputForm",
    ()=>MixedInputForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
/**
 * GridForm
 * 
 * Input is cleared on every submission.  The input preview 
 * remains accessible, however, allowing for multiple submissions
 * of the "previous" value.
 * 
 * @typedef {{inputData: *, inputPreview: *}} GridInputState
 * @typedef {{type:string, value: React.SyntheticEvent}} GridInput
 * 
 * @param {{
 *   input: {type: string, value: React.SyntheticEvent}
 * }} props
 * @returns {React.ComponentElement}
 * 
 * @param {React.JSXElementConstructor} props.submit 
 * @param {React.JSXElementConstructor} props.onSubmit 
 */ function MixedInputForm({ inputElement, submitElement, onSubmit }) {
    const [inputState, inputDispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(onSetInput, {
        inputData: "",
        inputPreview: ""
    });
    const { inputData, inputPreview } = inputState;
    /**
   * onSetInput
   * 
   * Reducer for input state (data + preview)
   * 
   * @param{GridInputState} inputState - input state
   * @param {GridInput} input - input type and update event
   * @returns {GridInputState} input state after update
   */ function onSetInput(inputState, input) {
        let result = {};
        switch(input.type){
            case "input":
                result = {
                    inputData: input.value.target.value,
                    inputPreview: input.value.target.value
                };
                break;
            case "submit":
                result = {
                    inputData: input.value.target.value,
                    inputPreview: inputState.inputPreview
                };
                break;
            default:
                result = {
                    inputData: inputState.inputData,
                    inputPreview: inputState.inputPreview
                };
                break;
        }
        return result;
    }
    /**
   * _onSubmit
   * 
   * @param {React.SyntheticEvent} e 
   */ function _onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        inputDispatch({
            value: e,
            type: "submit"
        });
        onSubmit(inputPreview);
    }
    /**
   * _onInput
   * 
   * @param {React.SyntheticEvent} e 
   */ function _onInput(e) {
        inputDispatch({
            value: e,
            type: "input"
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        children: [
            inputElement(inputData, _onInput),
            submitElement(_onSubmit)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/UX/Input/MixedInputForm.js",
        lineNumber: 77,
        columnNumber: 5
    }, this);
} //GridForm
;
}),
"[project]/src/app/components/Element/GridWrapper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GridWrapper",
    ()=>GridWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Util/Grid/Grid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Filter$2f$PipeFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Util/Filter/PipeFilter.js [app-ssr] (ecmascript)");
//------views-----------------------------------------------------------------//
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Element$2f$ElementView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Element/ElementView.js [app-ssr] (ecmascript)");
//------callbacks-------------------------------------------------------------//
// grid state  reducer
//
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Util/grid.js [app-ssr] (ecmascript)");
//
// (filters, some with UI elements, controlling styles, events, & content)
//
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Util/filter.js [app-ssr] (ecmascript)");
// input/submit elements
//
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/UX/input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$Input$2f$MixedInputForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/UX/Input/MixedInputForm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Context$2f$GridContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Context/GridContext.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
//   return (
//     <div className={`details ${isOpen ? "openManually" : ""}`}>
//       <summary onClick={toggleOpen}>{summary}</summary>
//       <div className="content">{children}</div>
//     </div>
//   );
// }
function InputArchitecture({ onSubmit }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleOpen = (e)=>{
        e.preventDefault();
        setIsOpen((prev)=>!prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
        open: true,
        className: `details ${isOpen ? "openManually" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                onClick: (e)=>{
                    toggleOpen(e);
                },
                children: "Submit/Options"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Element/GridWrapper.js",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Filter$2f$PipeFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionPipe"], {
                input: (onSubmitToPipe)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$Input$2f$MixedInputForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MixedInputForm"], {
                        inputElement: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inputElement"],
                        submitElement: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$UX$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["submitElement"],
                        onSubmit: onSubmitToPipe
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Element/GridWrapper.js",
                        lineNumber: 45,
                        columnNumber: 21
                    }, void 0),
                filterSet: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$filter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterSet"],
                onOutput: onSubmit
            }, void 0, false, {
                fileName: "[project]/src/app/components/Element/GridWrapper.js",
                lineNumber: 43,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Element/GridWrapper.js",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
//------static functions-------------------------------------------------------//
function GridWrapper() {
    const gridElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Context$2f$GridContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGridRef"])();
    /**
     *
     * @param {import('./Element/ElementView').BurningItem[]} gridData
     * @returns
     */ const burningElement = (gridData)=>{
        if (!gridElement) {
            return null;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Element$2f$ElementView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementView"], {
            data: gridData,
            parent: gridElement
        }, void 0, false, {
            fileName: "[project]/src/app/components/Element/GridWrapper.js",
            lineNumber: 71,
            columnNumber: 13
        }, this);
    };
    /**
     * inputForm
    *
    * @param {*} onSubmitToGrid
    * @returns
    */ const inputForm = (onSubmitToGrid)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InputArchitecture, {
            onSubmit: onSubmitToGrid
        }, void 0, false, {
            fileName: "[project]/src/app/components/Element/GridWrapper.js",
            lineNumber: 81,
            columnNumber: 16
        }, this);
    } //inputForm
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "Grid-reducer-holder",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Grid"], {
            optionData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gridOptionData"],
            onSetGrid: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Util$2f$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSetGrid"],
            form: inputForm,
            children: burningElement
        }, void 0, false, {
            fileName: "[project]/src/app/components/Element/GridWrapper.js",
            lineNumber: 86,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Element/GridWrapper.js",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
;
}),
];

//# sourceMappingURL=src_app_components_f5b8506a._.js.map