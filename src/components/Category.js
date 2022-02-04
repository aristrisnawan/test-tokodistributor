import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "./url";

export default function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get(`${url}/home/box-category?with_staple=true`).then((respons) => {
      const listCategory = respons.data.data;
      //   console.log(listCategory);
      setCategory(listCategory);
    });
  });

  return (
    <div>
      <h1 className="font-semibold py-2">Category</h1>
      <div className="flex flex-row justify-between mobile:gap-4 laptop:gap-6 overflow-scroll pb-4">
        {category.map((items) => {
          return (
            <div
              key={items.category_id}
              className="text-center cursor-pointer hover:scale-105"
            >
              <div
                className="mobile:w-16 mobile:h-16 rounded bg-white bg-cover shadow-md"
                style={{ backgroundImage: `url(${items.icon})` }}
              ></div>
              <div>
                <span className="text-sm">{items.category_name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
