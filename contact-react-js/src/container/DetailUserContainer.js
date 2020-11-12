import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { getUsersDetail } from "../actions/userAction";
import BackComponent from "../components/BackComponent";
import DetailUsersComponent from "../components/DetailUsersComponent";

class DetailUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail User {this.props.match.params.id}</h1>
        <DetailUsersComponent />
      </Container>
    );
  }
}

export default connect()(DetailUserContainer);
