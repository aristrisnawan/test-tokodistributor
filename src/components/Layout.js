import React from "react";
import Banner from "./Banner";

function Layout() {
  return (
    <div className="mobile:px-3 tablet:px-7 laptop:px-14">
      <h1>Search</h1>
      <Banner />
    </div>
  );
}

export default Layout;
