import React, { useRef } from 'react';

const AddProducts = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();

    const handleAddProduct = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;

        const newProduct = { name, price, quantity };

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product added succesfully');
                    e.target.reset();
                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <h1>Add products</h1>
            <form onSubmit={handleAddProduct}>
                <input type="text" ref={nameRef} placeholder="Product name" />
                <br />
                <input type="number" ref={priceRef} placeholder="Product price" />
                <br />
                <input type="number" ref={quantityRef} placeholder="Product Quantity" />
                <br />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProducts;