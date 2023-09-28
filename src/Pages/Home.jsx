import React from "react";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="w-11/12 max-w-[500px] py-3 flex flex-col gap-y-4 mt-16 mb-16">
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
