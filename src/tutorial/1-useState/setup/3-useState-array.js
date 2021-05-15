import React, { useState } from 'react';
import { data } from '../../../data';
import { FaTrash } from "react-icons/fa";

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const handleClick = (id) => {
    setPeople(people.filter((p) => p.id !== id))
  }

  return (
    <>
      {people.map((p) => {
        const { id, name } = p
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <FaTrash onClick={() => handleClick(id)} />
          </div>
        )
      })}
      <button type='button' className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  )
};

export default UseStateArray;
