import React, { useContext } from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navi = () => {

  const {logOut,isAuthenticated}=useContext(AuthContext);
  const navi=useNavigate();
  const HandleLogOut=()=>{
    logOut();
    navi("/login",{replace:true})
  }
  return (
    <div className="flex flex-col p-6  border-b-2 border-gray-400 rounded-2xl gap-6">
      <h3 className="font-bold text-xl"> React blogs</h3>
      <nav className="space-x-4">
        <NavLink
          to="/"
            end
              className={({isActive})=>`${isActive?"py-2 px-4 bg-blue-400 rounded-lg text-white font-semibold":"text-gray-800"}`}
        >
          Home
        </NavLink>
      
        {
          isAuthenticated ?(
            <>
        <NavLink
          to="/createpost"
          className={({isActive})=>`${isActive?"py-2 px-4 bg-blue-400 rounded-lg text-white font-semibold":"text-gray-800"}`}
        >
          Create Post
        </NavLink>
        <button
          className="py-2 px-4 bg-rose-400 rounded-lg text-white font-semibold"
          onClick={HandleLogOut}
        >
          Logout
        </button>
            </>
          ):  <NavLink 
          to="/login"
          className={({isActive})=>`${isActive?"py-2 px-4 bg-blue-400 rounded-lg text-white font-semibold":"text-gray-800"}`}
        >
          Login
        </NavLink>
        }
      </nav>
    </div>
  );
};

export default Navi;
