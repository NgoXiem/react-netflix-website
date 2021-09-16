import React from "react";
import Accordion from "../components/accordion/index";
import data from "../fixture/faq.json";

export default function AccordionContainer() {
  return (
    <Accordion>
      {data.map((item) => (
        <Accordion.Card key={item.id}>
          <Accordion.Button>
            <span>{item.header}</span>
          </Accordion.Button>
          <Accordion.Answer>
            <span>{item.body}</span>
          </Accordion.Answer>
        </Accordion.Card>
      ))}
    </Accordion>
  );
}
