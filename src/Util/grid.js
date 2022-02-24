const gridOptionData = {data: [], option: {xLength: 4, yLength: 3}};

/**
 * onSetGrid
 * 
 * acts as a reducer for grid state
 * 
 * @param {*} gridState contains grid positional keys, grid elements, and grid options
 * @param {*} itemAdded 
 * @returns 
 */
 function onSetGrid (gridState, itemAdded) {
    if (!itemAdded)
      return gridState;
  
    let newGridKey, newGridData, gridLengthX, gridLengthY;
  
    if(itemAdded.event){
      if(itemAdded.event.newGrid){
        newGridKey = itemAdded.event.newGrid;
        newGridData = [];
        gridLengthY = itemAdded.event.newGrid.length;
        gridLengthX = itemAdded.event.newGrid[0].length;
      }
    }
    newGridKey = newGridKey || [...gridState.gridKey];
    newGridData = newGridData || [...gridState.gridData];
    gridLengthY = gridLengthY || gridState.gridOptions.option.yLength;
    gridLengthX = gridLengthX || gridState.gridOptions.option.xLength;
  
    let gridLength = gridLengthY * gridLengthX;
    let gridRandStart = newGridData.length ? newGridData[newGridData.length - 1].key : Math.floor(Math.random() * gridLength);
    
    // check this 'fix' for single-item grid, when published / outside of strict mode
    gridRandStart = isNaN(gridRandStart) ? 0 : gridRandStart;
    let addIndex = gridRandStart;
    let addY, addX, gridAtKey;
    
    do{
      addIndex = (addIndex + 1) % gridLength;
      addY = Math.floor(addIndex / gridLengthX);
      addX = addIndex % gridLengthX;
      gridAtKey = newGridKey[addY][addX];
      if (0 === gridAtKey.occupants.length){
        // console.log('found space');
        break;
      }
    }while (addIndex !== gridRandStart);
  
    if (addIndex === gridRandStart){
      addIndex = (addIndex + 1) % gridLength;
      addY = Math.floor(addIndex/gridLengthX);
      addX = addIndex % gridLengthX;
      gridAtKey = newGridKey[addY][addX];
      newGridKey[addY][addX].occupants = [];
      newGridData = newGridData.filter(k => k.key !== gridAtKey.keyId);
      // item replaced
    }
    itemAdded.key = gridAtKey.keyId;
  
    // check this 'fix' for single-item grid, when published / outside of strict mode
    if (gridRandStart === 0 && gridLength === 1){
      //
      // For a single element grid, we change the key, from 0 to a random string,
      // which will create overflow in our grid collection, expanding the number
      // of elements to be greater than the (keyed) grid size.  This works from
      // a UX perspective, but we must constrain this overflow or face eventual
      // performance decline.  Note that for all other grid sizes > 1, this
      // overflow is not allowed, and keys must fall into the current grid index 
      // range.
      //
      itemAdded.key = Math.random().toString(16);
    }
    itemAdded.style.position = 'absolute';
    itemAdded.style.bottom = gridAtKey.top;
    itemAdded.style.left = gridAtKey.left;
    if (itemAdded.event){
      delete(itemAdded.event);
    }
    // in case of singular element grid size, constrain the number of grid elements
    if(newGridData.length > 25){
      newGridData.shift();
    }
    try{
      newGridKey[addY][addX].occupants.push(itemAdded.key);
      newGridData.push(itemAdded);
    }catch(e){
      console.log(newGridKey,"index", e.message);
    };
    return {gridData: newGridData, gridKey: newGridKey, gridOptions:{data:[], option:{xLength:gridLengthX, yLength: gridLengthY}}}
  }//onSetGrid
  
  export {onSetGrid, gridOptionData};