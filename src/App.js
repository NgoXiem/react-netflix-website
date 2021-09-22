import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Browse from "./pages/browse";
import { useState, useEffect, useRef } from "react";
import { onAuthStateChanged, getAuth } from "@firebase/auth";
import PrivateRoute from "./components/private/PrivateRoute";

function App() {
  // get user data from firebase authentication and store in local storage
  const auth = getAuth();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const isMounted = React.createRef(false);
  useEffect(() => {
    return () => (isMounted.current = true);
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        isMounted && setUser(user);
      } else {
        localStorage.removeItem("user");
        isMounted && setUser(null);
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Signin></Signin>
        </Route>
        <Route exact path="/signup">
          <Signup></Signup>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute user={user} exact path="/browse">
          <Browse></Browse>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
