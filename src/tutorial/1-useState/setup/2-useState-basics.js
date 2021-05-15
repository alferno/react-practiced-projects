import React, { useState } from 'react';

const UseStateBasics = () => {
  const [value, setValue] = useState('random text')
  const handleClick = () => {
    if (value === 'random text') {
      setValue('Hello world')
    } else {
      setValue('random text')
    }
  }
  return (
    <>
      <h1>{value}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
    </button>
    </>
  )
};

export default UseStateBasics;
