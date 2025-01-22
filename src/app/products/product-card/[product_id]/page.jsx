"use client";

import { useParams } from 'next/navigation';

import React from 'react'

const ProductId = () => {
    const [product_id] = useParams();

    console.log(product_id, "router")
    return (
        <div>ProductId</div>
    )
}

export default ProductId;