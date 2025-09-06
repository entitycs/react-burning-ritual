"use client";
import { useEffect } from 'react';

/** useTouchRef
 * 
 * Prevents screen panning on touchscreen device while interacting with element
 * 
 * @param {bool} touchActive - true if element touch
 * @param {useRef} ref - useRef object (assumed assigned as element ref prop)
 */
function useTouchRef({ touchActive, ref }) {
  useEffect(() => {
    const onTouchMove = (e) => { if (touchActive) { e.preventDefault(); e.stopPropagation() } };
    const onTouchStart = onTouchMove;
    if (ref) {
      ref.current.addEventListener("touchmove", onTouchMove, { passive: false });
      ref.current.addEventListener("touchstart", onTouchStart, { passive: false });
    }
    // React docs suggest using copy for cleanup function as original ref object may be unreferencable
    const refTarget = { ...ref || {} }

    return () => {
      if (refTarget) {
        refTarget.current.removeEventListener("touchmove", onTouchMove);
        refTarget.current.removeEventListener("touchstart", onTouchStart);
      }
    }
  }, [touchActive, ref])
}

export { useTouchRef }