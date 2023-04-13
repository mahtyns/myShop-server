import React from 'react'
import PropTypes from 'prop-types';
import { SingleItemAddedContainer, AddedToCartImage, AddedToCartInformation, CartProductAuxiliaryText, CartProductName, CartProductPrice, AddRemoveCartProductButton } from '../styling/userCartStyling';
import { Delete, Add, Remove } from '@material-ui/icons';

const CartItemSingleAdded = ({ itemsAddedToCartList, deleteItemCart, addOneProductCart, removeOneProductCart }) => {

    
    return (
        <>{
            itemsAddedToCartList.map((addedCartItem) =>
                <SingleItemAddedContainer key={addedCartItem.product_name}>
                    {/* <AddedToCartImage src={products[addedCartItem.id].img} /> */}
                    <AddedToCartImage src='https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                    <AddedToCartInformation>
                        <CartProductAuxiliaryText>Product Id: {addedCartItem.id}</CartProductAuxiliaryText>
                        <CartProductName>{addedCartItem.name}</CartProductName>
                        <CartProductPrice>{addedCartItem.price} €</CartProductPrice>
                        <CartProductAuxiliaryText>
                            <Add onClick={function () { addOneProductCart(addedCartItem) }} />
                            Amount: {addedCartItem.amount}
                            <Remove onClick={function () { removeOneProductCart(addedCartItem) }} />
                            <AddRemoveCartProductButton >
                                <Delete onClick={function () { deleteItemCart(addedCartItem) }} />
                            </AddRemoveCartProductButton>
                        </CartProductAuxiliaryText>
                    </AddedToCartInformation>
                </SingleItemAddedContainer>


            )

        }</>
    )

}

CartItemSingleAdded.propTypes = {
    itemsAddedToCartList: PropTypes.array,
    deleteItemCart: PropTypes.func,
    addOneProductCart: PropTypes.func,
    removeOneProductCart: PropTypes.func
}

export default CartItemSingleAdded
