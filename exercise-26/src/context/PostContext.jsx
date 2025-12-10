import { createContext, useState } from "react";

export const PostContext=createContext();

const PostProvider=({children})=>{
    const [posts,setPosts]=useState([
         { id: 1, title: 'Introduction to React', content: 'Content of post 1' },
    { id: 2, title: 'Understanding React Router', content: 'Content of post 2' },
    { id: 3, title: 'React Hooks in Depth', content: 'Content of post 3' },
    ]);

    const addPost = (post) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      { ...post, id: prevPosts.length + 1 },
    ]);
  };
    return (
        <PostContext.Provider value={{posts,addPost}}>
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider;