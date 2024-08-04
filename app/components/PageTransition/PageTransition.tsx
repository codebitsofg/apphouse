import { AnimationDefinition, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import * as S from "./PageTransition.styles";

interface PTProps {
  onAnimationComplete: (e: AnimationDefinition) => void;
  isAnimating: boolean;
}

const PageTransition = ({ onAnimationComplete, isAnimating }: PTProps) => {
  const controls = useAnimationControls();
  const scaleControls = useAnimationControls();
  useEffect(() => {
    const startAnimations = async () => {
      if (isAnimating) {
        await controls.start({
          opacity: 1,
          transition: { duration: 0.1, ease: "anticipate" },
        });
        controls.start({
          scaleY: 1,
          transition: { duration: 0.8, ease: "anticipate" },
        });
        await scaleControls.start({
          scaleY: 1,
          transition: { duration: 1.2, delay: 0.3, ease: "anticipate" },
        });
      } else {
        controls.stop();
        scaleControls.stop();
        await controls.start({
          opacity: 0,
          scaleY: 0,
          transition: { duration: 0 },
        });
        await scaleControls.start({
          scaleY: 0,
          transition: { duration: 0 },
        });
      }
    };

    startAnimations();
  }, [isAnimating, controls, scaleControls]);

  return (
    <S.Container animate={controls}>
      <S.InnerContainer>
        <S.TransitioningOverlay
          onAnimationComplete={onAnimationComplete}
          animate={scaleControls}
        />
      </S.InnerContainer>
    </S.Container>
  );
};

export default PageTransition;
