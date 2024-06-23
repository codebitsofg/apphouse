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
import { TabItemContainer, TabText } from "../Navigation/Navigation.styles";
import AboutMeIcon from "../Icons/AboutMeIcon";

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
          <PreloaderText> Berat Genç | 2024 </PreloaderText>
          <Progress>{progress}</Progress>
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
                <WelcomeTextContainer>
                  <WelcomeText> Welcome Onboard! </WelcomeText>

                  <TabItemContainer onClick={onAboutMeClick}>
                    <TabText>
                      <AboutMeIcon isDark={false} />
                      About
                    </TabText>
                  </TabItemContainer>
                </WelcomeTextContainer>

                <OptionContainer key={"242442"}>
                  <SelectModeText>
                    Select A mode to view curated projects. You can switch
                    between modes from the navigation.
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
