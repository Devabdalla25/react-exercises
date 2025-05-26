import { useState } from 'react';

const ToggleButton = () => {
  const [toggleButton, setToggleButton] = useState(false);

  const switchToggleButton = () => {
    setToggleButton(!toggleButton);
  };https://github.com/Devabdalla25/react-exercises.git

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
