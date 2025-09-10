"use client";
import './Grid.css';
import React, { useReducer } from 'react';
import { onSetGrid, gridOptionData } from "../grid";

const gridKeyCache = new Map();
/**
 * gridKey
 * 
 * Sets the grid keys and positions based on grid size
 * 
 * @param {number} lenX 
 * @param {number} lenY 
 * @returns {GridKey} Metadata for each grid item slot
 */
function _gridKey(lenX, lenY) {
  checkSize(lenY, lenX);
  const grid = [];
  let keyId = 0;
  const xMult = 100 / lenX; // rem
  const yMult = 100 / lenY; // rem

  for (let y = 0; y < lenY; y++) {
    const row = Array.from({ length: lenX }, (_, x) => ({
      keyId: keyId++,
      top: y * yMult,
      left: x * xMult,
      occupants: []
    }));
    grid.push(row);
  }

  return grid;
}
function checkSize(x, y) {
  if (x + y < 2) {
    throw new Error('Invalid Grid size; must be >= 1x1');
  }
}

function memoizedKey(lenX, lenY) {
  const key = `${lenX},${lenY}`;
  if (gridKeyCache.has(key)) {
    return gridKeyCache.get(key);
  }
  const result = _gridKey(lenX, lenY);
  gridKeyCache.set(key, result);
  return result;
}
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
 *   children: React.JSXElementConstructor,
 * }} props
 * @returns {React.ReactComponentElement} Grid
 * 
 * @param {React.JSXElementConstructor} props.form - for element for submissions to grid.
 * @param {React.JSXElementConstructor} props.children - grid item elements.
 */
function Grid({ form, children }) {


  // let onSetGrid prop dispatch grid state, using gridOptionData for initial state
  //  
  const [gridState, gridDispatch] = useReducer(
    onSetGrid,
    {
      gridData: gridOptionData.data,
      gridKey: _gridKey(gridOptionData.option.xLength, gridOptionData.option.yLength),
      gridOptions: gridOptionData
    }
  );


  /**
   * submitToGrid
   * 
   * Sends item to grid state dispatching function after checking for 
   * and if necessary setting up a new grid sizing event attached to 
   * item.event.
   * 
   * @param {Object} item 
   */
  function submitToGrid(item) {
    if (!item) {
      return;
    }
    if (item.event) {
      if (item.event.newGrid) {
        let eventSize = item.event.newGrid;
        item.event.newGrid = memoizedKey(
          eventSize.xLength ? eventSize.xLength : gridState.gridKey[0].length,
          eventSize.yLength ? eventSize.yLength : gridState.gridKey.length,
        );
      }
    }
    gridDispatch({ ...item });
  }//submitToGrid

  return (
    <span className="Grid-reducer">
      {children(gridState.gridData)}
      {form(submitToGrid)}
    </span>
  )
}// Grid




export { Grid };