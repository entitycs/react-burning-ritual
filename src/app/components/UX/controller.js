import { ControlSetInitializer, numberToHex } from '../Util/input';
import { Knob } from './Knob/Knob';
import { GridSizeControl } from '../UX/Grid/GridSizeControl';

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
 */
function controllerSetDuration(onOptionChange) {
  return [
    <ControlSetInitializer key={"duration"}><Knob
      key={"duration"} name={"duration"} minValue={10} maxValue={300} label={"Burn Duration"}
      className={"controlBorder"} onChange={onOptionChange} defaultValue={"30"}
    /></ControlSetInitializer>
  ]
}//controllerSetDuration

/**
 * controllerSetPaper
 * @callback controllerSet
 * @param {*} onOptionChange 
 * @returns 
 */
function controllerSetPaper(onOptionChange) {

  return <ControlSetInitializer key={"paperControl"}>{[
    <Knob
      key={"opacity"} name={"opacity"} minValue={0} maxValue={255} defaultValue={98} label={"Paper Opacity"}
      onChange={onOptionChange} styleProps={(value) => {
        return {
          knob: (val, style) => { return '#ffffff' + numberToHex(val) },
          handle: (value, style) => { return style }
        }
      }}
      handleColor={'white'}
    />,
    <label key={"bgColor"} name={"bgColor"} className="colorChooser controlBorder"><p>Paper Color:</p><input name={"bgColor"} type="color" defaultValue={"#dfae9f"} onChange={onOptionChange} /></label>,
    <label key={"color"} name={"color"} className="colorChooser controlBorder"><p>Text Color:</p><input name={"color"} type="color" defaultValue={"#080808"} onChange={onOptionChange} /></label>,
  ]}</ControlSetInitializer>
}//controllerSetPaper

/**
 * controllerSetGrid
 * @callback controllerSetRender
 * @param {*} onOptionChange 
 * @returns 
 */
function controllerSetGrid(onOptionChange) {
  return <GridSizeControl className={"controlBorder"} onChange={(e) => onOptionChange(e, true)} defaultSize={{ y: 2, x: 2 }} />
}

/**
* controllerSetGrid
* @callback controllerSetRender
* @param {*} onOptionChange 
* @returns 
*/
function controllerSetFont(onOptionChange) {
  return <ControlSetInitializer><label key={"fontSize"} name={"fontSize"}><p>Font Size:</p><input name={"fontSize"} type="number" min={1} max={10} defaultValue={2} onChange={onOptionChange} /></label></ControlSetInitializer>
}

//--end-controllers------------------------------------------------------------/

export { controllerSetDuration, controllerSetGrid, controllerSetPaper, controllerSetFont };