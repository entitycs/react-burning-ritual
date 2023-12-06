import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BurningElement } from './BurningElement';

/**
 * 
 * @typedef{{content:React.ReactElement[], 
 *   style:CSSStyleRule, 
 *   event:{Object}} BurningItem Singular Burning Ceremony element data submission.
 * @param - okay
 * @property {React.ReactElement} content
 */

/**
 * ElementView
 * 
 * @param {{
 *   data:BurningItem[],
 *   parent:React.DOMElement|undefined
 * }} props
 * @param {CSSStyleRule} data.style
 * @param {React.DOMElement|undefined} parent 
 * @returns {React.FunctionComponentElement} ElementView
 */
function ElementView({ data, parent }) {

  const [domEl,] = useState(document.createElement('div'));
  const [thisParent, setParent] = useState(parent);
  // Update the current position if mouse is down

  useEffect(() => {
    let target = document.getElementById('gridCollection');
    if (thisParent !== target && target !== null) {
      target.appendChild(domEl);
      setParent((p) => { target.appendChild(domEl); return target });
    }
    return () => {
      try {
        if (thisParent) {
          thisParent.removeChild(domEl);
        }
      } catch (DOMException) {
        console.log("portal child already deleted");
      }
    }
  }, [thisParent, domEl])

  return (data && data.length)
    ? ReactDOM.createPortal(data.map((item) => (<BurningElement key={item.key} burningItem={item} />)), thisParent)
    : (<p className={"welcome"}>Nothing burning.<br />Open the Submit/Options section below to get started.</p>);
}

export { ElementView };