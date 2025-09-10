"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useTouchRef } from '../UX/useTouch';

function BurningElement({ burningItem }) {
  const smokeAnimClass = "engulfing";
  const fireAnimClass = "engulfingSlow";
  const letterAnimClass = "engulfingFast";
  const [pressed, setPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [item, setItem] = useState({ ...burningItem });
  const dragRef = useRef(null);

  const onPointerMove = (event) => {
    if (pressed) {
      event.preventDefault();
      setPosition({
        x: position.x + 2 * event.movementX,
        y: position.y + 2 * event.movementY
      })
    }
  }

  const onPointerDown = (event) => {
    dragRef.current.setPointerCapture(event.nativeEvent.pointerId);
    setPressed(true);
  }

  useTouchRef({ touchActive: pressed, ref: dragRef });

  useEffect(() => {
    setItem((s) => burningItem);
  }, [burningItem])

  return item?.style ? (
    <span key={"" + item.key} className="burningItem"
      ref={dragRef}
      onPointerDown={onPointerDown}
      onPointerMove={pressed ? onPointerMove : (e) => { }}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      // onpointer
      style={
        {
          ...item.style.burningElement,
          position: 'absolute',//item.style.position, //move to filter
          top: item.style.bottom + 'vh',  //move to filter
          left: item.style.left + 'vw',  //move to filter
          transform: `translate(${position.x}px, ${position.y}px)`,//move to filter
        }
      }

    >
      <div className={'itemContent container ' + (letterAnimClass || '')} style={
        {
          backgroundColor: item.style.backgroundColor,
          color: item.style.color,
          animation: item.style.animationLetter,
        }
      }>
        {item.content}
      </div>
      <span className={"flicker "}>
        <div className={"red flame " + fireAnimClass} style={{ animation: item.style.animationFire }}></div>
        <div className={"orange flame " + fireAnimClass} style={{ animation: item.style.animationFire }}></div>
        <div className={"yellow flame " + fireAnimClass} style={{ animation: item.style.animationFire }}></div>
        <div className={"white flame " + fireAnimClass} style={{ animation: item.style.animationFire }}></div>
      </span>
      <div className={"smoke " + smokeAnimClass} style={{ animation: item.style.animationSmoke }}>
        <span className="s0"></span>
        <span className="s1"></span>
        <span className="s2"></span>
        <span className="s3"></span>
        <span className="s4"></span>
        <span className="s5"></span>
        <span className="s6"></span>
        <span className="s7"></span>
        <span className="s8"></span>
        <span className="s9"></span>
      </div>
    </span>) : <span></span>;
}

export { BurningElement }