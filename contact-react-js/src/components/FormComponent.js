import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, FormGroup, Label, Row, Input, Button } from "reactstrap";
import { reduxForm, Field } from "redux-form";
import UserValidation from "../validations/UserValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "Red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => {
  return {
    initialValues: {
      firstName: state.users.getUsersDetail.firstName,
      lastName: state.users.getUsersDetail.lastName,
      age: state.users.getUsersDetail.age,
      photo: state.users.getUsersDetail.photo
    }
  };
};

class FormComponent extends Component {
  render() {
    return (
        <form onSubmit={this.props.handleSubmit}>
            <FormGroup row>
                <Col md={6}>
                    <FormGroup>
                        <Field
                            type="Text"
                            name="firstName"
                            component={renderField}
                            label="First Name: "
                        />
                    </FormGroup>
                </Col>

                <Col md={6}>
                    <FormGroup>
                        <Field
                            type="Text"
                            name="lastName"
                            component={renderField}
                            label="Last Name: "
                        />
                    </FormGroup>
                </Col>

                <Col md={6}>
                    <FormGroup>
                        <Field
                            type="number"
                            name="age"
                            component={renderField}
                            label="Age: "
                        />
                    </FormGroup>
                </Col>

                <Col md={6}>
                    <FormGroup>
                        <Field
                            type="Text"
                            name="photo"
                            component={renderField}
                            label="Photo: "
                        />
                    </FormGroup>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Col md={12}>
                    <FormGroup>
                        <Button
                            color="dark"
                            type="submit"
                            disabled={this.props.submitting}
                        >
                            Submit
                        </Button>
                    </FormGroup>
                </Col>
            </FormGroup>
        </form>
    )
  }
}

FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect(mapStateToProps, null)(FormComponent);
