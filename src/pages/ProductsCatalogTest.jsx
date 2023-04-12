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
        <ProductCatalogElements productCatalogList={props.productCatalogList} addToCart={props.addToCart}></ProductCatalogElements>
    </ProductShopContainer>
    </>
  )
}

ProductsCatalog.propTypes = {
  productCatalogList: PropTypes.array,
  addToCart: PropTypes.func
}

export default ProductsCatalog;