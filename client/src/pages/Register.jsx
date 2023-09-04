import { useState } from "react";
import Layouts from "../components/Layouts";
import { onRegistration } from "../api/authApi";
import styles from "./index.module.css";

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

      setSuccess(data.message);
      setError("");
      setValues({ email: "", password: "" });
    } catch (error) {
      setError(error.response.data.errors[0].msg);
      setSuccess("");
    }
  };

  return (
    <Layouts>
      <form onSubmit={(e) => onSubmit(e)}>
        <h1>REGISTER</h1>
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <input onChange={(e) => onChange(e)} type="email" id="email" name="email" value={values.email} placeholder="Your Email Here..." required />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Password</label>
          <input onChange={(e) => onChange(e)} type="password" id="password" name="password" value={values.password} placeholder="Your Password Here..." required />
        </div>
        <div className={styles.alert}>
          {error !== "" ? <p>{error}</p> : <p>{success}</p>}
          <button type="submit">Submit</button>
        </div>
      </form>
    </Layouts>
  );
};

export default Register;
