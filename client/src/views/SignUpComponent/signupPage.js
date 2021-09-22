import React from "react";
import { useState } from "react";

function SignupPage() {
  const [register, SetRegister] = useState(
    [
      {
        Email: "",
        Username: "",
        Password: "",
        PasswordConfirm: "",
      },
    ],
    []
  );

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(register);
  };

  return (
    <div className="signup">
      <div className="signupFrm">
        <form className="form">
          <h1 className="title">SignUp</h1>

          <div className="inputContainer">
            <input
              type="Email"
              className="input"
              placeholder="a"
              onChange={(e) =>
                SetRegister({ ...register, Email: e.target.value })
              }
            ></input>
            <label htmlFor="" className="label">
              Email
            </label>
          </div>

          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              onChange={(e) =>
                SetRegister({ ...register, Username: e.target.value })
              }
            ></input>
            <label htmlFor="" className="label">
              Username
            </label>
          </div>

          <div className="inputContainer">
            <input
              type="Password"
              className="input"
              placeholder="a"
              onChange={(e) =>
                SetRegister({ ...register, Password: e.target.value })
              }
            ></input>
            <label htmlFor="" className="label">
              Password
            </label>
            {/* onChange={(e)=> SetLogin({...login,password:e.target.value})} */}
          </div>

          <div className="inputContainer">
            <input
              type="password"
              className="input"
              placeholder="a"
              onChange={(e) =>
                SetRegister({ ...register, PasswordConfirm: e.target.value })
              }
            ></input>
            <label htmlFor="" className="label">
              Confirm password
            </label>
          </div>

          <input
            type="submit"
            className="submitBtn"
            value="Sign up"
            onClick={submitHandler}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
