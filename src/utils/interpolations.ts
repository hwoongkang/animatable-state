type MakeCurve = (config: {
  values: [number, number];
  duration: number;
}) => (dt: number) => [number, boolean];
export const makeLinearCurve: MakeCurve =
  ({ values: [initial, final], duration }) =>
  dt => {
    if (dt < 0) {
      return [initial, true];
    } else if (dt > duration) {
      return [final, true];
    }

    const percentage = dt / duration;

    const newValue = initial + (final - initial) * percentage;
    const diff = Math.abs(final - newValue);

    return [newValue, diff < 1e-7];
  };
