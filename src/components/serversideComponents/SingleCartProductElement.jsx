import React from 'react'
import PropTypes from 'prop-types'
import {
    SingleItemAddedContainer,
    AddedToCartImage,
    AddedToCartInformation,
    CartProductAuxiliaryText,
    CartProductName,
    CartProductPrice,
    AddRemoveCartProductButton
} from '../../styling/userCartStyling';
import {Delete, Add, Remove} from '@material-ui/icons';

const SingleCartProductElement = (props) => {
    return ( <> {
        props.itemsAddedToCartList.map((addedCartItem) => <SingleItemAddedContainer key={addedCartItem.product_name}>
            {/* <AddedToCartImage src={products[addedCartItem.id].img} /> */}
            <AddedToCartImage
                src='https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
            <AddedToCartInformation>
                <CartProductAuxiliaryText>Product Id: {addedCartItem.product_id}</CartProductAuxiliaryText>
                <CartProductName>{addedCartItem.product_name}</CartProductName>
                <CartProductPrice>{addedCartItem.product_price}
                    €</CartProductPrice>
                <CartProductAuxiliaryText>
                    <Add/>
                    Amount: {addedCartItem.amount}
                    <Remove/>
                    <AddRemoveCartProductButton onClick={() => props.deleteFromCart(addedCartItem.product_id)}>
                        <Delete/>
                    </AddRemoveCartProductButton>
                </CartProductAuxiliaryText>
            </AddedToCartInformation>
        </SingleItemAddedContainer>)

    } </>
  )
}

SingleCartProductElement.propTypes = {
    itemsAddedToCartList: PropTypes.array,
    deleteFromCart: PropTypes.func
}

export default SingleCartProductElement