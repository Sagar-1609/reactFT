import React from "react";
import { useNavigate } from "react-router-dom";

function Header({ inputType, setData }) {
  const history = useNavigate();

  const HandleLogin = (e) => {
    e.preventDefault();
    history("/Login");
  };

  const HandleSign = (e) => {
    e.preventDefault();
    history("/Sign");
  };
  return (
    <>
      <header>
        <div className="upbar">
          <div className="uplogo">
            <div className="logo"></div>
          </div>

          <ul className="top">
            <li className="button">home</li>
            <li className="button">menu</li>
            <li className="button">men</li>
            <li className="button">women</li>
            <li className="button">contactus</li>

            <li>
              <input
                id="search"
                placeholder={inputType}
                onChange={(e) => setData(e.currentTarget.value)}
              />
            </li>
          </ul>

          <div className="log-and-sign">
            <a className="login" onSubmit={HandleLogin}>
              {" "}
              login
            </a>

            <a className="signup" onSubmit={HandleSign}>
              sign up
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
