import React from "react";
import styled from "styled-components/macro";
import AccordionContainer from "./accordion";
import OptForm from "../components/optform/index";

const Container = styled.div`
  position: relative;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  margin-bottom: 0;
  background: 0 0;
  color: #fff;
  h1 {
    font-size: 26px;
    text-align: center;
    margin-bottom: 8px;
  }

  @media only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (max-width: 349px) {
    padding: 50px 0;
  }

  @media only screen and (min-width: 550px) and (max-width: 949px) {
    h1 {
      font-size: 2rem;
    }
  }
  @media only screen and (min-width: 950px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export default function Faq() {
  return (
    <Container>
      <h1>Frequently Asked Questions</h1>
      <AccordionContainer></AccordionContainer>
      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Wrapper>
          <OptForm.Input></OptForm.Input>
          <OptForm.Button></OptForm.Button>
        </OptForm.Wrapper>
      </OptForm>
    </Container>
  );
}
