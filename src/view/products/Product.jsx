import React from 'react'
import useProduct from './useProduct';

const Product = () => {
    const { } = useProduct();
    return (
        <>
            <h1>Product Title</h1>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam porro quibusdam ducimus, cum laudantium ratione sed doloribus labore quis nemo in, cupiditate corrupti, perspiciatis nobis repellendus alias. Magnam, facilis expedita!</p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3">
                Get Started
            </button>
        </>

    )
}

export default Product;