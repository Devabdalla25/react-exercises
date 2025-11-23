import { useState, useEffect } from 'react';

const App = () => {
 const [TiltileName,setTitleName]=useState("");
 const [Greating, SetGreating]=useState(" Hellow");

 useEffect(()=>{
  TiltileName ===" "? document.title = "Welcome!":document.title = Greating+', '+TiltileName;
 },[TiltileName])
  return (
    <div>
      <div>
        <input type="text" value={TiltileName} placeholder='Enter your name' onChange={(e)=> setTitleName(e.target.value)}/>
      </div>
      <div>
        <h1> Write Your Greating Here</h1>
        <input type="text" value={Greating} placeholder='Write your greating here' onChange={(e)=> SetGreating(e.target.value)}/>
      </div>
    </div>
  );
};

export default App;


