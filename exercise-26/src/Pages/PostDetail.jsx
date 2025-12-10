import React, { useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { PostContext } from "../context/PostContext";

const PostDetail = () => {
  const { posts } = useContext(PostContext);
  const { postId } = useParams();
  const navigate = useNavigate();

  const currentId = parseInt(postId);
  const post = posts.find((p) => p.id === currentId);

  if (!post) {
    return <p>Post not found.</p>;
  }

  const handleNavigation = (direction) => {
    const newId = direction === "next" ? currentId + 1 : currentId - 1;
    const newPost = posts.find((p) => p.id === newId);

    if (newPost) {
      navigate(`/posts/${newId}`);
    }
  };

  return (
    <div className="bg-gray-100 text-gray-800 shadow-md rounded-lg p-4 flex flex-col gap-2">
      <h2 className="font-semibold">{post.title}</h2>
      <p>{post.content}</p>
      <div className="flex gap-4 p-2 mt-2">
        {currentId > 1 && (
          <button
            onClick={() => handleNavigation("prev")}
            className="py-2 px-4 rounded-lg shadow-md bg-rose-400 text-white font-semibold"
          >
            Previous
          </button>
        )}
        {currentId < posts.length && (
          <button
            onClick={() => handleNavigation("next")}
            className="py-2 px-6 rounded-lg shadow-md bg-green-400 text-white font-semibold"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
