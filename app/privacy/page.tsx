"use client";
import React, { useEffect } from "react";
import {
  PrivacyContainer,
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
} from "../components/Shared/PolicyPages.styles";

export default function PrivacyPolicy() {
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
    <PrivacyContainer>
      <ContentWrapper>
        <BackLink href="/">← Homapage</BackLink>

        <Title>Privacy Policy</Title>
        <LastUpdated>Last Updated: 2025-05-14</LastUpdated>

        <Section>
          <SectionTitle>Introduction</SectionTitle>
          <Paragraph>
            Welcome to MedicEnglish – Learn Medical English
            (&ldquo;MedicEnglish,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;). This Privacy Policy explains how we collect,
            use, share, and protect personal information when you use our mobile
            application (&ldquo;App&rdquo;). By using our App, you consent to
            the practices described in this Privacy Policy.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>1. Who We Are</SectionTitle>
          <Paragraph>
            MedicEnglish is published by our development team and is designed
            for medical professionals worldwide seeking to improve their English
            skills in a healthcare context. We comply with relevant data
            protection regulations, including the General Data Protection
            Regulation (GDPR) where applicable.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>2. Information We Collect</SectionTitle>
          <Paragraph>
            <strong>2.1 Information You Provide Voluntarily</strong>
          </Paragraph>
          <List>
            <ListItem>
              <strong>Account Information:</strong> If you choose to create an
              account, we collect your email and name.
            </ListItem>
            <ListItem>
              <strong>Progress Data:</strong> To track your learning and
              progress (e.g., exercises completed, words learned), we store this
              data under your account.
            </ListItem>
          </List>

          <Paragraph>
            <strong>2.2 Information We Collect Automatically</strong>
          </Paragraph>
          <List>
            <ListItem>
              <strong>System Data:</strong> We automatically collect device
              identifiers, operating system version, device model, IP address,
              and advertising ID (if you consent).
            </ListItem>
            <ListItem>
              <strong>App Usage Data:</strong> We collect information about how
              you use the App (e.g., sessions, key actions, and in-app
              navigation).
            </ListItem>
            <ListItem>
              <strong>Payment Data:</strong> For paid subscriptions or
              purchases, we collect information necessary to process payments.
            </ListItem>
          </List>

          <Paragraph>
            We do not collect health, geolocation, or government-issued
            identification data. Other than what is needed for payment
            processing, we do not collect detailed financial data.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>3. How We Collect Your Data</SectionTitle>
          <List>
            <ListItem>
              <strong>App Registration:</strong> When you sign up for an account
              through the App&rsquo;s dedicated sign-up screen.
            </ListItem>
            <ListItem>
              <strong>Automatic Collection:</strong> Certain data is collected
              automatically through your device when you use the App.
            </ListItem>
            <ListItem>
              <strong>Third-Party SDKs:</strong> We integrate with the following
              third-party service providers, who also collect data on our behalf
              or receive some of the data we collect:
              <List>
                <ListItem>Firebase (Google)</ListItem>
                <ListItem>Analytics providers</ListItem>
                <ListItem>Payment processors</ListItem>
              </List>
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. Purposes for Collecting and Using Data</SectionTitle>
          <Paragraph>
            We use the data we collect for the following purposes:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Performance and Bug Fixing:</strong> Analyze performance
              metrics to improve app stability and resolve technical issues.
            </ListItem>
            <ListItem>
              <strong>Customer Support:</strong> Assist with any inquiries or
              technical support requests you might have.
            </ListItem>
            <ListItem>
              <strong>Account Sync:</strong> Synchronize your learning progress
              across devices if you create an account.
            </ListItem>
            <ListItem>
              <strong>Subscription Management:</strong> Process payments and
              manage premium features of the App.
            </ListItem>
            <ListItem>
              <strong>Marketing and Analytics:</strong> Use aggregated user data
              for internal marketing campaign improvements. We do not show
              third-party ads within the App.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>5. How We Share Your Data</SectionTitle>
          <Paragraph>
            We may share certain data with the following third parties to
            facilitate our services:
          </Paragraph>
          <List>
            <ListItem>
              Firebase (Google) and other analytics providers to help us with
              analytics and user engagement.
            </ListItem>
            <ListItem>
              Payment Processors: To process subscription payments securely.
            </ListItem>
          </List>
          <Paragraph>
            <strong>
              We do not sell or rent your personal data to third parties.
            </strong>
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>6. Legal Basis for Processing</SectionTitle>
          <Paragraph>
            Our legal bases for processing your data include:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Consent:</strong> When you create an account, you consent
              to the collection and use of your personal information (name,
              email).
            </ListItem>
            <ListItem>
              <strong>Legitimate Interests:</strong> Collecting system data
              (e.g., device identifiers, usage data) to improve our App&rsquo;s
              functionality and ensure security.
            </ListItem>
            <ListItem>
              <strong>Contract:</strong> We process payment information to
              fulfill subscription services you purchase.
            </ListItem>
            <ListItem>
              <strong>Compliance with Laws:</strong> We may retain or disclose
              information if required by law.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>7. Data Retention</SectionTitle>
          <Paragraph>
            We retain user data for as long as it is necessary to provide the
            App&rsquo;s services and features. Currently, we do not have an
            automated data deletion mechanism; however, users can request
            deletion of their account as described in Section 8. We review and
            update our retention practices to ensure compliance with relevant
            regulations.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>8. Your Rights and Choices</SectionTitle>
          <List>
            <ListItem>
              <strong>Access and Update:</strong> You may access and update your
              account information directly within the App.
            </ListItem>
            <ListItem>
              <strong>Deletion:</strong> You can request account deletion by
              emailing us at support@medicenglish.com or through the App&rsquo;s
              support/request form.
            </ListItem>
            <ListItem>
              <strong>Opt-Out of Automatic Data Collection:</strong> Depending
              on your device settings, you may limit the collection of
              advertising IDs.
            </ListItem>
          </List>
          <Paragraph>
            If you are located in the European Union, you have the right to
            request access to and rectification or erasure of your personal
            data, or to restrict or object to certain data processing activities
            under GDPR.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>9. Security</SectionTitle>
          <Paragraph>
            We use industry-standard security measures, including HTTPS
            encryption for data in transit, to protect your information. Your
            data is stored on secure servers, and we regularly review our
            security practices to safeguard personal information from
            unauthorized access and disclosure.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>10. Children&rsquo;s Privacy</SectionTitle>
          <Paragraph>
            MedicEnglish is designed for adult medical professionals and is not
            intended for individuals under the age of 18. We do not knowingly
            collect personal information from minors. If you believe we have
            inadvertently collected such information, please contact us at
            support@medicenglish.com, and we will promptly take steps to delete
            it.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>11. Changes to This Privacy Policy</SectionTitle>
          <Paragraph>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on our official Privacy Policy page within the App or
            on our website. We encourage you to review this page periodically to
            stay informed about how we protect your data.
          </Paragraph>
        </Section>

        <ContactInfo>
          <ContactTitle>Contact</ContactTitle>
          <ContactText>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </ContactText>
          <ContactText>
            Email:{" "}
            <ContactLink href="mailto:info@medicenglish.com">
              info@bubbleappstudio.com
            </ContactLink>
          </ContactText>
          <ContactText>
            We are committed to resolving concerns and appreciate the
            opportunity to learn and improve our services through your feedback.
          </ContactText>
          <Paragraph>
            <strong>
              By using the MedicEnglish app, you acknowledge that you have read
              and understood this Privacy Policy and agree to our collection,
              use, and sharing of your information as described.
            </strong>
          </Paragraph>
        </ContactInfo>
      </ContentWrapper>
    </PrivacyContainer>
  );
}
