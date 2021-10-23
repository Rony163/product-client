import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>Products available: {products.length}</h1>
            <ul>
                {
                    products.map(product => <li key={product._id}>
                        Name:: {product.name} , Price:: {product.price} ,Quantity:: {product.quantity}
                        <button>Update</button>
                        <button>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Products;