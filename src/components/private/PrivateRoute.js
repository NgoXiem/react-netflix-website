import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../App";

export default function PrivateRoute({ children, ...restProps }) {
  const { user } = useContext(AuthContext);
  return user ? (
    <Route {...restProps}>{children}</Route>
  ) : (
    <Redirect to="/login"></Redirect>
  );
}
