import React, { useEffect } from "react";
import * as S from "./PageTransition.styles";
import { AnimationDefinition, useAnimationControls } from "framer-motion";

interface PTProps {
  onAnimationComplete: (e: AnimationDefinition) => void;
  isAnimating: boolean;
}

const PageTransition = ({ onAnimationComplete, isAnimating }: PTProps) => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      opacity: isAnimating ? 1 : 0,
      transition: { duration: 0.6, ease: "backInOut" },
    });
  }, [isAnimating]);

  return (
    <S.Container animate={controls} onAnimationComplete={onAnimationComplete} />
  );
};

export default PageTransition;
