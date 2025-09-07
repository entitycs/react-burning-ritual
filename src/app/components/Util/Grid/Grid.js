"use client";
import React, { useReducer } from 'react';
import './Grid.css';

// const _gridMax = 6;

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
 */
function Grid({ optionData, form, onSetGrid, children }) {

  function checkSize(x, y) {
    if (x + y < 2) {
      throw new Error('Invalid Grid size; must be >= 1');
    }
  }

  // let onSetGrid prop dispatch grid state, using optionData for initial state
  //  
  const [gridState, gridDispatch] = useReducer(
    onSetGrid,
    {
      gridData: optionData.data,
      gridKey: _gridKey(optionData.option.xLength, optionData.option.yLength),
      gridOptions: optionData
    }
  );

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
    let grid = [];
    let keyId = 0;
    let xMult = 100 / lenX;//rem
    let yMult = 100 / lenY;//rem
    for (var y = 0; y < lenY; y++) {
      let gridRow = [];
      for (var x = 0; x < lenX; x++) {
        gridRow.push({
          keyId: keyId,
          top: y * yMult,//lenY
          left: x * xMult,//lenX
          occupants: [] // may change from array to single value in near future
        });
        keyId++;
      }
      grid.push(gridRow);
    }// endfor

    return grid;
  };// gridKey()

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
        item.event.newGrid = _gridKey(
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