import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

const Createpost = () => {
  const { addPost } = useContext(PostContext);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const navigate = useNavigate();

  const HnadleAdd = (e) => {
    e.preventDefault();
    addPost({title:postTitle, content: postContent});
    navigate("/",{replace:true})
    setPostTitle("");
    setPostContent("")
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-6">
      <h3 className="font-semibold">Create a new post</h3>
      <form onSubmit={HnadleAdd}>
        <div>
          <label>
            Title
            <input
              type="text"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              placeholder="Enter title"
              className="p-4 w-full bg-gray-100 text-gray-800 mb-3  outline-blue-500 rounded-lg mt-2 border-blue-300 border-2"
            />
          </label>
        </div>
        <div className="mb-4">
          <label>
            Content
            <textarea
              rows="5"
              cols="30"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className=" w-full p-4 border-2 rounded-lg border-blue-200 outline-blue-500 mt-2"
            ></textarea>
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg p-4 bg-blue-400 text-white border-none"
        >
          Create post
        </button>
      </form>
    </div>
  );
};

export default Createpost;
