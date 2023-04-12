import React, { useState } from 'react'
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import { products } from '../data';
import { ProductsContainer } from '../styling/productShopStyling';

const Products = ({ addToCart, availableStock, searchTerm, sortingOptionList }) => {

    const productListUnsorted = products.slice();

    if (sortingOptionList === "name") {
        const sortingByName = products.sort((prod1, prod2) => (prod1.name > prod2.name) ? 1 : -1)
        return (
            <ProductsContainer>
                {sortingByName.filter((product) => {
                    if (searchTerm === '')
                        return <ProductItem product={product} addItemToCart={addItemToCart} availableStock={availableStock} />
                    else if (product.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        return <ProductItem product={product} addItemToCart={addItemToCart} availableStock={availableStock} />
                }).map((product, index) => <ProductItem key={index} product={product} index={index} addItemToCart={addToCart} availableStock={availableStock} />)}
            </ProductsContainer>
        )
    }

    else if (sortingOptionList === "price") {
        const sortingByPrice = products.sort((prod1, prod2) => (prod1.price > prod2.price) ? 1 : -1)
        return (
            <ProductsContainer>
                {sortingByPrice.filter((product) => {
                    if (searchTerm === '')
                        return <ProductItem product={product} addItemToCart={addItemToCart} availableStock={availableStock} />
                    else if (product.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        return <ProductItem product={product} addItemToCart={addItemToCart} availableStock={availableStock} />
                }).map((product, index) => <ProductItem key={index} product={product} index={index} addItemToCart={addToCart} availableStock={availableStock} />)}
            </ProductsContainer>
        )

    }

    else {
        return (
            <ProductsContainer >
                {productListUnsorted.filter((product) => {
                    if (searchTerm === '')
                        return <ProductItem product={product} addItemToCart={addItemToCart} availableStock={availableStock} />
                    else if (product.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        return <ProductItem product={product} addItemToCart={addItemToCart} availableStock={availableStock} />
                }).map((product, index) => (
                    <ProductItem key={index} product={product} index={index} addItemToCart={addToCart} availableStock={availableStock} />
                ))}
            </ProductsContainer>
        )
    }
}

Products.propTypes = {
    addToCart: PropTypes.func, 
    availableStock: PropTypes.number, 
    searchTerm: PropTypes.string, 
    sortingOptionList: PropTypes.func
}

export default Products
