"use client";
import React, { useEffect } from "react";
import {
  PrivacyContainer as TermsContainer,
  ContentWrapper,
  BackLink,
  Title,
  LastUpdated,
  Section,
  SectionTitle,
  Paragraph,
  List,
  ListItem,
  ContactInfo,
  ContactTitle,
  ContactText,
  ContactLink,
  Highlight,
} from "../components/Shared/PolicyPages.styles";

export default function TermsAndConditions() {
  useEffect(() => {
    // Add class to body to allow scrolling
    document.body.classList.add("allow-scroll");
    const html = document.querySelector("html") as HTMLHtmlElement;
    html.classList.add("allow-scroll");

    // Cleanup: remove class when component unmounts
    return () => {
      document.body.classList.remove("allow-scroll");
      html.classList.remove("allow-scroll");
    };
  }, []);

  return (
    <TermsContainer>
      <ContentWrapper>
        <BackLink href="/">← Homapage</BackLink>

        <Title>Terms & Conditions</Title>
        <LastUpdated>
          Last updated: {new Date().toLocaleDateString("en-US")}
        </LastUpdated>

        <Section>
          <SectionTitle>1. Introduction</SectionTitle>
          <Paragraph>
            Welcome to MedicEnglish – Learn Medical English (the "App"). These
            Terms and Conditions ("Terms") govern your access to and use of our
            Service, including (i) the MedicEnglish mobile application, (ii) any
            related websites and sub-domains ("Site"), and (iii) any related
            content, features, and offerings (collectively, the "Service"). By
            downloading, installing, accessing, or using any part of the
            Service, you ("User," "you," or "your") agree to be bound by these
            Terms and our Privacy Policy (together, the "Agreement").
          </Paragraph>
          <Paragraph>
            <strong>
              If you do not agree, do not access or use the Service.
            </strong>
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>2. Eligibility</SectionTitle>
          <Paragraph>
            You must be at least 16 years old—or the age of digital consent in
            your jurisdiction, whichever is higher—to create an account and use
            the Service. By accepting these Terms, you represent that you meet
            this requirement and that you have the legal capacity to enter into
            the Agreement.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>3. Educational Purpose; No Medical Advice</SectionTitle>
          <Paragraph>
            The Service provides educational content designed to improve English
            language skills in professional medical contexts. It does not
            provide medical advice, diagnosis, or treatment. Always consult a
            qualified healthcare professional with any medical questions. Your
            reliance on any information provided by the Service is solely at
            your own risk.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>4. Use License</SectionTitle>
          <Paragraph>
            Permission is granted to download and use the MedicEnglish app for
            personal, non-commercial educational purposes only. This is the
            grant of a license, not a transfer of title, and under this license
            you may not:
          </Paragraph>
          <List>
            <ListItem>
              Modify, copy, or distribute the app or its content
            </ListItem>
            <ListItem>
              Use the app for any commercial purpose or for any public display
            </ListItem>
            <ListItem>
              Attempt to reverse engineer, decompile, or disassemble the app
            </ListItem>
            <ListItem>
              Remove any copyright or other proprietary notations from the
              materials
            </ListItem>
            <ListItem>Share your account credentials with others</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>5. Medical Disclaimer</SectionTitle>
          <Paragraph>
            <strong>Important:</strong> MedicEnglish is an educational tool only
            and does not provide medical advice, diagnosis, or treatment. The
            content is for educational purposes and should not be used as a
            substitute for professional medical advice. Always consult with
            qualified healthcare professionals for medical decisions.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>6. Educational Content</SectionTitle>
          <Paragraph>
            The medical terminology, definitions, and educational materials in
            MedicEnglish are provided for learning purposes only. While we
            strive for accuracy, we make no warranties about the completeness or
            accuracy of the educational content. Users should verify medical
            information with authoritative sources.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>7. User Responsibilities</SectionTitle>
          <Paragraph>As a user of MedicEnglish, you agree to:</Paragraph>
          <List>
            <ListItem>
              Use the app only for legitimate educational purposes
            </ListItem>
            <ListItem>
              Not use the app in any way that violates applicable laws
            </ListItem>
            <ListItem>Respect intellectual property rights</ListItem>
            <ListItem>
              Not attempt to gain unauthorized access to the app or its systems
            </ListItem>
            <ListItem>
              Provide accurate information when creating an account
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>8. Privacy and Data Protection</SectionTitle>
          <Paragraph>
            Your privacy is important to us. Please review our Privacy Policy to
            understand how we collect, use, and protect your personal
            information. By using MedicEnglish, you consent to the collection
            and use of information as described in our Privacy Policy.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>9. App Availability</SectionTitle>
          <Paragraph>
            We strive to keep MedicEnglish available and functioning properly,
            but we do not guarantee uninterrupted access. The app may be
            temporarily unavailable due to maintenance, updates, or technical
            issues beyond our control.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>10. Modifications</SectionTitle>
          <Paragraph>
            We may revise these terms of service at any time without notice. By
            continuing to use MedicEnglish after changes are made, you are
            agreeing to be bound by the updated terms of service.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>11. Intellectual Property</SectionTitle>
          <Paragraph>
            All content, including but not limited to text, graphics, logos,
            images, audio files, and software, is the property of{" "}
            <Highlight>MedicEnglish</Highlight> and is protected by copyright
            and other intellectual property laws.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>12. Limitation of Liability</SectionTitle>
          <Paragraph>
            In no event shall MedicEnglish or its developers be liable for any
            damages arising out of the use or inability to use the application,
            including but not limited to direct, indirect, incidental, or
            consequential damages.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>13. Governing Law</SectionTitle>
          <Paragraph>
            These terms and conditions are governed by and construed in
            accordance with applicable laws. Any disputes arising from these
            terms will be subject to the jurisdiction of the appropriate courts.
          </Paragraph>
        </Section>

        <ContactInfo>
          <ContactTitle>Contact Information</ContactTitle>
          <ContactText>
            If you have any questions about these Terms & Conditions, please
            contact us:
          </ContactText>
          <ContactText>
            Email:{" "}
            <ContactLink href="mailto:info@bubbleappstudio.com">
              info@bubbleappstudio.com
            </ContactLink>
          </ContactText>
        </ContactInfo>
      </ContentWrapper>
    </TermsContainer>
  );
}
