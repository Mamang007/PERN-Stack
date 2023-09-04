/* eslint-disable react/prop-types */
import Navbar from "./Navbar";

const Layouts = ({ children }) => {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layouts;
