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
}

const ProjectRect = (props: ProjectRectProps) => {
  return (
    <S.Container {...props}>
      <S.Text> {props.children}</S.Text>
    </S.Container>
  );
};

export default ProjectRect;
