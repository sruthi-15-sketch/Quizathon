import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import User from "./components/user.component";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from './helpers/history';
import EventBus from "./common/EventBus";
import Home from "./components/Home";
import Mcq from "./components/PaginationComponent";
import Score from "./components/Score";
import Subscription from "./components/Subscription";
import PaymentSuccessful  from "./components/PaymentSuccessful";
import ForgotPassword from "./components/ForgotPassword";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); 
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser} = this.state;

    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand-sm  navbar-light bg-yellow ">
            <ul class="navbar-nav mr-auto">
          <img src="https://th.bing.com/th/id/OIP.EqytllGMr-Jta0HqFWtQXwAAAA?pid=ImgDet&rs=1" width="100" height="100" class="ml-1 mt-1 rounded-circle"/>
            <Link to={"/"} className="navbar-brand">
              Quizathon
            </Link>
            <div className="navbar-nav mr-auto">
              
              {currentUser && (
                <li className="nav-item log-font">
                  <Link to={"/mcq"} className="nav-link nav_buttons">
                    Quiz
                  </Link>
                </li>
              )}
            </div>
            {currentUser ? (
              <div className="navbar-nav mr-auto">
                <li className="nav-item log-font">
                  <Link to={"/profile"} className="nav-link nav_buttons">
                    Profile
                  </Link>
                </li>
                <li className="nav-item log-font">
                  <a href="/" className="nav-link nav_buttons" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav mr-auto">
                <li className="nav-item log-font">
                  <Link to={"/login"} className="nav-link nav_buttons">
                    Login
                  </Link>
                </li>

                <li className="nav-item log-font">
                  <Link to={"/register"} className="nav-link nav_buttons">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
            </ul>
          </nav>

          <div className="container mt-3">
            <Switch>
            <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/user" component={User} />
            </Switch>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/mcq" component={Mcq} />
          <Route exact path="/score" component={Score} />
          <Route exact path="/subscription" component={Subscription} />
          <Route exact path="/PaymentSuccessful" component={PaymentSuccessful} />
          <Route exact path="/ForgotPassword" component={ForgotPassword} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);