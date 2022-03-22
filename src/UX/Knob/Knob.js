import React, { useState } from 'react';
import {FauxEvent} from '../../Event/FauxEvent';
import './Knob.css';

/**
 * Knob
 * 
 * A circular slider input.  Uses css property shape-outside and svg half-circle(s)
 * along with a parent element padding-top to push a knob slider 'around' the 
 * half-circle shape(s).
 * 
 * @param {Object} props - component properties.
 * @returns {React.ReactComponentElement} Knob component element
 * 
 * @param {string} props.name     - controller name
 * @param {number} props.r        - knob radius
 * @param {number} props.cy       - knob viewpoint center y
 * @param {number} props.cx       - knob viewpoint center x
 * @param {number} props.minValue - knob minimum value
 * @param {number} props.maxValue - knob maximum value
 * @param {number} props.defaultValue - knob default value
 * @param {callback} props.onChange - on value changed callback
 */
function Knob({name, r=35, cy=50, cx=50, minValue=10, maxValue=30, defaultValue=25, label="", onChange, className, styleProps, handleColor}){
    const knobMax = 75;
    const knobMin = 5;
    const [knob, setKnob] = useState({
        side: 'right',  // which side of hemisphere knob is pointing
                        // (left|right|both(not yet implemented))
        innerValue: convertValueKnob(defaultValue), // knob raw value
        prevValue: convertValueKnob(defaultValue),  // prev. knob raw value
        refValue: 0,                                // mousedown reference value
        knobMax,    // max raw value
        knobMin,    // min raw value
        value: defaultValue,    // computed value
        active: false,  // knob is active (adjustable)
        hoverInactive: false // knob inactive but hovered over
    });

    const [styleFunc, ] = useState(styleProps || {
        knob: (value,style) =>{ return  style},
        handle: (value,style) =>{ return style}
    });

    /**
     * convertKnobValue
     * 
     * Converts constrained knob inner value to outer value.
     * 
     * @param {Number} innerValue 
     * @returns 
     */
    function convertKnobValue(innerValue){
      if (innerValue > knob.knobMax){
        innerValue = knob.knobMax;
      }
      else if(innerValue < knob.knobMin){
        innerValue = knob.knobMin;
      }
      return {
        innerValue, 
        value:  Math.floor((innerValue - knob.knobMin) 
                  * ((maxValue - minValue) / (knob.knobMax - knob.knobMin))) 
                  + minValue
      };
    }

    /**
     * convertValueKnob
     * 
     * Converts knob outer value to constrained inner value.
     * 
     * @param {Number} innerValue 
     * @returns 
     */
    function convertValueKnob(value){
      let result = (value - minValue)/((maxValue - minValue) / (knobMax - knobMin)) + knobMin;
      return result < knobMin ? knobMin : (result > knobMax ? knobMax : result);
    }

    /**
     * onKnobKey
     * 
     * Keyboard accessibility event handler
     * 
     * @param {React.SyntheticEvent} e 
     */
    function onKnobKey(e){
      let multiplier;
      switch(e.key){
        case "ArrowUp":
        case "ArrowRight":
          e.preventDefault();
          e.stopPropagation();
          multiplier = 1.01;
          break;
        case "ArrowDown":
        case "ArrowLeft":
          e.preventDefault();
          e.stopPropagation();
          multiplier = 0.99;
          break;
        default: break;
      }
      let val = convertKnobValue(knob.innerValue * multiplier); 
      if (!isNaN(multiplier)){
        setKnob((knob) => {
          return {...knob, innerValue: val.innerValue, value: val.value}
        });
        onChange(FauxEvent(name, val.value));
      }
    }

    function onValueChange (value){
      setKnob((k) => {
        return {...k, ...value};
      });
    }

    return (
      <svg viewBox="0 0 100 100"
      className={`knob ${className}`}
      style={{cursor: knob.active? 'grabbing' : 'grab'}}

      onMouseEnter={(e) =>{
          if (!knob.active){
            onValueChange({hoverInactive: true});
          }
        }
      }

      onMouseLeave={(e) =>{
          onValueChange({hoverInactive: false});
          if (knob.active){
            onChange(FauxEvent(name, knob.value));
          }
        }
      }

      onMouseDown={(e)=>{
          onValueChange({refValue: e.nativeEvent.offsetY, active: true, hoverInactive: false});
        }
      }
      onMouseUp={(e) => {
          onValueChange({active: false, hoverInactive: true, prevValue: knob.innerValue});
          onChange(FauxEvent(name, knob.value));
        }
      }
     
      onMouseMove={(e)=>{ 
        if (!knob.active){
          return;
        }
        onValueChange({hoverInactive: false});

          // get mouse Y offset
          let offset = parseInt(e.nativeEvent.offsetY);

          // constrain offset to knob min/max bounds
          // & convert knob range to value range
          offset = convertKnobValue(knob.prevValue + (offset - knob.refValue));

          setKnob((knob) => {

            return {
                ...knob, 
                innerValue: offset.innerValue, 
                value: offset.value
            }
          });
        }}
      >
        <circle stroke="#ffffff00" pointerEvents="all" strokeWidth="0.5vh" fill="#ffffff00" r={r + 7} cy={cy} cx={cx} />
          <circle stroke="black" pointerEvents="none" strokeWidth="0.5vh" fill={styleFunc.knob(knob.value, knob.active? "green" : "WHITE")} r={r - 7} cy={cy} cx={cx}></circle>
          <foreignObject height='100' width='100' pointerEvents={'none'}>
            <p className="knobLabel" style={{width:0,height:0}}>{label}</p>
            <div className="roundedBorderLeft"></div>
            <div className="roundedBorderRight"></div>
            <div className="dialValue">{knob ? knob.value : "" }</div>
            <div className="text" style={
              {
                textAlign: knob.side, 
                paddingTop: 'calc(' + (knob.innerValue) + 'px)'
              }
            }>
              <p tabIndex={0} 
                  onKeyDown={(e) => {
                    onKnobKey(e);
                  }} style={styleFunc.handle(knob.value, {background: knob.active ? 'red' : knob.hoverInactive ? 'green' : handleColor ? handleColor : 'black'})}></p>
            </div>
          </foreignObject>
      </svg>
    );
}//Knob

export {Knob}