import React from 'react';
import PurchaseDataInput from '../components/PurchaseDataInput';
import { deliveryOptions } from '../data';
import { CartCheckoutContainer, PurchaseCheckoutPageContainer, TotalPriceSummaryContainer, ConfirmPurchaseContainer, PurchaseItemsList, PurchaseUserDataLabel } from '../styling/purchaseSummaryStyling';
import { SharedSecondaryText, SharedSubtitle, SharedTitle } from '../styling/sharedStyling';
import PropTypes from 'prop-types';




const PurchaseSummary = ({ itemsAddedToCartList, finalPriceCount, deliveryOptionId }) => {

    return (
        <PurchaseCheckoutPageContainer>
            <SharedTitle>Checkout</SharedTitle>
            <CartCheckoutContainer>
                <TotalPriceSummaryContainer>
                    <SharedSecondaryText>
                        {(itemsAddedToCartList.map((item, index) =>
                            <PurchaseItemsList key={index}>{index + 1} - Product: {item.name} - Price: {item.price} € - Amount: {item.amount} - Total: {item.price * item.amount} € </PurchaseItemsList>)
                        )}
                        <SharedSecondaryText>Total Price Products: {itemsAddedToCartList.length ? finalPriceCount + "€" : "No products added yet"} </SharedSecondaryText>
                        <PurchaseItemsList>Delivery type: {deliveryOptionId ? deliveryOptions[deliveryOptionId].title : "Choose delivery option first"} </PurchaseItemsList>
                        <PurchaseItemsList>Delivery price: {deliveryOptionId ? deliveryOptions[deliveryOptionId].price + "€" : "Choose delivery option first"} </PurchaseItemsList>
                        <SharedSubtitle>Final Price: {finalPriceCount + deliveryOptions[deliveryOptionId].price}€</SharedSubtitle>
                    </SharedSecondaryText>
                </TotalPriceSummaryContainer>
                <ConfirmPurchaseContainer>
                    <PurchaseDataInput />
                </ConfirmPurchaseContainer>
            </CartCheckoutContainer>
        </PurchaseCheckoutPageContainer>
    );
};

PurchaseSummary.propTypes = {
    itemsAddedToCartList: PropTypes.array,
    finalPriceCount: PropTypes.number,
    deliveryOptionId: PropTypes.number
}

export default PurchaseSummary;
