import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const { logIn } = useContext(AuthContext);
  const nav=useNavigate();
  const HandleLogIn=()=>{
    logIn()
    nav("/",{replace:true})
  }
  return (
    <div>
      <h2>Login</h2>
      <p>You must log in to access the Create Post page.</p>
      <button
        className="py-2 px-4 bg-blue-400 rounded-lg text-white font-semibold"
        onClick={HandleLogIn}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
