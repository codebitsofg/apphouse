import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import * as S from "./AboutMe.styles";
import {
  detailParagraphs,
  educationConfig,
  skills,
  workHistory,
} from "./confg";
import {
  Link,
  TabItemContainer,
  TabText,
} from "../Navigation/Navigation.styles";
import LinkedinLogo from "../Icons/LinkedinLogo";
import useStore from "@/app/store/useStore";
import GitIcon from "../Icons/GitIcon";
import Education from "../Education/Education";
import Work from "../Work/Work";
import { GoBack, TitleContainer } from "../ProjectDetail/ProjectDetail.styles";
import Lenis from "lenis";

interface AboutMeProps {
  onAboutMeClick: () => void;
}
const AboutMe = ({ onAboutMeClick }: AboutMeProps) => {
  const { onHoverStartStore, onHoverEndStore } = useStore();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const props = {
    onHoverStart: onHoverStartStore,
    onHoverEnd: onHoverEndStore,
  };

  return (
    <>
      <S.Container>
        <img width={500} src="logo.svg" alt="logo" />
        <S.CloseTabText onClick={onAboutMeClick}>Close</S.CloseTabText>
      </S.Container>

      <S.Overlay />
    </>
  );
};

export default AboutMe;
