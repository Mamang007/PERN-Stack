import { useState } from "react";
import Layouts from "../components/Layouts";
import { onRegistration } from "../api/authApi";

const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await onRegistration(values);

      console.log(data.message);
      setError("");
      setValues({ email: "", password: "" });
    } catch (error) {
      setError(error.response.data.errors[0].msg);
      console.log(error.response.data.errors[0].msg);
      setSuccess("");
    }
  };

  return (
    <Layouts>
      <form onSubmit={(e) => onSubmit(e)}>
        <h1>Register</h1>
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
        <div>
          <p>{success}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </Layouts>
  );
};

export default Register;
