import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateProducts = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    // Update Product
    const handleNameChange = e => {
        const updateName = e.target.value;
        const name = { name: updateName, price: product.price, quantity: product.quantity };
        setProduct(name);
    }
    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const price = { name: product.name, price: updatePrice, quantity: product.quantity };
        setProduct(price);
    }
    const handleQuantityChange = e => {
        const updateQuantity = e.target.value;
        const quantity = { name: product.name, price: product.price, quantity: updateQuantity };
        setProduct(quantity);
    }


    const handleUpdateProduct = e => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Product updated succesfully');
                    setProduct({});
                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <h2>You can update your products here.</h2>
            <p><small>Your id is: {id}</small></p>
            Product Name: {product.name} {product.price} {product.quantity}
            <form onSubmit={handleUpdateProduct}>
                <input type="text" onChange={handleNameChange} value={product.name || ''} />
                <br />
                <input type="number" onChange={handlePriceChange} value={product.price || ''} />
                <br />
                <input type="number" onChange={handleQuantityChange} value={product.quantity || ''} />
                <br />
                <input type="submit" value="Update Product" />
            </form>
        </div>
    );
};

export default UpdateProducts;