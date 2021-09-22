import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ user, children, ...restProps }) {
  return user ? <Route>{children}</Route> : <Redirect to="/login"></Redirect>;
}
