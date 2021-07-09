import { useCallback, useEffect, useRef, useState } from "react";
import { makeLinearCurve } from "../utils/interpolations";

type UseAnimatedState = (
  initialValue: number
) => [
  number,
  (newValue: number, duration: number) => void,
  (newValue: number) => void
];
const useAnimatedState: UseAnimatedState = initialValue => {
  const [state, setState] = useState(initialValue);
  const stateRef = useRef(state);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);
  const raf = useRef(0);

  const setImmediately = useCallback((target: number) => {
    cancelAnimationFrame(raf.current);
    console.log(`setting... ${target}`);
    setState(target);
  }, []);

  const setAnimated = useCallback((target: number, duration: number) => {
    const curve = makeLinearCurve({
      values: [stateRef.current, target],
      duration,
    });
    const start = performance.now();
    const animate = () => {
      const now = performance.now();
      const dt = now - start;

      const [newValue, complete] = curve(dt);

      setState(newValue);

      if (!complete) {
        raf.current = requestAnimationFrame(animate);
      }
    };
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(animate);
  }, []);

  return [state, setAnimated, setImmediately];
};

export default useAnimatedState;
