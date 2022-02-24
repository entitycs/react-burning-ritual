import React, { useEffect } from 'react';
import { FauxEvent } from '../../Event/FauxEvent';

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
 */
 function useInitializer(children){
    useEffect(() => {
        if (children){
          React.Children.toArray(children).forEach((child) => {
            if (child.type === 'label'){
              if (child.props.children){
                React.Children.toArray(child.props.children).forEach((c) => {
                  if (c.props){
                    if (c.props.onChange){
                      c.props.onChange(FauxEvent(c.props.name, c.props.defaultValue || c.props.value));
                    }
                  }
                })
              }
            }else if (child.props && child.props.onChange){
              child.props.onChange(FauxEvent(child.props.name, child.props.defaultValue || child.props.value))
            }
          });
        }
    }, [children]);
  }//useInitializer
  
  /**
   * ControlSetInitializer
   * 
   * Simple Component with useInitializer effect applied
   * 
   * @param {...React.ReactElement} children
   * @returns 
   */
  function ControlSetInitializer({children}){
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
   */
  function numberToHex(input){
    if (isNaN(input)){
      throw new Error(`Invalid input (Number expected). Received ${input}.`)
    }
    if (input === undefined || input === null){
      input = 255;
    }
    let result = input.toString(16);
    if (result === ''){
      return '00';
    }
    while (result.length < 2){
      result = '0' + result;
    }
    return result;
  }//numberToHex
  
  export {useInitializer, ControlSetInitializer, numberToHex};