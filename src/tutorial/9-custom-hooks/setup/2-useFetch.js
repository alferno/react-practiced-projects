import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [isError, setIsError] = useState(false)

    const getProducts = async () => {
        try {
            const response = await fetch(url)
            const products = await response.json()
            setProducts(products)
            setLoading(false)
        } catch (error) {
            setIsError(true)
            // throw new Error('error...')
        }


    }

    useEffect(() => {
        getProducts()
    }, [url])

    return { loading, products, isError }
};
