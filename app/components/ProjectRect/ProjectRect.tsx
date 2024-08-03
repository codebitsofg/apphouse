import React, { ReactNode } from "react";
import * as S from "./ProjectRect.styles";
import useStore from "@/app/store/useStore";

interface ProjectRectProps {
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
  top: string;
  left: string;
  children: ReactNode;
  mediaPath: string;
}

const ProjectRect = (props: ProjectRectProps) => {
  const { preloadedSources } = useStore();
  const gifUrl = preloadedSources.find(
    ({ mediaPath: path }) => path === props.mediaPath
  )?.url;

  return (
    <S.Container {...props}>
      <S.InnerContainer>
        <S.BgImage src={gifUrl} />
        <S.Overlay>
          <S.Text> {props.children}</S.Text>
        </S.Overlay>
      </S.InnerContainer>
    </S.Container>
  );
};

export default ProjectRect;
