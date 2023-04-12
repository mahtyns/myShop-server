import CartItemSingleAdded from './CartItemSingleAdded';
import SingleCartProductElement from './serversideComponents/SingleCartProductElement';
import { SharedParagraph } from '../styling/sharedStyling';
import { CartProductsSummaryContainer, CartProductsSummaryItems } from '../styling/userCartStyling';
import React from 'react';
import PropTypes from 'prop-types';

const ProductsCart = (props) => {

    return (
        <CartProductsSummaryContainer>
            <CartProductsSummaryItems>
                {props.itemsAddedToCartList.length ? <SingleCartProductElement
                    itemsAddedToCartList={props.itemsAddedToCartList}
                    deleteFromCart={props.deleteFromCart}
                /> : <SharedParagraph>Your cart is empty</SharedParagraph>}
            </CartProductsSummaryItems>
        </CartProductsSummaryContainer>
    )
}

ProductsCart.propTypes = {
    itemsAddedToCartList: PropTypes.array,
    deleteItemCart: PropTypes.func,
    addOneProductCart: PropTypes.func,
    removeOneProductCart: PropTypes.func,
    deleteFromCart: PropTypes.func
}


export default ProductsCart
