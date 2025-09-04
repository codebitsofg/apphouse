import styled from "styled-components";
import { mediaLarge } from "@/utils/media";

export const FooterContainer = styled.footer`
  color: #ffffff;
  padding: 2rem 0;
  margin-top: auto;

  position: relative;
  z-index: 100;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  ${mediaLarge(`
    padding: 0 4rem;
  `)}
`;

export const Copyright = styled.p`
  font-size: 0.75rem;
  color: #757474;
  margin: 0;
  font-size: 0.75rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const FooterLink = styled.a`
  color: #c4c3c3;
  text-decoration: none;
  font-size: 0.75rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

export const Divider = styled.span`
  color: #555;
  font-size: 0.9rem;
`;
