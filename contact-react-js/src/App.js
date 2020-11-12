import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./container/HomeContainer";
import CreateUserContainer from "./container/CreateUserContainer";
import DetailUserContainer from "./container/DetailUserContainer";
import EditUserContainer from "./container/EditUserContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <BrowserRouter>
          <Route path="/home" exact component={HomeContainer} />

          <Route path="/create" exact component={CreateUserContainer} />

          <Route path="/detail/:id" exact component={DetailUserContainer} />

          <Route path="/edit/:id" exact component={EditUserContainer} />
        </BrowserRouter>
      </div>
    );
  }
}
