import { useSpring } from "framer-motion";
import { RefObject, useEffect, useState } from "react";
import { handleMouseMove, handleTouchMove } from "../transforms";
import {
  resolveCollectionName,
  resolveCollectionNameMobile,
} from "../resolveCollectionName";
import {
  SetPanPosition,
  SetStartPos,
  SetTransform,
  StartPos,
} from "../types/app.types";

export const MouseSpringConf = {
  damping: 15,
  stiffness: 40,
};

const initialTransform = {
  xtransform: 0,
  ytransform: 0,
  xPercent: null,
  yPercent: null,
};

const useMousePosition = (parentContainer: RefObject<HTMLDivElement>) => {
  const springX = useSpring(0, MouseSpringConf);
  const springY = useSpring(0, MouseSpringConf);
  const [isMounted, setisMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [transform, setTransform] = useState(initialTransform);
  const [panPosition, setPanPosition] = useState(initialTransform);
  const [dimensions, setdimensions] = useState({ width: 0, height: 0 });
  const [category, setCategory] = useState("");

  const onCollectionNameChange = (category: string) => setCategory(category);

  const getContainerSpecs = (container: HTMLDivElement) => {
    const { width, height } = container.getBoundingClientRect();
    const offsetWidth = container.offsetWidth;
    const offsetHeight = container.offsetHeight;

    return { width, height, offsetWidth, offsetHeight };
  };

  useEffect(() => {
    if (!isMounted) return;
    const { xtransform, ytransform, yPercent, xPercent } = transform;

    resolveCollectionName(xPercent!, yPercent!, onCollectionNameChange);

    springX.set(xtransform);
    springY.set(ytransform);
  }, [transform, isMounted]);

  useEffect(() => {
    const { xtransform, ytransform } = panPosition;

    resolveCollectionNameMobile(
      xtransform,
      ytransform,
      dimensions,
      onCollectionNameChange
    );

    springX.set(xtransform);
    springY.set(ytransform);
  }, [panPosition, dimensions, isMounted]);

  useEffect(() => {
    if (!parentContainer.current) return;
    const container = parentContainer.current!;
    const { width, height } = getContainerSpecs(container);

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      setStartPos({ x: touch.clientX, y: touch.clientY });
      setIsDragging(true);
    };

    const handleTouchEnd = () => setIsDragging(false);

    const params = [
      isDragging,
      setPanPosition,
      startPos,
      width,
      height,
      setStartPos,
    ];

    const handleMove = (e: TouchEvent) =>
      handleTouchMove(
        e,
        ...(params as [
          boolean,
          SetPanPosition,
          StartPos,
          number,
          number,
          SetStartPos
        ])
      );

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleMove);
    container.addEventListener("touchend", handleTouchEnd);
    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, startPos.x, startPos.y, parentContainer]);

  useEffect(() => {
    !isMounted && setisMounted(true);
  }, [isMounted]);

  useEffect(() => {
    if (!parentContainer.current) return;
    const container = parentContainer.current;
    const { offsetWidth, offsetHeight } = getContainerSpecs(container);
    const params = [offsetHeight, offsetWidth, setTransform];

    const handleMouseMoveWrapper = (e: MouseEvent) =>
      handleMouseMove(e, ...(params as [number, number, SetTransform]));

    container.addEventListener("mousemove", handleMouseMoveWrapper);

    return () => {
      container.removeEventListener("mousemove", handleMouseMoveWrapper);
    };
  }, [parentContainer]);

  return { springX, springY, category, isMounted, dimensions };
};

export default useMousePosition;
