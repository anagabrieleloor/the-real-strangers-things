import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostListName({ post }) {
  const navigate = useNavigate();
  return (
    <div>
       <p>{post.username}</p>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>Price: {post.price}</p>
            <p>Location: {post.location}</p>
      <button
        onClick={() => {
          navigate(`/${post.id}`);
        }}
      >
        See Details
      </button>
    </div>
  );
}