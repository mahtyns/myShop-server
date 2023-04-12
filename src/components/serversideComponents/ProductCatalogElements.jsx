import React from 'react'
import PropTypes from 'prop-types';
import { ProductsContainer } from '../../styling/productShopStyling';
import ProductCatalogSingleItem from './ProductCatalogSingleItem'

const ProductCatalogElements = ({ productCatalogList, addToCart }) => {
  return (
    <ProductsContainer>
      {productCatalogList.map((productFromCatalog) => 
        <ProductCatalogSingleItem key={productFromCatalog.product_id} productFromCatalog={productFromCatalog} addToCart={addToCart} />
      )}
    </ProductsContainer>
  )
}

ProductCatalogElements.propTypes = {
  productCatalogList: PropTypes.array,
  addToCart: PropTypes.func
}

export default ProductCatalogElements;