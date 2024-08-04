import React, { useState } from "react";
import * as S from "./Navigation.styles";
import useStore from "@/app/store/useStore";
import { AnimatePresence } from "framer-motion";
import { Mode } from "@/utils/types/app.types";
import Link from "next/link";
import useIsMobile from "@/app/hooks/useIsMobile";

interface NavigationProps {
  onAboutMeClick: () => void;
  onModeSwitch: (mode?: Mode) => void;
  isDark: boolean;
}

const Navigation = ({
  onAboutMeClick,
  onModeSwitch,
  isDark,
}: NavigationProps) => {
  const { onHoverStartStore, onHoverEndStore, links } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const props = {
    onHoverStart: onHoverStartStore,
    onHoverEnd: onHoverEndStore,
  };

  return (
    <>
      <S.Container layout>
        <S.HamburgerButton isDark={isDark} onClick={toggleMenu}>
          <S.Bar isOpen={isOpen} />
          <S.Bar isOpen={isOpen} />
          <S.Bar isOpen={isOpen} />
        </S.HamburgerButton>
      </S.Container>

      <AnimatePresence>
        {isOpen && (
          <S.Wrapper>
            <S.InnerContainer>
              <S.NavItem
                onClick={() => {
                  onAboutMeClick(), setIsOpen(false);
                }}
              >
                <S.NavNumber>01</S.NavNumber>
                <S.NavName>About</S.NavName>
              </S.NavItem>
              {!isMobile && (
                <S.NavItem
                  onClick={() => {
                    onModeSwitch(), setIsOpen(false);
                  }}
                >
                  <S.NavNumber>02</S.NavNumber>
                  <S.NavName>Mode</S.NavName>
                </S.NavItem>
              )}

              <S.Details>
                <S.MailContainer>
                  <S.MiniItem>beratgenc.dev@gmail.com</S.MiniItem>
                  <S.MiniItem>+905530460739</S.MiniItem>
                </S.MailContainer>
                <S.MailContainer>
                  <Link href={"https://www.linkedin.com/in/gencberat"}>
                    <S.MiniItem>LINKEDIN</S.MiniItem>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://medium.com/@beratgenc.dev"
                  >
                    <S.MiniItem>MEDIUM</S.MiniItem>
                  </Link>
                  <Link target="_blank" href="https://github.com/soberbat">
                    <S.MiniItem>GITHUB</S.MiniItem>
                  </Link>
                </S.MailContainer>
              </S.Details>
            </S.InnerContainer>
          </S.Wrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

{
  /* <S.Container layout>
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
</S.Container> */
}
