import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Footer from "./Footer";
import Product from "./Product";
import Search from "./Search";

function Layout() {
  return (
    <div className="mobile:px-3 tablet:px-7 laptop:px-11">
      {/* <Search /> */}
      <Banner />
      <Category />
      <Product />
      <Footer />
    </div>
  );
}

export default Layout;
