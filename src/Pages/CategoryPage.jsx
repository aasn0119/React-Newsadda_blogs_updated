import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
const CategoryPage = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const category = location.pathname.split("/").at(-1);
  return (
    <div className="w-11/12 max-w-[500px] flex flex-col mt-20 mb-16">
      <Header />
      <div className="flex ">
        <div className="border-2 border-gray-300 gap-x-4 px-3 rounded-md">
          <button onClick={() => navigation(-1)}>Back</button>
        </div>
        <h2 className="ml-[9px] mt-[2px]">
          Blogs On <span className="font-bold underline">{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default CategoryPage;
