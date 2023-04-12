import React from 'react';
import PropTypes from 'prop-types';
import { AddCartButton, ProductDescr, ProductInfo, ProductItemContainer, ProductItemImage, ProductName, ProductPrice, ProductStock } from '../../styling/productShopStyling';

const ProductCatalogSingleItem = ({ productFromCatalog, addToCart }) => {
  return (
    <ProductItemContainer>
      <ProductItemImage src='https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
      <ProductInfo>
        <ProductName>{productFromCatalog.product_name}</ProductName>
        <ProductPrice>{productFromCatalog.product_price}</ProductPrice>
        <ProductDescr>{productFromCatalog.product_description}</ProductDescr>
        <ProductStock>{productFromCatalog.product_stock ? 'Left: ' + productFromCatalog.product_stock : "No stock"}</ProductStock>
      </ProductInfo>
      {productFromCatalog.product_stock ? <AddCartButton onClick={() =>addToCart(productFromCatalog)}>Add to Cart</AddCartButton> : null}
    </ProductItemContainer>
  )
}
ProductCatalogSingleItem.propTypes = {
  productFromCatalog: PropTypes.object,
  addToCart: PropTypes.func
}

export default ProductCatalogSingleItem;