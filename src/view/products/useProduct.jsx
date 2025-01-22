"use client"

import { API_ENDPOINTS } from '@/api/api-endpoints'
import React, { useEffect } from 'react'

const useProduct = () => {
    useEffect(() => {

        fetch(API_ENDPOINTS.PRODUCTS)
    }, [])
    return (
        <>
            <h1>useProduct</h1>
        </>
    )
}

export default useProduct;  