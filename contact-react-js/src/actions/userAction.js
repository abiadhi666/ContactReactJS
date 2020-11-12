import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";
export const POST_USERS_CREATE = "POST_USERS_CREATE";
export const PUT_USERS_EDIT = "PUT_USERS_EDIT";

export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get("https://simple-contact-crud.herokuapp.com/contact")
      .then(function (response) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUsersDetail = (id) => {
  return (dispatch) => {
    axios
      .get("https://simple-contact-crud.herokuapp.com/contact/" + id)
      .then(function (response) {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postUsersCreate = (data) => {
  return (dispatch) => {
    axios
      .post("https://simple-contact-crud.herokuapp.com/contact", data)
      .then(function (response) {
        console.log(response);

        dispatch({
          type: POST_USERS_CREATE,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: POST_USERS_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putUsersEdit = (data, id) => {
  return (dispatch) => {
    axios
      .put("https://simple-contact-crud.herokuapp.com/contact/"+id, data)
      .then(function (response) {
        console.log(response);

        dispatch({
          type: PUT_USERS_EDIT,
          payload: {
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: PUT_USERS_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(
         "https://simple-contact-crud.herokuapp.com/contact/"+id
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteDataUser = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USERS_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    }); 

    dispatch({
      type: POST_USERS_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};