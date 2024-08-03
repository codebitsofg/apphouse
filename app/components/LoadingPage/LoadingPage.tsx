import React, { useState } from "react";
import {
  Container,
  InnerOptionContainer,
  LoadingBar,
  LoadingBarContainer,
  ModeOption,
  OptionContainer,
  Overlay,
  PreloaderText,
  Progress,
  ProgressBar,
  SecondOverlay,
  SelectModeText,
  WelcomeText,
  WelcomeTextContainer,
} from "./LoadingPage.styles";
import { Mode } from "@/utils/types/app.types";
import { AnimatePresence, useAnimationControls } from "framer-motion";

interface LoadingPageProps {
  progress: number;
  onModeClick: (mode: Mode) => void;
  onAboutMeClick: () => void;
}

const LoadingPage = ({
  progress,
  onModeClick,
  onAboutMeClick,
}: LoadingPageProps) => {
  const isPreloaded = progress === 100;
  const options = ["Gallery", "Classic"];
  const [isModeSelected, setIsModeSelected] = useState(false);

  const handleOptionClick = (option: number) => {
    setIsModeSelected(true);
    setTimeout(() => {
      onModeClick(option);
    }, 2000);
  };
  return (
    <Container>
      {!isPreloaded ? (
        <>
          <LoadingBarContainer>
            <LoadingBar>
              <ProgressBar style={{ width: `${progress}%` }} />
            </LoadingBar>
          </LoadingBarContainer>
        </>
      ) : (
        <>
          <AnimatePresence mode="wait">
            {!isModeSelected ? (
              <>
                <OptionContainer key={"242442"}>
                  <SelectModeText>
                    Select a mode to view curated projects. You can switch the
                    mode from the navigation. Try both!
                  </SelectModeText>
                  <InnerOptionContainer>
                    {options.map((mode, i) => (
                      <ModeOption
                        key={i}
                        onClick={() => handleOptionClick(i + 1)}
                      >
                        {mode}
                      </ModeOption>
                    ))}
                  </InnerOptionContainer>
                </OptionContainer>
              </>
            ) : (
              <SelectModeText key={"a"}>
                Good Choice! Let us Begin!
              </SelectModeText>
            )}
          </AnimatePresence>
        </>
      )}

      <Overlay />
      <SecondOverlay />
    </Container>
  );
};

export default LoadingPage;
