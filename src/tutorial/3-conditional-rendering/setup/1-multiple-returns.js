import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('Default User')

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json()
        } else {
          setIsLoading(false)
          setIsError(true)
        }
      })
      .then((user) => {
        const { login } = user
        setUser(login)
        setIsLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  } else if (isError) {
    throw new Error('User not found, make sure you have correct api or data')
  } else {
    return (
      <div>
        <h1>{user}</h1>
      </div>
    )
  }
};

export default MultipleReturns;
