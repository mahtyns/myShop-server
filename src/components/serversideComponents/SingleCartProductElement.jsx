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
                src={addedCartItem.product_url}/>
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