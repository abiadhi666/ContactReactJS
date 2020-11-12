import React from 'react'
import { connect } from 'react-redux'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const mapStateToProps = (state) => {
  return {
    getUsersDetail: state.users.getUsersDetail,
    errorUsersDetail: state.users.errorUsersDetail,
  };
};

const DetailUsersComponent = (props) => {
    return (
        <div>
            <Card>
            <CardImg top width="100%" src={props.getUsersDetail.photo} alt="No Image" />
            <CardBody>
                <CardTitle className="text-center" tag="h5">{props.getUsersDetail.firstName} {props.getUsersDetail.lastName}</CardTitle>
                <CardSubtitle className="text-center mb-2" tag="h6">{props.getUsersDetail.age}</CardSubtitle>
            </CardBody>
            </Card>
      </div>
    )
}

export default connect(mapStateToProps, null)(DetailUsersComponent)
