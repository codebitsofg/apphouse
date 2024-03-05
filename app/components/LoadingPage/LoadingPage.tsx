import React from "react";
import { Container } from "./LoadingPage.styles";

interface LoadingPageProps {
  progress: number;
}

const LoadingPage = ({ progress }: LoadingPageProps) => {
  return <Container>{progress}</Container>;
};

export default LoadingPage;
