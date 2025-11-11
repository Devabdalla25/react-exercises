import React, { useContext } from 'react'
import LanguageContext from './LanguageContext'
const Greeting = () => {

  const Language=useContext(LanguageContext);

  const Greating={
    en:'Hello!',
    es:'~Holla!'
  }
  return <h1>{
    Greating[Language]
  }</h1>
}

export default Greeting