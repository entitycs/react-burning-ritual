
import React from 'react';
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

function InputArchitecture({onSubmit}){
  return (
    <details>
      <summary>Submit/Options</summary>
    <OptionPipe 
      input={(onSubmitToPipe) => (
        <GridForm
        input={inputElement}
        submit={submitElement}
        onSubmit={onSubmitToPipe} 
        />
      )}
      filterSet={filterSet}
      onOutput={onSubmit} 
    />
    </details>
    ); 
}

/**
 * inputForm
 * 
 * @param {*} onSubmitToGrid 
 * @returns 
 */
 function inputForm(onSubmitToGrid){
  return (<InputArchitecture onSubmit={onSubmitToGrid} />);
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