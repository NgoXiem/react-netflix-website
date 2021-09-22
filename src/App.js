import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Browse from "./pages/browse";
import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "@firebase/auth";
import PrivateRoute from "./components/private/PrivateRoute";

export const AuthContext = createContext();
function App() {
  const auth = getAuth();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     localStorage.setItem("user", JSON.stringify(user));
    //     setUser(user);
    //   } else {
    //     localStorage.removeItem("user");
    //     setUser(null);
    //   }
    // });
  }, []);

  return (
    <AuthContext.Provider value={user}>
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
          {/* <PrivateRoute exact path="/browse"> */}
          <Route>
            <Browse></Browse>
          </Route>
          {/* </PrivateRoute> */}
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
