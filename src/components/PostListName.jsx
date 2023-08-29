import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../API";
import { newPost } from "../API";
import { useState } from "react";

const COHORT = "2306-ghp-et-web-ft-sf";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVkMmNlMzIxZDlkYjAwMTQ2YTBkZjQiLCJ1c2VybmFtZSI6Im9rIiwiaWF0IjoxNjkzMjc1MzcyfQ.2PyrLDNLPlxovK_w2bbkaGOBV-LcFBsE74v_RmqBahU"


export default function PostListName({ post, setPosts }) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");


  async function handleDelete(postId) {

  try {
    const headers = new Headers();
    const encodedToken = encodeURIComponent(token);
    headers.append('Authorization', `Bearer ${encodedToken}`);

    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: 'DELETE',
      headers: headers,
    });

    const result = await response.json();
    if (result.success) {
     
      setPosts(prevPosts => prevPosts.filter(post => post._id !== postId));
      console.log('yaaaaay byebye post');

    } else {
      console.error('oopsie', result.error.message);
    }
  } catch (error) {
    console.error('oooops', error);
  }
}







  async function handleEdit() {
    event.preventDefault();
    // const isLoggedIn = this.state.isLoggedIn;
    try {
      const result = await updatePost();
      console.log(result);
      navigate("/AllPosts");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="posts">
      <figure>
        <div className="item" key={post._id}>
          <p>{post.username}</p>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <p>Price: {post.price}</p>
          <p>Location: {post.location}</p>


        </div>
      </figure>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <button onClick={() => handleDelete(post._id)}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}