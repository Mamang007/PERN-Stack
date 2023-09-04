import { proxy } from "valtio";

const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem("isAuth");

  if (isAuth && JSON.parse(isAuth) === true) {
    return true;
  }

  return false;
};

const state = proxy({
  isAuth: userAuthFromLocalStorage(),
});

export default state;
