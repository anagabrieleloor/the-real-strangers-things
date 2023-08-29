import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../API";



export default function PostListName({ post }) {
  const navigate = useNavigate();

  async function handleDelete(event) {
    event.preventDefault();
    // const isLoggedIn = this.state.isLoggedIn;
    try {
      const result = await deletePost(post.id);
      console.log(result);
      navigate("/posts");
    } catch (error) {
      console.error(error);
    }
  }
  // async function handleEdit() {
  //   event.preventDefault();
  //   // const isLoggedIn = this.state.isLoggedIn;
  //   try {
  //     const result = await editPost();
  //     console.log(result);
  //     navigate("/AllPosts");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <div>
      <figure>
        <div className="item" key={post.id}>
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
    </figure>
           <button onClick={handleDelete}>Delete</button>
           {/* <button onClick={handleEdit}>Edit</button> */}
          </div>
  );
}