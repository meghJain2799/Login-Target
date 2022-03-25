import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {

 const [userName, setUserName] = useState("")
 const [password, setPassword] = useState("")
const navigate = useNavigate()
 const loginUser = "sntuser";
 const loginPass = "Snt@1234"

 const handleChange = (e) => {
   setUserName(e.target.value)
   console.log(userName)
 }
 const handlePass = (e) => {
    setPassword(e.target.value)
    console.log(password)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const onSubmit = () => {
      if(userName === loginUser && password === loginPass){
          alert("login Successful")
          localStorage.setItem("username", userName)
          localStorage.setItem("password", password)
          navigate("/home")
      }else{
          alert("login Failed")
      }
      reset()
  };



  return (
    <div className="container form_body">
      <div className="form_main">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-primary">Login Form</h3>
          <div>
            <label className="form-label">Username:</label>
            <input
            className="w-100"
              type="text"
              {...register("username", { required: "username is required" })}
              onKeyUp={() => {
                trigger("username");
              }}
              onChange={handleChange}
            />
            {errors.username && (
              <small className="text-danger">{errors.username.message}</small>
            )}
          </div>
          <div>
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="w-100"
              {...register("password", {
                required: "password is required",
                pattern: {
                  value:
                    "^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})",
                  message: "Password is incorrect",
                },
                minLength: {
                  value: 8,
                  message: "Password must be minimum 8 characters",
                },
              })}
              onKeyUp={() => {
                trigger("password");
              }}
              onChange={handlePass}
            />
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
          </div>
         <div className="text-center my-2">
         <button type="submit" className="btn btn-primary">
            {" "}
            Login
          </button>
         </div>
         <div className="d-flex">
         <div><button className="btn btn-success mx-2">Register</button></div>
         <div><button className="btn btn-danger mx-2">Fotgot password?</button></div>
         </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
