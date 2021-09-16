import React from "react";
import Footer from "../components/footer/index";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.TopLink href="/">Question? Contact us.</Footer.TopLink>
      <Footer.Row>
        <Footer.Wrapper>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Investor Relation</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Wrapper>
        <Footer.Wrapper>
          <Footer.Link href="#">Help Center</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link>
        </Footer.Wrapper>
        <Footer.Wrapper>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Ways to Watch</Footer.Link>
          <Footer.Link href="#">Corporate Infomation</Footer.Link>
          <Footer.Link href="#">Only on Netflix</Footer.Link>
        </Footer.Wrapper>
        <Footer.Wrapper>
          <Footer.Link href="#">Media Center</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Wrapper>
      </Footer.Row>
      <Footer.Text>Netflix Vietnam</Footer.Text>
    </Footer>
  );
}
