import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteUser } from "../actions/userAction";

const handleClick = (dispatch, id) => {
  swal({
    title: "Are you sure to delete this contact?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id))
      swal("This contact has been deleted!", {
        icon: "success",
      });
    } else {
      swal("This contact is safe!");
    }
  });
}

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

const TableComponent = (props) => {
  const columns = [
    {
      dataField: "firstName",
      text: "Nama",
      sort: true,
      headerStyle: () => {
        return {
          width: "30%",
        };
      },
    },
    {
      dataField: "lastName",
      text: "Nama Akhir",
      sort: true,
      headerStyle: () => {
        return {
          width: "30%",
        };
      },
    },
    {
      dataField: "age",
      text: "Umur",
      sort: true,
      headerStyle: () => {
        return {
          width: "10%",
        };
      },
    },
    {
      dataField: "Link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button color="dark" className="mr-2 mb-2">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>
            <Link to={"edit/" + row.id}>
              <Button color="dark" className="mr-2 mb-2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>
            <Button
              color="dark"
              className="mr-2 mb-2"
              onClick={() => handleClick(props.dispatch, row.id)}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to={"create"}>
                    <Button color="dark" className="mb-3">
                      <FontAwesomeIcon icon={faUserPlus} /> Create
                    </Button>
                  </Link>
                </Col>
              </Row>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorUsersList ? (
            <h1>{props.errorUsersList}</h1>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
