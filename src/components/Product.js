import React, { useEffect, useState } from "react";
import axios from "axios";
import { VscLocation } from "react-icons/vsc";

export default function Product() {
  const [product, setProduct] = useState([]);

  const url =
    "https://gardien.tokodistributor.co.id/api-web/v2/product-recommendation?page=1";
  useEffect(() => {
    axios.get(`${url}`).then((response) => {
      const listProduct = response.data.data;
      //   console.log(listProduct);
      setProduct(listProduct);
    });
  }, []);
  return (
    <div>
      <h1 className="font-semibold py-2">Let's Shopping</h1>
      <div className="grid mobile:grid-cols-2 tablet:grid-cols-4 mobile:gap-x-4 laptop:grid-cols-6 mobile:justify-items-center tablet:justify-items-stretch">
        {product.map((items, index) => {
          return (
            <div
              className=" cursor-pointer hover:scale-105 border-2 border-gray-100 rounded mobile:mb-3"
              key={index}
            >
              <div
                className="mobile:w-36 mobile:h-44 laptop:w-full bg-gray-500 rounded-t bg-cover"
                style={{ backgroundImage: `url(${items.image_uri})` }}
              ></div>
              <p className="font-medium text-ellipsis overflow-hidden">
                {items.mainmenu_name}
              </p>
              <div className="flex flex-row pb-2">
                <div className="my-auto">
                  <span>
                    <VscLocation />
                  </span>
                </div>
                <div>
                  <span>{items.location}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
