import React from 'react'
import requireAuth from './requireAuth'

const Products = () => {
    return (
        <h1 style={{ textAlign: "center"}}>Products</h1>
    )
}

export default requireAuth(Products)