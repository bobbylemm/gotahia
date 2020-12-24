import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";

const Main = () => {
  return (
    <>
      <Route component={Home} />
    </>
  );
};
export default Main;
