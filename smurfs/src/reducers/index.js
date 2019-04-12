import { LOADING, SUCCESS, FAILURE, POST_SUCCESS, POST_FAILURE, DELETE_SUCCESS, DELETE_FAILURE, UPDATE_SUCCESS, UPDATE_FAILURE, SHOW_FORM, HIDE_FORM } from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  deletingSmurf: false,
  updatingSmurf: false,
  addFormVisible: true,
  id: null,
  error: null
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        smurfs: action.payload,
        error: null
      };
    case FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        smurfs: [],
        error: action.payload
      };
    case POST_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        smurfs: action.payload,
        error: null
      };
    case POST_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        error: action.payload
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        error: null
      };
      case DELETE_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      }
      case UPDATE_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        updatingSmurf: true,
        smurfs: action.payload
      }
      case UPDATE_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      }
      case SHOW_FORM:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        addFormVisible: false,
        id: action.payload
      }
      case HIDE_FORM:
      return {
        ...state,
        addFormVisible: true
      }
    default:
      return state;
  }
};

export default Reducer;
