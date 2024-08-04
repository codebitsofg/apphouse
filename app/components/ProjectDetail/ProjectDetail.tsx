import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ButtonCTA,
  CloseProject,
  CodeBreakdownContainer,
  CodeBreakdownContainerText,
  CodeBreakdownTitle,
  Container,
  DescriptionText,
  Divider,
  DividerBottom,
  FlexContainer,
  GoLiveCTA,
  InnerContainer,
  LinkContainer,
  LinksContainer,
  Media,
  OverlayProjectDetail,
  ProjectDetailText,
  ProjectSpec,
  ProjectSpecContainer,
  ProjectSpecTitle,
  ProjectSpecsContainer,
  SecondaryOverlayProjectDetail,
  SectionContainer,
  ThankYouText,
  Title,
  TitleContainer,
} from "./ProjectDetail.styles";
import { Project } from "@/utils/types/app.types";
import SlideShow from "../SlideShow/SlideShow";
import useStore from "@/app/store/useStore";
import CodeBlock from "../CodeBlock/CodeBlock";
import Lenis from "lenis";
import Link from "next/link";

interface ProjecDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail = ({ onClose, project }: ProjecDetailProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const { onHoverStartStore, onHoverEndStore, preloadedSources } = useStore();
  const {
    projectName,
    codeBreakDown,
    mainTakeAway,
    mediaPath,
    projectType,
    date,
    liveLink,
    repoLink,
    techStack,
    deployment,
  } = project;
  const canExecuteRef = useRef(true);
  const combinedArray = [...techStack, ...(deployment ?? [])];
  const combinedString = combinedArray.join(", ");
  const gifUrl = preloadedSources.find(
    ({ mediaPath: path }) => path === mediaPath
  )?.url;
  const raf = useCallback(
    (time: number) => {
      lenis?.raf(time);
      requestAnimationFrame(raf);

      if (lenis?.progress! > 0.97 && canExecuteRef.current) {
        onClose();
        canExecuteRef.current = false;
      }
    },
    [lenis]
  );
  useEffect(() => {
    if (!lenis) {
      setLenis(
        new Lenis({
          lerp: 0.04,
          wrapper: ref.current!,
        })
      );
    }
    requestAnimationFrame(raf);
    return () => {
      lenis?.destroy();
    };
  }, [lenis, raf]);

  return (
    <Container key="projectDetailKey">
      <InnerContainer ref={ref}>
        <FlexContainer>
          <TitleContainer>
            <Title> {projectName} </Title>

            <ProjectDetailText
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 3, 0],
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ad
              ratione quas culpa possimus vel omnis. Quia eos omnis accusantium
              optio, libero natus incidunt laboriosam dolores et est. Quam,
              dicta. Lorem ipsum dolor sit amet.
            </ProjectDetailText>

            <ProjectSpecsContainer>
              <ProjectSpecContainer>
                <ProjectSpecTitle>Project Type</ProjectSpecTitle>
                <ProjectSpec>{projectType}</ProjectSpec>
              </ProjectSpecContainer>

              <ProjectSpecContainer>
                <ProjectSpecTitle>Tech Stack</ProjectSpecTitle>
                <ProjectSpec>{combinedString}</ProjectSpec>
              </ProjectSpecContainer>

              <ProjectSpecContainer>
                <ProjectSpecTitle> Date </ProjectSpecTitle>
                <ProjectSpec>{date}</ProjectSpec>
              </ProjectSpecContainer>

              <LinksContainer>
                <LinkContainer>
                  <Link href={liveLink} target="_blank">
                    Launch App
                  </Link>
                </LinkContainer>
                <LinkContainer>
                  <Link href={repoLink} target="_blank">
                    View Source Code
                  </Link>
                </LinkContainer>
              </LinksContainer>
            </ProjectSpecsContainer>
          </TitleContainer>

          <Media src={gifUrl} />

          <Divider />

          <CodeBreakdownContainer>
            <CodeBreakdownTitle> Code Breakdown </CodeBreakdownTitle>

            <CodeBreakdownContainerText
              dangerouslySetInnerHTML={{ __html: mainTakeAway.join(" ") }}
            />

            {codeBreakDown.map(({ text, codeSnippet }) => (
              <SectionContainer key={text}>
                <DescriptionText dangerouslySetInnerHTML={{ __html: text }} />
                <CodeBlock code={codeSnippet} />
              </SectionContainer>
            ))}
          </CodeBreakdownContainer>

          <GoLiveCTA>
            <ThankYouText>Keep scrolling to go back!</ThankYouText>
            <DividerBottom />
            <ButtonCTA>
              <Link href={liveLink} target="_blank">
                Launch App
              </Link>
            </ButtonCTA>
          </GoLiveCTA>
        </FlexContainer>

        <CloseProject onClick={onClose}>Close Project |</CloseProject>
      </InnerContainer>
      <OverlayProjectDetail />
      <SecondaryOverlayProjectDetail />
    </Container>
  );
};

export default ProjectDetail;
