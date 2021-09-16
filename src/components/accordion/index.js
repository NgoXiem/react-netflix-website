import React, { useState, useContext } from "react";
import { Container, Card, Answer, Button } from "./styles/Accordion";
const ToggleContext = React.createContext();

export default function Accordion({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Accordion.Card = function AccordionCard({ children, ...restProps }) {
  const [toggle, setToggle] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      <Card {...restProps}>{children}</Card>
    </ToggleContext.Provider>
  );
};
Accordion.Button = function AccordionButton({ children, ...restProps }) {
  const { toggle, setToggle } = useContext(ToggleContext);

  return (
    <Button onClick={() => setToggle(!toggle)} {...restProps}>
      {children}
      {toggle ? (
        <img src="/public/images/icons/close-slim.png" alt="close" />
      ) : (
        <img src="/public/images/icons/add.png" alt="open" />
      )}
    </Button>
  );
};

Accordion.Answer = function AccordionAnswer({ children, ...restProps }) {
  const { toggle } = useContext(ToggleContext);
  return (
    <Answer {...restProps} className={toggle ? "open" : "close"}>
      {children}
    </Answer>
  );
};
