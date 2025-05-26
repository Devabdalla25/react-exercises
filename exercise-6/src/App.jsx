import { useState, useEffect } from 'react';

const App = () => {
  const [titleName, setTitleName] = useState("");
  const [greatting, setGreatting] = useState("Hello");

  useEffect(() => {
    {
      titleName ==="" ? document.title = "Welcome" :document.title=greatting + ", " +titleName; 
    
    }
  }, [titleName]);
  return (
    <div>
      <div>
        <h2>Enter Your Name</h2>
        <input 
          type="text" 
          placeholder="Enter Your Name" 
          value={titleName} 
          onChange={(e) => setTitleName(e.target.value)} 
        />
      </div>
      <div>
        <h2>Choose a Greeting</h2>
        <input 
          type="text" 
          placeholder="Choose Your Greeting" 
          value={greatting} 
          onChange={(e) => setGreatting(e.target.value)} 
        />
      </div>
    </div>
  );
};

export default App;
