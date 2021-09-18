import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
function App() {
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
      </Switch>
    </Router>
  );
}

export default App;
