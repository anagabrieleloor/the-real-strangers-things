import React, { useState } from "react";
import { newPost } from "../API";


export default function NewPostForm({ posts, setPosts }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [deliver, setDeliver] = useState(false);
  const [error, setError] = useState(null);


  async function handleSubmit(e) {
    e.preventDefault();
    const APIData = await newPost(title, description, price, deliver);
    if (APIData.success) {
      console.log("New Post: ", APIData.data.post);

      // Resetting all players manually
      const newPostList = [...posts, APIData.data.post];
      setPosts(newPostList);

    //   setName("");
    //   setBreed("");
    setTitle("");
    setDescription("");
    setPrice("");
    setDeliver(false);
    
    } else {
      setError(APIData.error.message);
    }
  }

  return (
    <div id="form">
   
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <h2>create a new post</h2>
      <label>item: </label>
        <input 
        value={title}
        type="text"
        name="title"
        placeholder="item title"
        onChange={(e) => setTitle(e.target.value)}
        /> <br />
        <label>description: </label>
        <input 
        value={description}
        type="text"
        name="description"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
        /><br />
        <label>price: </label>
        <input 
        value={price}
        type="text"
        name="price"
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
        /><br />
        <label>delivery: </label>
        <input 
        value={deliver}
        type="checkbox"
        name="deliver"
        placeholder="deliver"
        onChange={() => {
            setDeliver(!deliver);
          }} /> <br />
        <button>Submit</button>
        <button onClick={() => window.location.reload(true)}>Refresh</button>
        </form>
        </div>
  );
}
