import React, { useState } from 'react'
import LanguageContext from './LanguageContext'
import Greating from './Greeting'

const App = () => {

  const [Language, setLanguage]=useState('en');

  const HandleLanguage=()=>{
    setLanguage((prelang)=>(prelang ==='en'?'es':'en'));
  }
  return (
    <LanguageContext.Provider value={Language}>
      <button onClick={HandleLanguage}>Switch to {Language ==='en' ? 'Spanish': 'English'}</button>
     <Greating/>
    </LanguageContext.Provider>
  )
}

export default App
