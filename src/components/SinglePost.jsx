import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchSinglePost } from "../API";
import PostDetail from "./PostDetail";

export default function SinglePost() {

  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSinglePost() {
      const APIResponse = await fetchSinglePost(id);
      if (APIResponse.success) {
        setPost(APIResponse.data.post);
      } else {
        setError(error.message);
      }
    }
    getSinglePost();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {post && <PostDetail post={post} />}
    </div>
  );
}