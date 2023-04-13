import React from 'react'
import PropTypes from 'prop-types';
import { ProductsContainer } from '../../styling/productShopStyling';
import ProductCatalogSingleItem from './ProductCatalogSingleItem'

const ProductCatalogElements = (props) => {
  return (
    <ProductsContainer>
      {props.productCatalogList.map((productFromCatalog) => 
        <ProductCatalogSingleItem key={productFromCatalog.product_id} productFromCatalog={productFromCatalog} addToCart={props.addToCart} deleteFromCart={props.deleteFromCart}/>
      )}
    </ProductsContainer>
  )
}

ProductCatalogElements.propTypes = {
  productCatalogList: PropTypes.array,
  addToCart: PropTypes.func,
  deleteFromCart: PropTypes.func,
}

export default ProductCatalogElements;