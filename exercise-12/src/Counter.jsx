import {useState} from 'react'

const Counter = () => {
   const [count, setCount] = useState(0);
  const Decrease = () => {
    setCount((pre) => pre - 1);
  };
  const Increase = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Count:{count}</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          disabled={count === 0}
          style={{
            borderRadius: "10px",
            padding: "10px",
            width: "100px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            backgroundColor: count ===0 ? "pink" :  "red",
            color: "white",
            cursor: count === 0 ? "not-allowed" : "pointer",
          }}
          onClick={Decrease}
        >
          Decrement
        </button>
        <button
          style={{
            borderRadius: "10px",
            padding: "10px",
            width: "100px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            backgroundColor: "green",
            color: "white",
            cursor: "pointer",
          }}
          onClick={Increase}
        >
          Increment
        </button>
      </div>
    </>
  );
}

export default Counter;
