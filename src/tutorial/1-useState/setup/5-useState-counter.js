import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0)

  //Not Working, Find a new way !!!
  /*   const clickHandle = (e) => {
      if (e.target.value === 'count +') {
        setCount(count + 1)
      } else if (e.target === 'count -') {
        setCount(count - 1)
      } else {
        setCount(0)
      }
    }
   */

  const clickHandle = () => {
    setTimeout(() => {
      // setCount(count+1)
      setCount((prevCount) => {
        return prevCount + 1
      })
    }, 2000)
  }

  return (
    <>
      <h3>{count}</h3>
      <button className="btn" onClick={() => setCount(count + 1)}>count +</button>
      <button className="btn" onClick={() => setCount(count - 1)}>count -</button>
      <button className="btn" onClick={() => setCount(0)}>reset</button>
      <section style={{ margin: '4rem 0' }}>
        <h3>counter :- {count}</h3>
        <button className="btn" onClick={clickHandle}>
          count with delay</button>
      </section>
    </>
  )
};

export default UseStateCounter;
