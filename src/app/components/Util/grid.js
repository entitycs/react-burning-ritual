const gridOptionData = { data: [], current: { x: 0, y: 0 }, option: { xLength: 1, yLength: 1 } };

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
  } while (addIndex !== gridRandStart);

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
 * onSetGrid
 * 
 * acts as a reducer for grid state
 * 
 * @param {*} gridState contains grid positional keys, grid elements, and grid options
 * @param {*} itemAdded 
 * @returns 
 */
function onSetGrid(gridState, itemAdded) {
  if (!itemAdded)
    return gridState;

  let newGridKey, newGridData, gridLengthX, gridLengthY;

  if (itemAdded.event) { // controller event annotated item in filter function
    if (itemAdded.event.newGrid) {// assumes grid size checked
      newGridKey = itemAdded.event.newGrid;
      newGridData = [];
      gridLengthY = itemAdded.event.newGrid.length;
      gridLengthX = itemAdded.event.newGrid[0].length;
      // console.log("newGridKey", gridLengthY * gridLengthX);
    }
  }
  newGridKey = newGridKey || [...gridState.gridKey];
  newGridData = newGridData || [...gridState.gridData];
  gridLengthY = gridLengthY || gridState.gridOptions.option.yLength;
  gridLengthX = gridLengthX || gridState.gridOptions.option.xLength;

  let g = { ...gridState };
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
    newGridData = newGridData.filter(k => k.key !== gridAtKey.keyId);
  }
  itemAdded.style.position = 'absolute';//move to filter
  itemAdded.style.bottom = gridAtKey.top;//move to filter
  itemAdded.style.left = gridAtKey.left;//move to filter
  itemAdded.key = addIndex;
  if (itemAdded.event) {
    // delete(itemAdded.event);
    itemAdded.event = { ...itemAdded.event, key: itemAdded.key };
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
  };
  gridOptionData.current = { x: addX, y: addY };
  return { gridData: newGridData, current: { x: addX, y: addY }, gridKey: newGridKey, gridOptions: { data: [], option: { xLength: gridLengthX, yLength: gridLengthY } } }
}//onSetGrid

export { onSetGrid, gridOptionData, getNextKeyId };