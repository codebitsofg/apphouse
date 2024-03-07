import React from "react";
import * as S from "./Navigation.styles";
import AboutMeIcon from "../Icons/AboutMeIcon";
import useStore from "@/app/store/useStore";
import GitIcon from "../Icons/GitIcon";
import GlobeIcon from "../Icons/GlobeIcon";
import { AnimatePresence } from "framer-motion";

interface NavigationProps {
  onAboutMeClick: () => void;
  hasNavigated: boolean;
  shouldShowLinks: boolean;
}

const Navigation = ({
  onAboutMeClick,
  hasNavigated,
  shouldShowLinks,
}: NavigationProps) => {
  const { onHoverStartStore, onHoverEndStore, links } = useStore();

  const props = {
    onHoverStart: onHoverStartStore,
    onHoverEnd: onHoverEndStore,
    isDark: hasNavigated,
  };

  return (
    <S.Container>
      <AnimatePresence>
        {shouldShowLinks && (
          <S.LinkContainer>
            <S.Link href={links.repo}>
              <S.TabItemContainer {...props}>
                <GitIcon />
                <S.TabName>Code</S.TabName>
              </S.TabItemContainer>
            </S.Link>

            <S.Link href={links.live}>
              <S.TabItemContainer {...props}>
                <GlobeIcon />
                <S.TabName>Live</S.TabName>
              </S.TabItemContainer>
            </S.Link>
          </S.LinkContainer>
        )}
      </AnimatePresence>

      <S.TabItemContainer {...props} onClick={onAboutMeClick}>
        <AboutMeIcon isDark={hasNavigated} />
        <S.TabName>Me</S.TabName>
      </S.TabItemContainer>
    </S.Container>
  );
};

export default Navigation;
