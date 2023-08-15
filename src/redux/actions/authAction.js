import firebase from "firebase/compat/app";
import auth from "../../firebase";
import {
  LOAD_PROFILE,
  LOGIN_FALI,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actionType";

const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    console.log(res);

    const accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoURL: res.additionalUserInfo.profile.picture,
    };
    console.log(profile);

    sessionStorage.setItem("ytb-access-token", accessToken);
    sessionStorage.setItem("ytb-user", JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: LOGIN_FALI,
      payload: error.message,
    });
  }
};

export default login;

export const logout = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: LOGOUT,
  });

  sessionStorage.removeItem("ytb-access-token");
  sessionStorage.removeItem("ytb-user");
};
