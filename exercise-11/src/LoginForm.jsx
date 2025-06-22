import { useState } from "react";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const HandleLogin=(e)=>{
     e.preventDefault();
    if(userName && password){
        setIsLogin(true)
    }
  }

  const HandleLogout=()=>{
    setPassword('');
    setUserName('');
    setIsLogin(false)
  }

if(isLogin){
    return(
        <div>
         <h1>Welcome, {userName}!</h1>
        <button onClick={HandleLogout}>Logout</button>
        </div>
    )
}
  return (
    <>
    <form onSubmit={HandleLogin}>
      <h2>Login Page</h2>
      <div>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          placeholder="Enter the Username"
          value={userName}
          required
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter the Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button>Login</button>
    </form>
    </>
  );
};

export default LoginForm;
