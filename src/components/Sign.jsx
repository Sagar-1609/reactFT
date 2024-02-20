import React from "react";

import { useNavigate } from "react-router-dom";

function Sign() {
  const token = {
    phonenumber: 878897879,
    email: "zoro",
    tokens: "signup",
  };
  const signHandle = () => {
    localStorage.setItem("usertoken is ; ", JSON.stringify(token));
  };
  const history = useNavigate();
  const goSubmit = (e) => {
    e.preventDefault();
    history("/home");
  };

  return (
    <div>
      {" "}
      <div class="signup">
        <form class="sign1" onSubmit={goSubmit} method="post">
          <h2>sign up</h2>
          <input type="text" id="name_1" placeholder="first name" required />

          <input
            type="number"
            id="number_1"
            placeholder="phonenumber"
            required
          />
          <input type="email" id="email_1" placeholder="email" required />
          <input
            type="password"
            id="password_1"
            placeholder="create password"
            required
          />
          <label>
            <input type="radio" id="male" name="gender" value="male" />
            male
            <input type="radio" id="female" name="gender" value="FEMALE" />
            female
          </label>
          <label id="size">
            accept terms & conduction:
            <input type="checkbox" id="check_1" value="checked" />
          </label>

          <button onClick={signHandle} type="submit">
            sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sign;
