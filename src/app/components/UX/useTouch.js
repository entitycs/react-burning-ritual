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
    const onTouchMove = (e) => { console.log("onTouchMove"); if (touchActive) { e.preventDefault(); e.stopPropagation() } };
    const onTouchStart = onTouchMove;
    if (ref?.current) {
      ref.current.addEventListener("touchmove", onTouchMove, { passive: false });
      ref.current.addEventListener("touchstart", onTouchStart, { passive: false });
    }
    // const originalTouchAction = ref.current.style.touchAction;
    // ref.current.style.touchAction = 'none';

    // React docs suggest using copy for cleanup function as original ref object may be unreferencable
    const target = ref?.current;
    return () => {
      if (target) {
        target.removeEventListener("touchmove", onTouchMove);
        target.removeEventListener("touchstart", onTouchStart);
        // target.style.touchAction = originalTouchAction;
      }
    };
  }, [touchActive, ref])
}

export { useTouchRef }