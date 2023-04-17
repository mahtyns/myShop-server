import React from 'react';
import PropTypes from 'prop-types';
import { AddCartButton, ProductDescr, ProductInfo, ProductItemContainer, ProductItemImage, ProductName, ProductPrice, ProductStock } from '../../styling/productShopStyling';

const ProductCatalogSingleItem = (props) => {
  return (
    <ProductItemContainer>
      <ProductItemImage src={props.productFromCatalog.product_url}/>
      <ProductInfo>
        <ProductName>{props.productFromCatalog.product_name}</ProductName>
        <ProductPrice>{props.productFromCatalog.product_price}€</ProductPrice>
        <ProductDescr>{props.productFromCatalog.product_description}</ProductDescr>
        <ProductStock>{props.productFromCatalog.product_stock ? 'Left: ' + props.productFromCatalog.product_stock : "No stock"}</ProductStock>
      </ProductInfo>
      {props.productFromCatalog.product_stock ? <AddCartButton 
      onClick={()=> {
          props.checkIfRepeatedInCart(props.productFromCatalog.product_id ? props.changeQuantityInCart(props.productFromCatalog) : props.addFirstToCart(props.productFromCatalog) )
        }
        // () => props.addToCart(props.productFromCatalog)
        }>
      Add to Cart</AddCartButton> : null}
    </ProductItemContainer>
  )
}
ProductCatalogSingleItem.propTypes = {
  productFromCatalog: PropTypes.object,
  checkIfRepeatedInCart: PropTypes.func,
  addFirstToCart: PropTypes.func,
  changeQuantityInCart: PropTypes.func,
  // addToCart: PropTypes.func
}

export default ProductCatalogSingleItem;