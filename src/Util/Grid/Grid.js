import React, {useReducer, useEffect, useState, useCallback} from 'react';
import {FauxEvent} from '../../Event/FauxEvent';
import './Grid.css';

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
 */
function Grid({optionData, form, onSetGrid, children}){

  function checkSize(x,y){
    if (x + y < 2){
      throw new Error('Invalid Grid size; must be >= 1');
    }
  }
  
  // let onSetGrid prop dispatch grid state, using optionData for initial state
  //  
  const [gridState, gridDispatch] = useReducer(
      onSetGrid,
      {
        gridData:  optionData.data,
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
  function _gridKey (lenX, lenY) {
    checkSize(lenY, lenX);
    let grid = [];
    let keyId = 0;
    let xMult = 100/lenX;//rem
    let yMult = 100/lenY;//rem
    for(var y = 0; y < lenY; y++){
      let gridRow = [];
      for(var x = 0; x < lenX; x++){
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
  function submitToGrid (item) {
    if (! item){
      return;
    }
    if (item.event){
      if (item.event.newGrid){
        let eventSize = item.event.newGrid;
        item.event.newGrid = _gridKey(
          eventSize.xLength ? eventSize.xLength : gridState.gridKey[0].length, 
          eventSize.yLength ? eventSize.yLength : gridState.gridKey.length, 
          );
      }
    }
    gridDispatch({...item});
  }//submitToGrid

  return (
    <span>
    {form(submitToGrid)}
    {children(gridState.gridData)}
    </span>
  )
}// Grid


/**
 * 
 * @param {*} param0 
 * @returns 
 */
function GridSizeControl({onChange, className, defaultSize}){

  const [size, setSize] = useState(defaultSize);
  const maxGrid = (() => {
    let grid = [];
    for (var i = 1; i <= _gridMax; i++){
      grid.push(i);
    }
    return grid;
  })();

  const onChangeMemo = useCallback((e) => onChange(e), [onChange]);

  /**
   * onLocalChange
   * 
   * @param {string} name 
   * @param {React.SyntheticEvent} e 
   */
  function onLocalChange(e){
    let value = Number(e.target.value);
    if (e.target.name === 'yLength'){
      setSize((s) => {return{...s, y: Math.abs(value) % (_gridMax + 1)}});
    }else if (e.target.name === 'xLength'){
      setSize((s) => {return{...s, x: Math.abs(value) % (_gridMax + 1)}})
    }
    return onChangeMemo(e);
  }

  useEffect(()=>{
    const changer = (e) => {
      const value = Number(e.target.value);
      if (e.target.name === 'yLength'){
        setSize((s) => {return{...s, y: Math.abs(value) % (_gridMax + 1)}});
      }else if (e.target.name === 'xLength'){
        setSize((s) => {return{...s, x: Math.abs(value) % (_gridMax + 1)}})
      }
      return onChangeMemo(e);
    }
    changer(FauxEvent('yLength', defaultSize.y));
    changer(FauxEvent('xLength', defaultSize.x));
  }, [defaultSize, onChangeMemo]);

  return [
    <label key={"gridSizer"} className={`gridSize ${className}`}>
      <p>Grid Size:</p>
      <span className="sliderVertical" >
      <input name={"yLength"} key={"yLength"} type="range" min={1} max={_gridMax} step={1} value={size.y} onChange={onLocalChange} list="tickmarks"
        style={{width:(2 + _gridMax) + 'vh'}}/>
      </span>
      <span className="sliderHorizontal" >
        <section className={"t123"} style={{width:_gridMax.toString() + 'vh', height:_gridMax.toString() + 'vh'}}>
          {maxGrid.map(n => maxGrid.map(m => 
            <div 
              key={(_gridMax * (n - 1) + (m - 1)).toString()} 
              className={"gridOptSignifier " + (size.x >= m && size.y >= n ? '' : 'oob')} >
            </div>
          ))}
        </section>
      <input name={"xLength"} key={"xLength"} type="range" min={1} max={_gridMax} step={1} value={size.x} onChange={onLocalChange} list="tickmarks"
      style={{width:(2 + _gridMax) + 'vh'}}/>
      </span>
      <datalist id="tickmarks">
          {(maxGrid.map(n => (<option key={n.toString()} value={n} />)))}
        </datalist>
    </label>,
  ]
}//GridSizeControl

export {Grid, GridSizeControl};