import React from "react";
import { Form, Text, Wrapper, Input, Button } from "./styles/OptForm";

export default function OptForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Wrapper = function OptFormWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input type="text" placeholder="Email address" {...restProps}></Input>;
};
OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      <p>Get Started</p>
      <img src="/public/images/icons/chevron-right.png" alt="right" />
      {children}
    </Button>
  );
};
