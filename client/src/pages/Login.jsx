/* eslint-disable no-unused-vars */
import { useState } from "react";
import Layouts from "../components/Layouts";
import { onLogin } from "../api/authApi";
import state from "../store";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await onLogin(values);
      state.isAuth = true;
      localStorage.setItem("isAuth", "true");
    } catch (error) {
      setError(error.response.data.errors[0].msg);
    }
  };

  return (
    <Layouts>
      <form onSubmit={(e) => onSubmit(e)}>
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email Address :</label>
          <input onChange={(e) => onChange(e)} type="email" id="email" name="email" value={values.email} placeholder="Your Email Here..." required />
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input onChange={(e) => onChange(e)} type="password" id="password" name="password" value={values.password} placeholder="Your Password Here..." required />
        </div>

        <div>
          <p>{error}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </Layouts>
  );
};

export default Login;
