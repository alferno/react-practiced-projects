import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [person, setPerson] = useState({ name: 'peter', age: 24, msg: 'Random' })


  const style = {
    display: 'none'
  }

  useEffect(() => {
    console.log('Use Effect');
    /*   if (person.msg === 'Not Random') {
        document.title = `Message : ${person.msg}`
      } */
    document.title = `Message : ${person.msg}`
  }, [person.msg])

  const clickHandle = () => {
    if (person.msg === 'Random') {
      setPerson({ ...person, msg: 'Not Random' })
    } else {
      setPerson({ ...person, msg: 'Random' })
    }
  }

  return (
    <>
      <h3 style={person.msg === 'Not Random' ? null : style}>{person.name}</h3>
      <h3 onClick={() => setPerson({ ...person, age: 21 })}>{person.age}</h3>
      <h3>{person.msg}</h3>
      <button style={person.msg === 'Random' ? null : style} onClick={clickHandle} className="btn">
        Show name
      </button>
      <button style={person.msg === 'Not Random' ? null : style} onClick={clickHandle} className="btn">
        Hide name
      </button>
    </>
  )
};

export default UseEffectBasics;
