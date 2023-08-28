import { useState, useEffect } from "react";
import { fetchPosts } from "../API";
import PostListName from "./PostListName";
import NewPostForm from "./NewPostForm";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");

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
        post.content.toLowerCase().includes(searchParam)
      )
    : posts;
  return (
    <div>
      <div id="postsandsearch">
        <h3>Posts:</h3>
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
      </div>
      <NewPostForm posts={posts} setPosts={setPosts} />
      {error && <p>{error}</p>}
      {postsToDisplay.map((post) => {
        return <PostListName key={post.id} post={post} />;
      })}
    </div>
  );
}