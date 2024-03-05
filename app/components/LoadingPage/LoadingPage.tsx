import React from "react";
import { Container, Dot, PreloaderText, Progress } from "./LoadingPage.styles";

interface LoadingPageProps {
  progress: number;
}

const LoadingPage = ({ progress }: LoadingPageProps) => {
  return (
    <Container>
      <PreloaderText> Berat Genç | 2024 </PreloaderText>
      <Progress>
        {progress}
        <Dot />
      </Progress>
    </Container>
  );
};

export default LoadingPage;
