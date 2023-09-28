import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="flex flex-col">
      <NavLink to={`/blog/${post.id}`}>
        <span className="text-lg font-extrabold">{post.title}</span>
      </NavLink>
      <p className="text-[12px]">
        By
        <span className="italic"> {post.author} </span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-bold underline">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-[12px]">Posted on {post.date}</p>
      <p className="text-xs my-2">{post.content}</p>
      <div className="flex gap-x-1">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="text-blue-500 underline font-bold text-[8px]">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
