import React, { useEffect } from "react";
import * as S from "./PageTransition.styles";
import { AnimationDefinition, useAnimationControls } from "framer-motion";
import BeratGencLogo from "../Icons/BeratGencLogo";

interface PTProps {
  onAnimationComplete: (e: AnimationDefinition) => void;
  isAnimating: boolean;
}

const PageTransition = ({ onAnimationComplete, isAnimating }: PTProps) => {
  const controls = useAnimationControls();
  const scaleControls = useAnimationControls();
  useEffect(() => {
    controls.start({
      opacity: isAnimating ? 1 : 0,
      transition: { duration: 1.2, ease: "anticipate" },
    });
    scaleControls.start({
      scaleY: isAnimating ? 1 : 0,
      transition: { duration: 0.4, delay: 0.1, ease: "anticipate" },
    });
  }, [isAnimating]);

  return (
    <S.Container animate={controls} onAnimationComplete={onAnimationComplete}>
      <S.InnerContainer>
        <S.TransitioningOverlay animate={scaleControls} />
      </S.InnerContainer>
    </S.Container>
  );
};

export default PageTransition;
