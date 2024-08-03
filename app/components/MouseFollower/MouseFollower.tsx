import React, { useState, useEffect } from "react";
import { Circle, Container } from "./MouseFollower.styles";
import useStore from "@/app/store/useStore";

const MouseFollower = () => {
  const { isHovered } = useStore();
  const [mousePosition, setMousePosition] = useState<{
    x: undefined | number;
    y: undefined | number;
  }>({ x: undefined, y: undefined });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const widthOffset = window.innerWidth / 100 / 1.5;
      const heightOffset = window.innerHeight / 100 / 1;
      setMousePosition({
        x: e.clientX - widthOffset,
        y: e.clientY - heightOffset,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    typeof mousePosition.x === "number" && (
      <Container
        animate={{
          left: mousePosition.x! + 20 ?? 0,
          top: mousePosition.y! + 20 ?? 0,
          transition: { type: "spring", damping: 30 },
        }}
      >
        <Circle isHovered={isHovered} />
      </Container>
    )
  );
};

export default MouseFollower;
