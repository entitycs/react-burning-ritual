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

    const [knob, setKnob] = useState(
        {
            side: 'right',  // which side of hemisphere knob is pointing
                            // (left|right|both(not yet implemented))
            innerValue: 50, // knob raw value
            prevValue: 50,  // knob raw value (no use for this yet)
            knobMax: 85,    // max raw value
            knobMin: 25,    // min raw value
            value: defaultValue,    // computed value
            active: false,  // knob is active (adjustable)
            hoverInactive: false // knob inactive but hovered over
        });

    const [styleFunc, ] = useState(styleProps || {
        knob: (value,style) =>{ return  style},
        handle: (value,style) =>{ return style}
    })

    function checkKnobValue(innerValue){
      if (innerValue > knob.knobMax){
        innerValue = knob.knobMax;
      }
      else if(innerValue < knob.knobMin){
        innerValue = knob.knobMin;
      }
      return {innerValue, value: convertKnobValue(innerValue)};
    }

    function convertKnobValue(innerValue){
      return Math.floor((innerValue - knob.knobMin) 
            
      // y = ((X - B)*(Vd/Kd)) + F ->| y - F = (X - B) * (Vd/Kd)  ->|  (y - F)/(Vd/Kd) = (X - B)  ->|  (y - F)/(Vd/Kd) + B = X

                   * ((maxValue - minValue) / (knob.knobMax - knob.knobMin))) 
                   + minValue 
    }

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
      let val = checkKnobValue(knob.innerValue * multiplier); 
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
          onValueChange({active: true, hoverInactive: false});
        }
      }
      onMouseUp={(e) => {
          onValueChange({active: false, hoverInactive: true});
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
          offset = checkKnobValue(offset).innerValue;

          setKnob((knob) => {
            // convert knob range to value range
            let value = convertKnobValue(offset);

            return {
                ...knob, 
                innerValue: offset, 
                prevValue: knob.innerValue, 
                value
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
                paddingTop: 'calc(' + (knob.innerValue) + 'px - 3vh)'
                // transition: 'padding-top 0.2s cubic-bezier(0, 0.98, 0.58, 1) 0s'
              }
            }>
              
              <p tabIndex={0} 
                  onKeyDown={(e) => {
                    console.log("key", e, knob.innerValue);
                    onKnobKey(e);
                  }} onClick={() => console.log("p click") } style={styleFunc.handle(knob.value, {background: knob.active ? 'red' : knob.hoverInactive ? 'green' : handleColor ? handleColor : 'black'})}></p>
            </div>
          </foreignObject>
      </svg>
    );
}//Knob

export {Knob}