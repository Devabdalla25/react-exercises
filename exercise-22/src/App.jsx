import React, { useState } from 'react'

const App = () => {
  const [formData,setFormData]=useState({
    username:'',
    email:'',
    password:'',
    checkbox:false,
    select:'',
  });
  const HandleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
  }

  const HandleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <form onSubmit={HandleSubmit}>
      <input type="text" placeholder='enter username'name='username' value={formData.username} onChange={HandleChange}/>
      <input type="email" placeholder='enter email' name='email' value={formData.email} onChange={HandleChange} />
      <input type="password" placeholder='enter password' name='password' value={formData.password} onChange={HandleChange} />
      <label htmlFor="checkbox"> <input type="checkbox" name='checkbox' checked={formData.checkbox} onChange={HandleChange}/>check Box</label>
      
      <select value={formData.select} onChange={HandleChange} name='select'>
       
        <option value="">Selcet option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <button type="submit">submit</button>
    </form>
  )
}

export default App


