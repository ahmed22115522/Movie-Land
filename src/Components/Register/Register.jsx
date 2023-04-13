import React, { useState } from "react";
import "./Register.scss";
import axios from "axios";
import { SlRefresh } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
const Register = () => {
  let {register,handleSubmit,formState: { errors }} = useForm();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    password: "",
  });

  const [inputError, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function getUserData(e) {
    let myUser = { ...user };
    let inputName = e.target.name;
    myUser[inputName] = e.target.value;
    setUser(myUser);
  }

  let navigate = useNavigate();

  async function sendUserData() {
    let { data } = await axios.post(
      "https://route-movies-api.vercel.app/signup", user
    );
    if (data.message == "success") {
      setLoading(false);
      navigate("/login");
    } else {
      setError(data.errors.email.message);
      setLoading(false);
    }
  }

  function submitRegistrationForm() {
    setLoading(true);
    sendUserData();
  }

  return (<>
    <div className="container">
    <div className="login-box my-4">
      <h2 className="mb-5">Registeration Form</h2>

      <form onSubmit={handleSubmit(submitRegistrationForm)}>
        <div className="user-box">
          <input
            {...register("first_name", { required: "First Name Is Not Valid" })}
            onKeyUp={getUserData}
            id="first_name"
            type="text"
            name="first_name"
          />
          <ErrorMessage
            errors={errors}
            name="first_name"
            render={({ message }) => <p>{message}</p>}
          />
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="user-box">
          <input
            {...register("last_name", { required: "Last Name Is Not Valid" })}
            onKeyUp={getUserData}
            id="last_name"
            type="text"
            name="last_name"
          />
          <ErrorMessage
            errors={errors}
            name="last_name"
            render={({ message }) => <p>{message}</p>}
          />
          <label htmlFor="last_name">Last Name</label>
        </div>
        <div className="user-box">
          <input
            {...register("age", { required: "Age Is Not Valid" })}
            onKeyUp={getUserData}
            id="age"
            type="number"
            name="age"
          />
          <ErrorMessage
            errors={errors}
            name="age"
            render={({ message }) => <p>{message}</p>}
          />
          <label htmlFor="age">Age</label>
        </div>
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
          <label htmlFor="text">email</label>
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

        {inputError.length > 0 ? (
          <div className="alert alert-danger" role="alert">
            <strong>{"This " + inputError}</strong>
          </div>
        ) : (
          ""
        )}

        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {loading ? <SlRefresh className="icon-spin" /> : "Register"}
        </button>
      </form>
    </div>
    </div>

  </>);
};

export default Register;
