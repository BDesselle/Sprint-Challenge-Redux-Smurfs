import axios from "axios";

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";
export const DELETE_SUCCESS = "POST_SUCCESS";
export const DELETE_FAILURE = "POST_FAILURE";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILURE = "UPDATE_FAILURE";
export const SHOW_FORM = "SHOW_FORM";
export const HIDE_FORM = "HIDE_FORM";

export function fetchSmurfs() {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .get("http://localhost:3333/smurfs/")
      .then(response => {
        dispatch({
          type: SUCCESS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: FAILURE,
          payload: "loading failure..."
        });
      });
  };
}

export function postSmurf(smurf) {
  return (dispatch) => {
    dispatch ({ type: LOADING })
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then( response => {
        dispatch({
          type: POST_SUCCESS,
          payload: response.data
        })
      })
      .catch( err => {
        dispatch({
          type: POST_FAILURE,
          payload: "Post failure..."
        })
      })
  }
}

export function deleteSmurf(id) {
  return (dispatch) => {
    dispatch ({ type: LOADING })
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then( response => {
        dispatch({
          type: DELETE_SUCCESS,
          payload: response.data
        })
      })
      .catch( err => {
        dispatch({
          type: DELETE_FAILURE,
          payload: "Delete failure..."
        })
      })
  }
}

export function updateSmurf(smurf, id) {
  return (dispatch) => {
    dispatch ({ type: LOADING })
    axios
      .put(`http://localhost:3333/smurfs/${id}`, smurf)
      .then( response => {
        dispatch({
          type: UPDATE_SUCCESS,
          payload: response.data
        })
      })
      .catch( err => {
        dispatch({
          type: UPDATE_FAILURE,
          payload: "Update failure..."
        })
      })
  }
}

export function showForm(id) {
  return (dispatch) => {
      dispatch({
        type: SHOW_FORM,
        payload: id
      })
  }
}

export function hideForm() {
  return (dispatch) => {
    dispatch({ type: HIDE_FORM })
  }
}
