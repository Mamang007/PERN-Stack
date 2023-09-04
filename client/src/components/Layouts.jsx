/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
import styles from "./index.module.css";

const Layouts = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layouts;
