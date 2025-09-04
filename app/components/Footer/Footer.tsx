import React from "react";
import {
  FooterContainer,
  FooterContent,
  Copyright,
  LinksContainer,
  FooterLink,
  Divider,
} from "./Footer.styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <LinksContainer>
          <FooterLink href="/terms">Terms & Conditions</FooterLink>

          <FooterLink href="/privacy">Privacy Policy</FooterLink>

          <FooterLink href="mailto:info@bubbleappstudio.com">
            Contact
          </FooterLink>
        </LinksContainer>
        <Copyright>
          © {currentYear} Bubble App Studio. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
