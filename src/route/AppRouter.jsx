import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, Product, Products } from '../pages';
import { Header } from '../ui';



export const AppRouter = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Routes >
                    <Route path="/" element={<Home />} />
                    <Route path='items' element={<Products />} />
                    <Route path='items/:id' element={<Product />} />
                </Routes>
            </div>
        </>
    )
}