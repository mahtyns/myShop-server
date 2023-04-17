import React from 'react'
import PropTypes from 'prop-types';
import { ProductsContainer } from '../../styling/productShopStyling';
import ProductCatalogSingleItem from './ProductCatalogSingleItem'

const ProductCatalogElements = (props) => {
  return (
    <ProductsContainer>
      {props.productCatalogList.map((productFromCatalog) => 
        <ProductCatalogSingleItem 
        key={productFromCatalog.product_id} 
        productFromCatalog={productFromCatalog} 
        // addToCart={props.addToCart} 
          checkIfRepeatedInCart={props.checkIfRepeatedInCart}
          addFirstToCart={props.addFirstToCart}
          changeQuantityInCart={props.changeQuantityInCart} />
      )}
    </ProductsContainer>
  )
}

ProductCatalogElements.propTypes = {
  productCatalogList: PropTypes.array,
  // addToCart: PropTypes.func,
  checkIfRepeatedInCart: PropTypes.func,
  addFirstToCart: PropTypes.func,
  changeQuantityInCart: PropTypes.func,
}

export default ProductCatalogElements;