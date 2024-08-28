import * as React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="w-full h-14 bg-red-400 fixed">
        <Link to="/list_sample">list</Link>
      </nav>
    </>
  );
}

export default Navbar;
