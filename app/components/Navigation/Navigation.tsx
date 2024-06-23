import React from "react";
import * as S from "./Navigation.styles";
import AboutMeIcon from "../Icons/AboutMeIcon";
import useStore from "@/app/store/useStore";
import GitIcon from "../Icons/GitIcon";
import GlobeIcon from "../Icons/GlobeIcon";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import LinkedinLogo from "../Icons/LinkedinLogo";
import ChangeModeIcon from "../Icons/ChangeModeIcon";
import { Mode } from "@/utils/types/app.types";

interface NavigationProps {
  onAboutMeClick: () => void;
  hasNavigated: boolean;
  shouldShowLinks: boolean;
  onModeSwitch: (mode?: Mode) => void;
}

const Navigation = ({
  onAboutMeClick,
  hasNavigated,
  shouldShowLinks,
  onModeSwitch,
}: NavigationProps) => {
  const { onHoverStartStore, onHoverEndStore, links } = useStore();

  const props = {
    onHoverStart: onHoverStartStore,
    onHoverEnd: onHoverEndStore,
    isDark: hasNavigated,
  };

  return (
    <S.Container layout>
      <AnimatePresence key={"lkeyyy"} mode="popLayout">
        {shouldShowLinks && (
          <S.LinkContainer layout key={"theddkey"}>
            <S.Link href={links.repo}>
              <S.TabItemContainer {...props}>
                <S.TabText>
                  <GitIcon /> Code
                </S.TabText>
              </S.TabItemContainer>
            </S.Link>

            <S.Link href={links.live}>
              <S.TabItemContainer {...props}>
                <S.TabText>
                  <GlobeIcon />
                  Live
                </S.TabText>
              </S.TabItemContainer>
            </S.Link>
          </S.LinkContainer>
        )}
      </AnimatePresence>

      <S.TabItemContainer {...props} layout onClick={onAboutMeClick}>
        <S.TabText>
          <AboutMeIcon isDark={true} />
          About
        </S.TabText>
      </S.TabItemContainer>
      <S.TabItemContainer {...props} layout onClick={() => onModeSwitch()}>
        <S.TabText>
          <ChangeModeIcon /> Mode
        </S.TabText>
      </S.TabItemContainer>
    </S.Container>
  );
};

export default Navigation;
