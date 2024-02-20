import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginData } from "./store/loginSlice";
function Login() {
  const [isName, setName] = useState("ZORO");

  const history = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);
  console.log("data is :", user);
  const handleSubmit = (e) => {
    e.preventDefault();
    history("/home");
  };

  return (
    <div>
      {" "}
      <div className="login-page">
        <form className="LOGIN" onSubmit={handleSubmit} method="post">
          <h1>log in</h1>
          <input type="text" id="username_1" placeholder="username" />
          <input type="password" id="password_1" placeholder="password" />

          <button onClick={() => dispatch(loginData(isName))} type="submit">
            log in
          </button>

          <a href="#"> forget password</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
