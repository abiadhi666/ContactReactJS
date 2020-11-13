import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { postUsersCreate } from "../actions/userAction";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUsersCreate(data));
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        swal("Failed!", this.props.errorResponDataUser, "error");
      } else {
        swal(
          "User Created!",
          "Name : " +
            this.props.getResponDataUser.firstName +
            " , Age : " +
            this.props.getResponDataUser.age,
          "success"
        );
      }
    }
    return (
      <div>
        <Container>
          <BackComponent />
          <h1>Create User</h1>
          <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(CreateUserContainer);
