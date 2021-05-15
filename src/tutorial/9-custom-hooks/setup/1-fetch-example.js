import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-product'

const Example = () => {
  const { loading, products, isError } = useFetch(url)
  console.log(products);
  return (
    <div>
      <h2>{isError ? 'Error...' : loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
