import React from 'react'
import { products } from '../data'
import { HomeRecomendedProductsGeneralContainer } from '../styling/productRecomendationStyling'

const chooseRecomendedProducts = () => {
    const recomendedProductId = Math.floor(Math.random() * products.length)
}

const RecomenderProducts = () => {
  return (
    <HomeRecomendedProductsGeneralContainer>
    </HomeRecomendedProductsGeneralContainer>
  )
}

export default RecomenderProducts