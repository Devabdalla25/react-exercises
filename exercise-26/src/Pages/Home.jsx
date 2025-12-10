import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PostContext } from "../context/PostContext";

const Home = () => {
  const { posts } = useContext(PostContext);
  const navigate = useNavigate();
  const location = useLocation();

  const urlSearchValue = new URLSearchParams(location.search);
  const Query = urlSearchValue.get("search") || "";
  const [Search, setSearch] = useState(Query);

  useEffect(() => {
    navigate(`/?search=${Search}`);
  }, [Search, navigate]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(Search.toLowerCase())
  );

  return (
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md space-y-6">
      <h3 className="font-semibold text-xl">Blog posts</h3>

      <input
        type="text"
        name="search"
        placeholder="Search posts"
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-lg border-2 border-blue-300 outline-blue-500 p-4"
      />

      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
