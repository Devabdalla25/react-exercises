import { useState, useEffect } from "react";

const App = () => {
  const [position, setPosition] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });
 

  useEffect(() => {
    const HandleResise = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", HandleResise);

    return () => {
      window.removeEventListener("mousemove", HandleResise);
    };
  }, [position]);


  return (
    <div>
      <h1>Mouse X: {position.x}px</h1>
      <h1>Mouse Y: {position.y}px</h1>

    </div>
  );
};

export default App;
