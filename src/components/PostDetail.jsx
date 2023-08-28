import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../API";


export default function PostDetail({ post }) {
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      const result = await deletePost(post.id);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <figure>
        <img
          className={styles.img}
          src={post.imageUrl}
          alt="A pic of a furry player"
        />
        <figcaption>
          <p>Name: {post.title}</p>
          <p>Description: {post.description}</p>
        </figcaption>
      </figure>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
}