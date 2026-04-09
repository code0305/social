import React, { useEffect, useState } from "react";
import axios from "axios";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/post/user", {
          withCredentials: true, // ✅ important
        });

        if (res.data.success) {
          setPosts(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMyPosts();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">My Posts</h1>

      {posts.map((post) => (
        <div key={post._id} className="border p-4 mt-4">
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

export default MyPosts;