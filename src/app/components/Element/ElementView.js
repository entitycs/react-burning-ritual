"use client";;
import React, { useState, useEffect } from 'react';
import { createPortal } from "react-dom";

import { BurningElement } from './BurningElement';

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

  useEffect(() => {
    let target = document.getElementById('gridCollection');
    if (thisParent !== target && target !== null) {
      target.appendChild(domEl);
      setParent((p) => { target.appendChild(domEl); return target });
    }
    if (thisParent) {
      thisParent.appendChild(domEl);
    }
    return () => {
      thisParent?.removeChild(domEl);
    };
  }, [thisParent, domEl])

  return (data && data.length)
    ? createPortal(data.map((item) => (<BurningElement key={item.key} burningItem={item} />)), thisParent)
    : (<p className={"welcome"}>Nothing burning.<br />Open the Submit/Options section below to get started.</p>);
}

export { ElementView };