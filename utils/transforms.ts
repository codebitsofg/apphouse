import { clamp } from "./clamp";
import {
  SetPanPosition,
  SetStartPos,
  SetTransform,
  StartPos,
} from "./app.types";

export const handleTouchMove = (
  event: TouchEvent,
  ...params: [boolean, SetPanPosition, StartPos, number, number, SetStartPos]
) => {
  const [isDragging, setPanPosition, startPos, width, height, setStartPos] =
    params;

  if (!isDragging) return;

  const touch = event.touches[0];
  const deltaX = touch.clientX - startPos.x;
  const deltaY = touch.clientY - startPos.y;

  const xPos = touch.clientX;
  const yPos = touch.clientY;

  setPanPosition((prevPos) => ({
    xtransform: clamp(prevPos.xtransform + deltaX, -width * 0.5, 20),
    ytransform: clamp(prevPos.ytransform + deltaY, -height, 20),
    xPercent: (xPos / window.innerWidth) * 100,
    yPercent: (yPos / window.innerHeight) * 100,
  }));

  setStartPos({ x: touch.clientX, y: touch.clientY });
};

export const handleMouseMove = (
  e: MouseEvent,
  ...params: [number, number, SetTransform]
) => {
  const [offsetHeight, offsetWidth, setTransform] = params;

  const xPos = e.clientX;
  const yPos = e.clientY;

  const xDecimal = xPos / window.innerWidth;
  const yDecimal = yPos / window.innerHeight;

  const panX = offsetWidth * xDecimal * 0.5;
  const panY = offsetHeight * yDecimal * 1;

  setTransform({
    xtransform: -panX + 200,
    ytransform: -panY,
    xPercent: (xPos / window.innerWidth) * 100,
    yPercent: (yPos / window.innerHeight) * 100,
  });
};
