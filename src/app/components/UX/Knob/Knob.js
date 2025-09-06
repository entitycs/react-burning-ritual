"use client";
import React, { useState, useRef } from 'react';
import { useTouchRef } from '../useTouch';
import { FauxEvent } from '../../Event/FauxEvent';
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
 * @param {callback} props.styleProps - ocallback for dynamic styling based on knob state
 * @param {callback} props.handleColor - ocallback for changing knob color based on knob state

 */
function Knob({ name, r = 35, cy = 50, cx = 50, minValue = 10, maxValue = 30, defaultValue = 25, label = "", onChange, className, styleProps, handleColor }) {
  const knobMax = 75;
  const knobMin = 5;
  const [knob, setKnob] = useState({
    side: 'right',  // which side of hemisphere knob is pointing
    // (left|right|both(not yet implemented))
    innerValue: convertValueKnob(defaultValue), // knob raw value
    refValue: { x: 0, y: 0 },                                // Pointerdown reference value
    knobMax,    // max raw value
    knobMin,    // min raw value
    value: defaultValue,    // computed value
    active: false,  // knob is active (adjustable)
    hoverInactive: false, // knob inactive but hovered over
    initTouchValue: { x: 0, y: 0 }
  });
  const knobRef = useRef(null);

  const [styleFunc,] = useState(styleProps || {
    knob: (value, style) => { return style },
    handle: (value, style) => { return style }
  });

  /* using quadrants to calculate relative velocity delta */
  function getKnobQuadrant(offset) {
    console.log("offsets: x: " + offset.x + " y: " + offset.y);
    let quad = 1; //topright, botright, botleft, topleft
    if (offset.y >= 50)
      if (offset.x >= 50)
        quad = 2;
      else quad = 3;
    else if (offset.x < 50)
      quad = 4;
    console.log("quad: " + quad);
    return quad;
  }

  /**
   * 
   * @param {x,y coords} offset 
   * @returns 
   */
  function getKnobMultiplier(offset) {
    return Math.sqrt(
      Math.pow(knob.initTouchValue.x - 50, 2) +
      Math.pow(knob.initTouchValue.y - 50, 2)
    ) / 50;
  }

  /**
   * convertKnobValue
   * 
   * Converts constrained knob inner value to outer value.
   * 
   * @param {Number} innerValue 
   * @returns 
   */
  function convertKnobValue(innerValue) {
    if (innerValue > knob.knobMax) {
      innerValue = knob.knobMax;
    }
    else if (innerValue < knob.knobMin) {
      innerValue = knob.knobMin;
    }
    return {
      innerValue,
      value: Math.floor((innerValue - knob.knobMin)
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
  function convertValueKnob(value) {
    let result = (value - minValue) / ((maxValue - minValue) / (knobMax - knobMin)) + knobMin;
    return result < knobMin ? knobMin : (result > knobMax ? knobMax : result);
  }

  /**
   * onKnobKey
   * 
   * Keyboard accessibility event handler
   * 
   * @param {React.SyntheticEvent} e 
   */
  function onKnobKey(e) {
    let multiplier;
    switch (e.key) {
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
    if (!isNaN(multiplier)) {
      setKnob((knob) => {
        return { ...knob, innerValue: val.innerValue, value: val.value }
      });
      onChange(FauxEvent(name, val.value));
    }
  }

  function onValueChange(value) {
    setKnob((k) => {
      return { ...k, ...value };
    });
  }

  useTouchRef({ touchActive: knob.active, ref: knobRef });

  return (
    <svg viewBox="0 0 100 100"
      className={`knob ${className}`}
      style={{ cursor: knob.active ? 'grabbing' : 'grab' }}
      ref={knobRef}

      onPointerEnter={(e) => {
        if (!knob.active) {
          onValueChange({ hoverInactive: true });
        }
      }}

      onPointerLeave={(e) => {
        onValueChange({ hoverInactive: false });
        if (knob.active) {
          onChange(FauxEvent(name, knob.value));
        }
      }}

      onPointerDown={(e) => {
        e.nativeEvent.preventDefault();
        knobRef.current.setPointerCapture(e.nativeEvent.pointerId);
        const rect = e.currentTarget.getBoundingClientRect();

        // Local coordinates inside the element’s box, scaled to 0–100
        const offset = {
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        };
        setKnob((knob) => {
          return { ...knob, initTouchValue: offset }
        });
        onValueChange({ refValue: { x: offset.x, y: offset.y }, active: true, hoverInactive: false });
      }}

      onPointerUp={(e) => {
        onValueChange({ active: false, hoverInactive: true });
        onChange(FauxEvent(name, knob.value));
      }}

      onPointerMove={(e) => {
        if (!knob.active) {
          return;
        }

        onValueChange({ hoverInactive: false });

        let knobValue;
        const rect = e.currentTarget.getBoundingClientRect();

        // Local coordinates inside the element’s box, scaled to 0–100
        const offset = {
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        };

        let quad = getKnobQuadrant(offset);
        let velocity = { x: offset.x - knob.refValue.x, y: offset.y - knob.refValue.y, xDominant: false };
        let knobMultiplier = getKnobMultiplier(offset);
        let multiplier = 1.17 * Math.pow(Math.min(1.5, knobMultiplier), 2.5);

        // console.log(`multiplier: ${multiplier}, knobMultiplier: ${knobMultiplier}`);
        if (Math.abs(velocity.x) > Math.abs(velocity.y)) {
          velocity.xDominant = true;
        }
        else if (Math.abs(velocity.x) === Math.abs(velocity.y)) {
          velocity.y = 1.5 * velocity.y;
        }
        switch (quad) {
          case 2:
            velocity.x = -1 * velocity.x;
            break;
          case 3:
            velocity = { ...velocity, x: -1 * velocity.x, y: -1 * velocity.y };
            break;
          case 4:
            velocity.y = -1 * velocity.y;
            break;
          default: break;
        };

        if (velocity.xDominant) {
          knobValue = convertKnobValue(knob.innerValue + multiplier * velocity.x);
        }
        else {
          knobValue = convertKnobValue(knob.innerValue + multiplier * velocity.y);
        }

        setKnob((knob) => {
          return {
            ...knob,
            innerValue: knobValue.innerValue,
            value: knobValue.value,
            refValue: { x: offset.x, y: offset.y }
          }
        });
      }}
    >
      <circle stroke="#ffffff00" pointerEvents="all" strokeWidth="0.5vh" fill="#ffffff00" r={r + 7} cy={cy} cx={cx} />
      <circle stroke="black" pointerEvents="none" strokeWidth="0.5vh" fill={styleFunc.knob(knob.value, knob.active ? "green" : "WHITE")} r={r - 7} cy={cy} cx={cx}></circle>
      <foreignObject height='100' width='100' pointerEvents={'none'}>
        <p className="knobLabel" style={{ width: 0, height: 0 }}>{label}</p>
        <div className="roundedBorderLeft"></div>
        <div className="roundedBorderRight"></div>
        <div className="dialValue">{knob ? knob.value : ""}</div>
        <div className="text" style={
          {
            textAlign: knob.side,
            paddingTop: 'calc(' + (knob.innerValue) + 'px)'
          }
        }>
          <p tabIndex={0}
            onKeyDown={(e) => {
              onKnobKey(e);
            }} style={styleFunc.handle(knob.value, { background: knob.active ? 'red' : knob.hoverInactive ? 'green' : handleColor ? handleColor : 'black' })}></p>
        </div>
      </foreignObject>
    </svg>
  );
}//Knob

export { Knob }