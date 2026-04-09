import React, { useEffect, useState } from "react";
import axios from "axios";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/post/all");
        if (res.data.success) {
          setPosts(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">All Posts</h1>

      {posts.map((post) => (
        <div key={post._id} className="border p-4 mt-4">
          <h2>{post.userId?.name}</h2>
          <p>{post.caption}</p>
          <p>{post.location}</p>

          {post.media.map((m, i) => (
            <img
              key={i}
              src={`http://localhost:5000/${m.mediaUrl}`}
              alt=""
              className="w-40"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AllPosts;