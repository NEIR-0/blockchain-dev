import * as React from "react";
import { Link } from "react-router-dom";
function ListSamples() {
  return (
    <>
      <section className="w-full h-screen pt-16 flex flex-col">
        <Link to="/cover_list/public_wallet">public wallet</Link>
        <Link to="/cover_list/private_wallet">private wallet</Link>
      </section>
    </>
  );
}

export default ListSamples;
