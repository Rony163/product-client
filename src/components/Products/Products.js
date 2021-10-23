import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, You wana delete?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully delete');
                        const remainingItem = products.filter(product => product._id !== id);
                        setProducts(remainingItem);
                    }
                })
        }
    }
    return (
        <div>
            <h1>Products available: {products.length}</h1>
            <ul>
                {
                    products.map(product => <li key={product._id}>
                        Name:: {product.name} , Price:: {product.price} ,Quantity:: {product.quantity}
                        <button>Update</button>
                        <button onClick={() => handleDeleteProduct(product._id)}>X</button>
                    </li>)
                }
            </ul>
        </div >
    );
};

export default Products;