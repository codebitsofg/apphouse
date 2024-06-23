"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, AnimationDefinition } from "framer-motion";
import { Container, LogoContainer } from "./styled";
import Gallery from "./components/Gallery/Gallery";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import Navigation from "./components/Navigation/Navigation";
import AboutMe from "./components/AboutMe/AboutMe";
import PageTransition from "./components/PageTransition/PageTransition";
import MouseFollower from "./components/MouseFollower/MouseFollower";
import projectData from "@/utils/projectData";
import useStore from "./store/useStore";
import { useRouter } from "next/router";
import usePreloder from "@/utils/hooks/usePreloader";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import { Mode } from "@/utils/types/app.types";
import ClassicView from "./components/ClassicView/ClassicView";
import BeratGencLogo from "./components/Icons/BeratGencLogo";
import Analytics from "./components/Analytics";

export default function Home() {
  const { isPreloaded, progress } = usePreloder();
  const [mode, setMode] = useState<Mode | undefined>(undefined);
  const [isProjectDetailVisible, setIsProjectDetailVisible] = useState(false);
  const [isAnimating, setisAnimating] = useState(false);
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  const [project, setProject] = useState<(typeof projectData)[number]>(
    projectData[0]
  );

  const { setLink } = useStore();

  const onProjectClick = useCallback((i: number) => {
    const project = projectData[i];
    const { liveLink, repoLink, mediaPath } = project;

    setIsProjectDetailVisible(true);
    setLink(liveLink, repoLink);
    setisAnimating(true);
    setProject(project);
  }, []);

  const onProjectClose = useCallback(() => {
    setisAnimating(true);
    setIsProjectDetailVisible(false);
  }, []);

  const onAboutMeClick = useCallback(() => {
    setIsAboutMeVisible((prev) => !prev);
  }, [isAboutMeVisible]);

  const onModeOptionClick = useCallback(
    (newMode?: Mode) => {
      let newModeDetermined: Mode = 1;
      if (mode == Mode.GALLERY) newModeDetermined = Mode.CLASSIC;
      if (mode == Mode.CLASSIC) newModeDetermined = Mode.GALLERY;
      setMode(newMode ?? newModeDetermined);
      !newMode && setisAnimating(true);
      setIsProjectDetailVisible(false);
      setIsAboutMeVisible(false);
    },
    [mode]
  );

  const onAnimationComplete = useCallback((e: AnimationDefinition) => {
    setisAnimating(false);
  }, []);

  return (
    <>
      <Analytics />

      <AnimatePresence>
        {!mode && (
          <LoadingPage
            onAboutMeClick={onAboutMeClick}
            onModeClick={onModeOptionClick}
            progress={progress}
          />
        )}
      </AnimatePresence>

      <MouseFollower />

      {mode && (
        <Navigation
          hasNavigated={isAboutMeVisible || isProjectDetailVisible}
          onAboutMeClick={onAboutMeClick}
          shouldShowLinks={isProjectDetailVisible}
          onModeSwitch={onModeOptionClick}
        />
      )}

      {mode && (
        <LogoContainer>
          <BeratGencLogo />
        </LogoContainer>
      )}

      <AnimatePresence>
        {isAboutMeVisible && <AboutMe onAboutMeClick={onAboutMeClick} />}
      </AnimatePresence>

      {isPreloaded && mode && (
        <Container>
          <AnimatePresence mode="wait">
            {mode === Mode.GALLERY ? (
              <Gallery key={"23323"} onProjectClick={onProjectClick} />
            ) : (
              <ClassicView key={"sd"} />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isProjectDetailVisible && (
              <ProjectDetail project={project} onClose={onProjectClose} />
            )}
          </AnimatePresence>

          <PageTransition
            isAnimating={isAnimating}
            onAnimationComplete={onAnimationComplete}
          />
        </Container>
      )}
    </>
  );
}
