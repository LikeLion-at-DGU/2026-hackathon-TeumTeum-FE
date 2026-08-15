import { useRef, useState } from "react";

const FULL_ANGLE = 360;

const normalizeAngle = (angle) => (angle + FULL_ANGLE) % FULL_ANGLE;
const clamp = (value, minimum, maximum) =>
  Math.min(Math.max(value, minimum), maximum);

const useTimeDial = ({
  size,
  radius,
  minMinutes = 3,
  maxMinutes = 60,
  step = 5,
  initialValue = 30,
  onChange,
}) => {
  const svgRef = useRef(null);
  const activeHandleRef = useRef(null);
  const center = size / 2;

  const minimumAngle = (minMinutes / maxMinutes) * FULL_ANGLE;
  const initialEndAngle =
    (clamp(initialValue, minMinutes, maxMinutes) / maxMinutes) * FULL_ANGLE;
  const [startAngle] = useState(0);
  const [endAngle, setEndAngle] = useState(initialEndAngle);

  const angleToMinutes = (start, end) => {
    const difference = clamp(end - start, 0, FULL_ANGLE);
    const rawMinutes = (difference / FULL_ANGLE) * maxMinutes;
    return clamp(
      Math.round(rawMinutes / step) * step,
      minMinutes,
      maxMinutes,
    );
  };

  const minutes = angleToMinutes(startAngle, endAngle);

  const getPosition = (angle) => {
    const radians = ((angle - 90) * Math.PI) / 180;

    return {
      x: center + radius * Math.cos(radians),
      y: center + radius * Math.sin(radians),
    };
  };

  const getPointerAngle = (event) => {
    const rect = svgRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) * (size / rect.width) - center;
    const y = (event.clientY - rect.top) * (size / rect.height) - center;
    const angle = (Math.atan2(y, x) * 180) / Math.PI + 90;

    return normalizeAngle(angle);
  };

  const handlePointerDown = (event, handleName) => {
    if (handleName !== "end") return;

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    activeHandleRef.current = handleName;
  };

  const handlePointerMove = (event) => {
    if (!activeHandleRef.current || !svgRef.current) return;

    const pointerAngle = getPointerAngle(event);
    let nextStartAngle = startAngle;
    let nextEndAngle = endAngle;

    if (activeHandleRef.current === "end") {
      const angleDifference =
        ((pointerAngle - normalizeAngle(endAngle) + 540) % FULL_ANGLE) - 180;
      const continuousAngle = endAngle + angleDifference;
      const snappedAngle =
        Math.round(continuousAngle / (FULL_ANGLE / (maxMinutes / step))) *
        (FULL_ANGLE / (maxMinutes / step));

      nextEndAngle = clamp(
        snappedAngle,
        minimumAngle,
        FULL_ANGLE,
      );
      setEndAngle(nextEndAngle);
    }

    onChange?.(angleToMinutes(nextStartAngle, nextEndAngle));
  };

  const handlePointerEnd = (event) => {
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    activeHandleRef.current = null;
  };

  return {
    svgRef,
    minutes,
    startAngle,
    endPosition: getPosition(endAngle),
    progress: minutes / maxMinutes,
    handlePointerDown,
    handlePointerMove,
    handlePointerEnd,
  };
};

export default useTimeDial;
