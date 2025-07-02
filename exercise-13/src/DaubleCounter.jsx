import { useReducer } from "react";

const intialState = {
  Counter_A: 0,
  Counter_B: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_A":
      return { ...state, Counter_A: state.Counter_A + 1 };
    case "DECREMENT_A":
      return { ...state, Counter_A: state.Counter_A - 1 };
    case "INCREMENT_B":
      return { ...state, Counter_B: state.Counter_B + 1 };
    case "DECREMENT_B":
      return { ...state, Counter_B: state.Counter_B - 1 };
    case "RESET_ALL":
      return intialState;
    default:
      return state;
  }
};
const DaubleCounter = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <div style={{display:'flex', flexDirection:'column', gap:'10px', width:'100%', alignItems:'center',justifyContent:'center', height:'100vh',}}>
      <h2>Counter_A: {state.Counter_A}</h2>
      <button type="button" onClick={() => dispatch({ type: "INCREMENT_A" })} style={{width:'50PX'}}>
        +A
      </button>
      <button disabled={state.Counter_A ===0} type="button" onClick={() => dispatch({ type: "DECREMENT_A" })}style={{width:'50PX'}}>
        -A
      </button>
      <h2>Counter_B: {state.Counter_B}</h2>
      <button type="button" onClick={() => dispatch({ type: "INCREMENT_B" })}style={{width:'50PX'}}>
        +B
      </button>
      <button disabled={state.Counter_B ===0} type="button" onClick={() => dispatch({ type: "DECREMENT_B" })}style={{width:'50PX'}}>
        -B
      </button>
      <button type="button" onClick={() => dispatch({ type: "RESET_ALL" })} style={{width:'120PX', justifyContent:"center", alignItems:"center", height:"35PX", display:'flex', flexDirection:'row', borderRadius:'10px', border:"none"}}>
        RESET BOTH
      </button>
    </div>
  );
};

export default DaubleCounter;
