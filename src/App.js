
import React, { useCallback } from 'react';
import cozyFire from './cozyfire.jpg';
import './App.css';

//------architectural components------/
import {Grid,GridForm} from './Util/Grid/Grid';
import {OptionPipe} from './Util/Filter/PipeFilter';
import {Boundary} from './Error/Boundary';

//------views-----------------------------------------------------------------//

import {ElementView} from './Element/ElementView';

//------callbacks-------------------------------------------------------------//

// grid state  reducer
//
import {onSetGrid, gridOptionData} from './Util/grid';

// element production filter set
//
// (filters, some with UI elements, controlling styles, events, & content)
//
import {filterSet} from './Util/filter';

// input/submit elements
//
import {inputElement, submitElement} from './UX/input';

//------static functions-------------------------------------------------------//
// (defined here as they are expected rarely require updates)
/**
 * 
 * @param {import('./Element/ElementView').BurningItem[]} gridData 
 * @returns 
 */
 function burningElement(gridData){
  return <ElementView data={gridData} parent={document.getElementById('gridCollection')} />
}

function initializedInput(inputState, onChange){
  return inputElement(inputState, onChange)
}
function GridFormInput({onSubmit}){
  return <GridForm
    input={initializedInput}
    submit={submitElement}
    onSubmit={onSubmit} 
  />
}
function onInput (onSubmitToPipe){
  return (<GridFormInput onSubmit={onSubmitToPipe} />);
}
function InputArchitecture({onSubmit}){
  const onSubmitMemo = useCallback((s) => {console.log("sssss",s); return onSubmit(s)}, [onSubmit]);
  return (
    <details>
      <summary>Submit/Options</summary>
    <OptionPipe 
      input={onInput}
      filterSet={allFilters}
      onOutput={onSubmitMemo} 
    />
    </details>
    ); 
}
// /**
//  * inputForm
//  * 
//  * @param {*} onSubmitToGrid 
//  * @returns 
//  */
//  function inputForm(onSubmitToGrid){
//   return <InputArchitecture onSubmit={onSubmitToGrid} />
// }//inputForm

function allFilters(onFilterChange){
  return filterSet(onFilterChange);
}

/**
 * inputForm
 * 
 * @param {*} onSubmitToGrid 
 * @returns 
 */
 function inputForm(onSubmitToGrid){
  return (<InputArchitecture onSubmit={onSubmitToGrid} />);
  // <details>
  //   <summary>Submit/Options</summary>
  // <OptionPipe 
  //   input={(onSubmitToPipe) => 
  //     <GridForm
  //       input={initializedInput}
  //       submit={submitElement}
  //       onSubmit={onSubmitToPipe} 
  //     />
  //   }
  //   filterSet={allFilters}
  //   onOutput={onSubmitToGrid} 
  // />
  // </details>
  // ); 
}//inputForm

/**
 * 
 * @returns {React.FunctionComponentElement}
 */
function App() {

  return (
    <div className="App" style={{backgroundImage:cozyFire}}>
      <header className="App-header">
        <div>
          <span id="gridCollection"></span>
          <Boundary>
          <Grid optionData={gridOptionData} onSetGrid={onSetGrid} form={inputForm}>
            {burningElement}
          </Grid>
          </Boundary>
        </div>
      </header>
    </div>
  );
}

export default App;