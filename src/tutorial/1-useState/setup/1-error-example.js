import React, { useState } from 'react';

const ErrorExample = () => {
  //  const [title, setTitle] = useState('Random title')
  let title = 'random text'
  const handleClick = () => {
    //setTitle('hello people')
    title = 'hello'
  }

  return (
    <>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </>
  )
};

export default ErrorExample;
