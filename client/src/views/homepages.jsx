import * as React from "react";
import Navbar from "../component/navbar";
import { Outlet } from "react-router-dom";

function HomePages() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default HomePages;
