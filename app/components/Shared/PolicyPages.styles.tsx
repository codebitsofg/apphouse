import Link from "next/link";
import styled from "styled-components";
import { mediaLarge } from "@/utils/media";

export const PrivacyContainer = styled.div`
  min-height: 100vh;

  color: #212529;
  padding: 2rem;
  overflow-y: auto;
`;

export const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  ${mediaLarge(`
    padding: 4rem 0;
  `)}
`;

export const BackLink = styled(Link)`
  color: #9e9e9e;
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  display: inline-block;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #212529;
  font-weight: 700;

  ${mediaLarge(`
    font-size: 3rem;
  `)}
`;

export const LastUpdated = styled.p`
  color: #6c757d;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`;

export const Section = styled.section`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #212529;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #495057;
`;

export const List = styled.ul`
  margin: 1rem 0;
  padding-left: 1.5rem;
`;

export const ListItem = styled.li`
  line-height: 1.6;
  margin-bottom: 0.5rem;
  color: #495057;
`;

export const ContactInfo = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 6rem;
`;

export const ContactTitle = styled.h3`
  color: #212529;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

export const ContactText = styled.p`
  color: #495057;
  margin-bottom: 0.5rem;
`;

export const ContactLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Highlight = styled.span`
  color: #007bff;
  font-weight: 600;
`;
