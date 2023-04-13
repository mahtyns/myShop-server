import React from 'react'
import { MainDescriptionGeneralContainer, MainpageDescriptionImg, MainpageDescriptionText, MainpageDescriptionWrapper } from '../../styling/mainpageDescriptionStyling'
import { SharedTitle } from '../../styling/sharedStyling'

const MainDescription = () => {
    return (
        <MainDescriptionGeneralContainer>
            <SharedTitle>Your Cosmetic Shop</SharedTitle>
            <MainpageDescriptionWrapper>
                <MainpageDescriptionImg src='https://images.unsplash.com/photo-1599847987657-881f11b92a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' alt='Your cosmetic store' />
                <MainpageDescriptionText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequatur, accusantium sit quis laudantium enim natus ut suscipit praesentium beatae nostrum est. Mollitia deserunt debitis perferendis officia fugit adipisci exercitationem.
                </MainpageDescriptionText>
            </MainpageDescriptionWrapper>
        </MainDescriptionGeneralContainer>
    )
}


export default MainDescription