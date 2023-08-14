import React from "react";
import "./LoginScreen.scss";
import logo from "../../assets/image/ytb-logo.jpg";
// import { useDispatch } from "react-redux";
// import login from "../../redux/actions/authaction";

const LoginScreen = () => {
  // const dispatch = useDispatch();
  const handleLogin = () => {
    //   dispatch(login());
    console.log("login success");
  };
  return (
    <div className="login">
      <div className="login-container">
        <span className="ytb">Youtube Clone</span>
        <img src={logo} alt="" width={300} />
        <button className="px-3" onClick={() => handleLogin()}>
          Login with google
        </button>
        <span>This project is made using YOUTUBE DATA API</span>
      </div>
    </div>
  );
};

export default LoginScreen;
