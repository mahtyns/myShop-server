import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { SharedParagraph, SharedTitle } from '../styling/sharedStyling';
import { ProductShopContainer } from '../styling/productShopStyling';
import ProductCatalogElements from '../components/serversideComponents/ProductCatalogElements';

const ProductsCatalog = ( props ) => {

  

  return (
    <>
    <SharedTitle>Products Catalog</SharedTitle>
      <SharedParagraph>Browse our cosmetics and choose your favourites.</SharedParagraph>
      <ProductShopContainer>
        <ProductCatalogElements 
        productCatalogList={props.productCatalogList} 
        // addToCart={props.addToCart}
          checkIfRepeatedInCart={props.checkIfRepeatedInCart}
          addFirstToCart={props.addFirstToCart}
          changeQuantityInCart={props.changeQuantityInCart} 
        />
      </ProductShopContainer>
    </>
  )
}

ProductsCatalog.propTypes = {
  productCatalogList: PropTypes.array,
  // addToCart: PropTypes.func, 
  checkIfRepeatedInCart: PropTypes.func,
  addFirstToCart: PropTypes.func,
  changeQuantityInCart: PropTypes.func
}

export default ProductsCatalog;