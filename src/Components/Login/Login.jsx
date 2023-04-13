import React from "react";
import { useState } from "react";
import "./Login.scss";
import axios from "axios";
import { SlRefresh } from "react-icons/sl";
import { useNavigate , Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Login = ({saved}) => {


  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [inputError, setError] = useState({});
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  async function sendUserData() {
    let { data } = await axios.post(
      "https://route-movies-api.vercel.app/signin",
      user
    );
    if (data.message === "success") {
      setLoading(false);
      navigate("/home");
      localStorage.setItem('token', data.token)
      saved()
    } else {
      setLoading(false);
      setError(data.message);
    }
  }

  function submitRegistrationForm() {
    setLoading(true);
    sendUserData();
  }

  function getUserData(e) {
    let myUser = { ...user };
    let inputName = e.target.name;
    myUser[inputName] = e.target.value;
    setUser(myUser);
  }

  

  return (<>
  <div className="container">
  <div className="login-box">
      <h2>Login</h2>
      {inputError.length > 0 ? (
          <div className="alert alert-danger my-5" role="alert">
            <strong>{inputError}</strong>
          </div>
        ) : (
          ""
        )}
      <form onSubmit={handleSubmit(submitRegistrationForm)}>
        <div className="user-box">
          <input
            {...register("email", {
              required: "Email is Requierd",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "This is not a correct Email format",
              },
            })}
            onKeyUp={getUserData}
            id="email"
            type="text"
            name="email"
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p>{message}</p>}
          />
          <label htmlFor="text">Email</label>
        </div>

        <div className="user-box">
          <input
            {...register("password", {
              required: "Passowrd is Requierd",
              pattern: {
                value: /^[A-Z][\w-]{7,15}$/g,
                message:
                  "Passowrd Should start with capital letter and atleast have 8 charcters and maximum of 16 charcters",
              },
            })}
            onKeyUp={getUserData}
            id="password"
            type="password"
            name="password"
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p>{message}</p>}
          />
          <label htmlFor="password">Password</label>
          
        </div>
        <p>Dont have an Account? <Link to='/register' className="text-info fs-5" >Register</Link> Now for Free!</p>

        <button href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {loading ? <SlRefresh className="icon-spin" /> : "Login"}
        </button>
      </form>
    </div>
  </div>
    
  </>);
};

export default Login;
