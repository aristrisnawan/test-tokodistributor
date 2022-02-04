import React from "react";

export default function Product() {
  return (
    <div>
      <h1 className="font-semibold py-2">Let's Shopping</h1>
      <div className="grid mobile:grid-cols-2 mobile:gap-x-4 mobile:justify-items-center">
        <div className=" cursor-pointer hover:scale-105">
          <div className="mobile:w-36 mobile:h-44 bg-black rounded"></div>
          <p>Nama Barang</p>
          <p>Rp. 20.000</p>
        </div>
        <div className="hover:scale-105">
          <div className="mobile:w-36 mobile:h-44 bg-black rounded"></div>
          <p>Nama Barang</p>
          <p>Rp. 20.000</p>
        </div>
      </div>
    </div>
  );
}
