import React from "react";
import {
  Container,
  Dot,
  LoadingTitle,
  PreloaderText,
  Progress,
} from "./LoadingPage.styles";

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
      <LoadingTitle>Welcome Onboard! Loading...</LoadingTitle>
    </Container>
  );
};

export default LoadingPage;
