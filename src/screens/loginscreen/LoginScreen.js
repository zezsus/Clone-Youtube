import React, { useEffect } from "react";
import "./LoginScreen.scss";
import logo from "../../assets/image/ytb-logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import login from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);
  const handleLogin = () => {
    dispatch(login());
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <div className="login">
      <div className="login-container">
        <span className="ytb">Youtube Clone</span>
        <img src={logo} alt="" width={300} />
        <button className="px-3" onClick={handleLogin}>
          Login with google
        </button>
        <span>This project is made using YOUTUBE DATA API</span>
      </div>
    </div>
  );
};

export default LoginScreen;
