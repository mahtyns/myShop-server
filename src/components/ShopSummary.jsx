import  React  from "react";
import { deliveryOptions } from '../data';
import { SharedParagraph } from '../styling/sharedStyling';
import { SummaryTotalContainer, PaySummary, TotalPriceSummary, DeliveryOptionsContainer, SummaryBuyButton, TotalSummaryInfo, DeliveryOptionsSelect } from '../styling/userCartStyling';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const ShopSummary = ({ finalPriceCount, chooseDeliveryOption }) => {

    return (
        <SummaryTotalContainer>
            <PaySummary>
                <TotalPriceSummary>Total: {finalPriceCount} €</TotalPriceSummary>
                <TotalSummaryInfo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio molestias corrupti numquam quisquam quae itaque harum hic temporibus quibusdam?</TotalSummaryInfo>
                <Link to="/checkout" ><SummaryBuyButton>Continue</SummaryBuyButton></Link>
            </PaySummary>
            <DeliveryOptionsContainer>Delivery Options
                <SharedParagraph>Choose one delivery option from below:</SharedParagraph>
                <DeliveryOptionsSelect onChange={chooseDeliveryOption} value={'default'}>
                    {deliveryOptions.map(option =>
                        <option key={option.id} value={option.id} > {option.title}, {option.price} €</option>
                    )}
                </DeliveryOptionsSelect>
            </DeliveryOptionsContainer>
        </SummaryTotalContainer >
    )
}

ShopSummary.propTypes = {
    finalPriceCount: PropTypes.number,
    chooseDeliveryOption: PropTypes.func
}


export default ShopSummary
