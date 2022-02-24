import React, { useState } from 'react';

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
 */
function Filter({name, style, event, content, controllerSet, onFilterChange}){

/**
 * Assign the project to an employee.
 * @param {React.SyntheticEvent} e - onChange event (or FauxEvent)
 * @param {string} e.target.value - updated value.
 * @param {string} e.target.name - name of controller with update.
 */
    function onChange(e, once = false){
      let result = {};
      result[e.target.name] = {value: e.target.value, once};
      onFilterChange(result);
    }
  
    return (
        (controllerSet) ? controllerSet(onChange) : ""
    );
  }// Filter
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
 */
function OptionPipe({filterSet, input, onOutput}){

  const [valueState, setValueState] = useState({});
  const [filter, ] = useState(filterSet(onUpdateFilterSet));

  /**
   * onSubmitToPipe
   * 
   * @param {*} value 
   */
  function onSubmitToPipe(value){

    let element = {
      style: filter.reduce((acc, f) => (
        f && f.props.style ? {...acc, ...f.props.style(value, valueState, acc)} : acc
      ), {}),
      event: filter.reduce((acc, f) => (
        f && f.props.event ? {...acc, ...f.props.event(value, valueState, acc)} : acc
      ), {}),
      content: filter.reduce((acc, f) => (
        f && f.props.content ? f.props.content(value, valueState, acc) : acc
      ), ""),
    }
    onOutput(element);

    // clear out (one-time) events.  This is allowed so that, for example, we do not attempt
    // re-building a Grid component on every grid element update render after a grid resizing event.
    setValueState((s) => {
      Object.keys(s).forEach((stateValueKey) => {
        if (s[stateValueKey].once){
          delete (s[stateValueKey]);
        }
      });
      return {...s};
    })
  }// onSubmitToPipe

  
  /**
   * onUpdateFilterSet
   * 
   * @param {FilterControlValue} controllerValue - object containing keyed controller value.
   * @param {string} controllerValue.FilterControlName - the controller name.
   * @param {*} controllerValue.FilterControlName.value - the controller value.
   * @param {boolean} controllerValue.FilterControlName.once - if true, controller state is removed from filter after first use.
   */
  function onUpdateFilterSet(controllerValue){
    setValueState((s) => { 
      return {...s, ...controllerValue};
    })
  }

  return (
    <span id="textInpupt" className="filterUI">
      {input(onSubmitToPipe)}
      {filter}
    </span>
  );
}//OptionPipe


  export {OptionPipe, Filter};