import { useState, useEffect } from "react";
import { fetchPosts } from "../API";
import PostListName from "./PostListName";
import NewPostForm from "./NewPostForm";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Link} from "react-router-dom";


export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVkMmNlMzIxZDlkYjAwMTQ2YTBkZjQiLCJ1c2VybmFtZSI6Im9rIiwiaWF0IjoxNjkzMjY1MTIzfQ.Tj3wv66zfgJGje3kGgDFfNHI1nvAAELkS7APtVWYDj4"

  useEffect(() => {
    async function getAllPosts() {
      const APIResponse = await fetchPosts();
      if (APIResponse.success) {
        setPosts(APIResponse.data.posts);
      } else {
        setError(APIResponse.error.message);
      }
    }
    getAllPosts();
  }, []);

  const postsToDisplay = searchParam
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchParam)
      )
    : posts;
  return (
    <div>
      <div id="postandsearch">
        <h3>Posts:</h3>
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
        {/* <Link to ="/newpost">Make A New Post</Link> */}
      </div>
      <NewPostForm posts={posts} setPosts={setPosts} />
      {error && <p>{error}</p>}
      {postsToDisplay.map((post) => {
        return <PostListName key={post.id} post={post} token={token} />;
      })}
    </div>
  );
}