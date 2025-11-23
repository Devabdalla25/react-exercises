import { useState } from 'react';

const ToggleButton = () => {
  const [toggleButton, setToggleButton] = useState(false);

  const switchToggleButton = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <div>
      <p>The button is: {toggleButton ? 'ON' : 'OFF'}</p>
      <button onClick={switchToggleButton}>
        Turn {toggleButton ? 'OFF' : 'ON'}
      </button>
    </div>
  );
};

export default ToggleButton;
