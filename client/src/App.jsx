import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import ProfileScreen from "./pages/profile/ProfileScreen";
import Profiles from "./pages/profiePage/Profiles";
import  Payment  from "./pages/payment/Payment";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/profiles" />}</Route>
        {user && (
          <>
          <Route path="/profiles">
              <Profiles />
            </Route>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
         
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;