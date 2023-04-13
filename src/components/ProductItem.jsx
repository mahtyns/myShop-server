import React from 'react';
import PropTypes from 'prop-types';
import { ProductItemContainer, ProductItemImage, ProductInfo, ProductName, ProductPrice, ProductDescr, AddCartButton, ProductStock } from '../styling/productShopStyling';

const Product = ({ product, addItemToCart }) => {

    const ButtonContainer = <AddCartButton onClick={() => { addItemToCart(product) }}>Add to cart</AddCartButton>

    return (
        <ProductItemContainer data-id={product.id} data-category={product.category}>
            <ProductItemImage src={product.img} />
            <ProductInfo>
                <ProductName>
                    {product.name}
                </ProductName>
                <ProductPrice>{product.price}€</ProductPrice>
                <ProductDescr>{product.text}</ProductDescr>
                {/* {stock ? <Stock>Left: {stock}</Stock> : null} */}
                <ProductStock>{product.stock ? 'Left: ' + product.stock : "No stock"}</ProductStock>
            </ProductInfo>

            {/* {stock ? ButtonContainer : null} */}
            {product.stock ? ButtonContainer : null}
        </ProductItemContainer>
    )
}

Product.propTypes = {
    product: PropTypes.object,
    availableStock: PropTypes.number,
    addItemToCart: PropTypes.func
}

export default Product;
