/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { useSnapshot } from "valtio";
import state from "../store";
import { onLogout } from "../api/authApi";

const Navbar = () => {
  const snap = useSnapshot(state);

  const handleClick = async () => {
    try {
      const { data } = await onLogout();
      state.isAuth = false;
      localStorage.setItem("isAuth", "false");
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
    }
  };

  return (
    <nav>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
        <div>
          <NavLink to="/">
            <h2>Home</h2>
          </NavLink>
        </div>

        {snap.isAuth ? (
          <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
            <NavLink to="/dashboard" style={{ margin: "0 5px" }}>
              <h2>Dashboard</h2>
            </NavLink>
            <NavLink to="/" style={{ margin: "0 5px" }}>
              <h2 onClick={() => handleClick()}>Log out</h2>
            </NavLink>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
            <NavLink to="/login" style={{ margin: "0 5px" }}>
              <h2>Login</h2>
            </NavLink>
            <NavLink to="/register" style={{ margin: "0 5px" }}>
              <h2>Register</h2>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
