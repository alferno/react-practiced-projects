import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'peter', age: 24, message: 'random text' })
  /* 
    const [name, setName] = useState('peter')
    const [age, setAge] = useState(24)
    const [msg, setMsg] = useState('random text') */

  const changeMessage = () => {
    if (person.message === 'random text') {
      setPerson({ ...person, message: 'New Message' })
    } else {
      setPerson({ ...person, message: 'random text' })
    }
  }

  return (
    <>
      <div className='container'>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.message}</h3>
        <button className="btn" onClick={changeMessage}>change message</button>
      </div>
    </>
  )
};

export default UseStateObject;
