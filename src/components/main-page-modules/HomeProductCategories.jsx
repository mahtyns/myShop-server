import React from 'react';
import { HomeProductCategoriesGeneralContainer, HomeProductCategoriesImagesWrapper, HomeProductCategoriesItem, HomeProductCategoriesPicture, HomeProductCategoriesCTA } from '../../styling/homeProductCategoriesStyling';
import { SharedTitle } from '../../styling/sharedStyling';

const HomeProductCategories = () => {
  return (
    <HomeProductCategoriesGeneralContainer>
        <SharedTitle>Our Products</SharedTitle>
        <HomeProductCategoriesImagesWrapper>
              <HomeProductCategoriesItem>
                  <HomeProductCategoriesCTA>Face Creams</HomeProductCategoriesCTA>
                  <HomeProductCategoriesPicture src="https://images.unsplash.com/photo-1580247324136-bd0df610f42d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
              </HomeProductCategoriesItem>
              <HomeProductCategoriesItem>
                  <HomeProductCategoriesCTA>Perfume</HomeProductCategoriesCTA>
          <HomeProductCategoriesPicture src="https://images.unsplash.com/photo-1508090228729-c062eefc9bef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" /></HomeProductCategoriesItem>
              <HomeProductCategoriesItem>
                  <HomeProductCategoriesCTA>Hair Care</HomeProductCategoriesCTA>
                  <HomeProductCategoriesPicture src="https://images.unsplash.com/photo-1525304937537-4d586f394674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" /></HomeProductCategoriesItem>
        </HomeProductCategoriesImagesWrapper>
    </HomeProductCategoriesGeneralContainer>

  )
}

export default HomeProductCategories