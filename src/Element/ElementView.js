import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const smokeAnimClass="engulfing";
const fireAnimClass="engulfingSlow";
const letterAnimClass="engulfingFast";
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
 function ElementView({data, parent}){ 
    const [domEl,] = useState(document.createElement('div'));
    const [thisParent, setParent] = useState(parent);
    useEffect(()=>{
      let target = document.getElementById('gridCollection');
      if (thisParent !== target && target !== null){
        target.appendChild(domEl);
        setParent((p) => {target.appendChild(domEl); return target});
      }
      return () => {
        try{
          if(thisParent){
            thisParent.removeChild(domEl);
          }
        }catch(DOMException){
        console.log("portal child already deleted");
        }
      }
    },[thisParent,domEl])
  
    return  (data && data.length) ?
    ReactDOM.createPortal(
      data.map(
        (item)=> (<span key={"" + item.key} className="burningItem" style={
        {
          position: item.style.position, 
          top:item.style.bottom + 'vh', 
          left: item.style.left + 'vw',
          transform: item.style.transform,
        }
      }>
      <div className={'itemContent container ' + (letterAnimClass || '') } style={
        {
          backgroundColor: item.style.backgroundColor,
          color: item.style.color,
          animation: item.style.animationLetter,
        }
      }>
        {item.content}
      </div>
      <span className={"flicker "}>  
        <div className={"red flame " + fireAnimClass} style={{animation:item.style.animationFire}}></div>
        <div className={"orange flame " + fireAnimClass} style={{animation:item.style.animationFire}}></div>
        <div className={"yellow flame " + fireAnimClass} style={{animation:item.style.animationFire}}></div>
        <div className={"white flame " + fireAnimClass} style={{animation:item.style.animationFire}}></div>
      </span>
      <div className={"smoke " + smokeAnimClass} style={{animation: item.style.animationSmoke}}>
        <span  className="s0"></span>
        <span  className="s1"></span>
        <span  className="s2"></span>
        <span  className="s3"></span>
        <span  className="s4"></span>
        <span  className="s5"></span>
        <span  className="s6"></span>
        <span  className="s7"></span>
        <span  className="s8"></span>
        <span  className="s9"></span>
      </div>
      </span>)
       ) 
       , thisParent
    ): (<p className={"welcome"}>Nothing burning.<br/>Open the Submit/Options section below to get started.</p>);
  }
  
export {ElementView};