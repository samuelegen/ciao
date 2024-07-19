import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import { useProductContext } from "../providers/ProductContext";

function Cart() {
    const { products, setProducts } = useProductContext();

    const handleDelete = (id) => {
        setProducts((prevState) => prevState.filter((product) => product.id != id));
    };

    // useEffect(() => {
    //     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    //     setCart(storedCart);
    // }, []);

    // const removeFromCart = (id) => {
    //     const updatedCart = cart.filter(item => item.id !== id);
    //     setCart(updatedCart);
    //     localStorage.setItem('cart', JSON.stringify(updatedCart));
    // };

    return (
        <>
            <Navbar currentPage="cart" />
            <div className="flex flex-wrap mt-8 gap-3 justify-evenly">
                {products.length > 0 ? (
                    products.map((item) => (
                        <div key={item.id} className="group relative block overflow-hidden w-1/6">
                            <div className="flex flex-col h-full border border-gray-100 bg-white">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72 bg-cover"
                                />
                                <div className="relative p-6 flex-grow flex flex-col justify-between">
                                    <div>
                                        <h3 className="mt-4 text-lg font-medium text-gray-900">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1.5 text-sm text-gray-700">{`€${item.price}`}</p>
                                    </div>
                                    <button
                                        type="button"
                                        className="block w-full rounded bg-red-400 p-4 text-sm font-medium transition hover:scale-105"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Remove from Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
        </>
    );
}

export default Cart;
