import {
  LOAD_PROFILE,
  LOGIN_FALI,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actionType";

const initialSate = {
  accessToken: sessionStorage.getItem("ytb-access-token")
    ? sessionStorage.getItem("ytb-access-token")
    : null,
  user: sessionStorage.getItem("ytb-user")
    ? JSON.parse(sessionStorage.getItem("ytb-user"))
    : null,
  loading: false,
};

export const authReducer = (prevState = initialSate, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };
    case LOGIN_FALI:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };
    case LOGOUT:
      return {
        ...prevState,
        accessToken: null,
        user: null,
      };

    default:
      return prevState;
  }
};
