import React from 'react'
import PropTypes from 'prop-types';
import { Search, ShoppingCartSharp, PersonSharp } from '@material-ui/icons';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge } from '@material-ui/core';
import { Link } from "react-router-dom";
import { NavbarContainer, NavbarWrapper, NavbarLogo, NavigationLinksContainer, UserInteractionsContainer, SearchInputWrapper, SearchInput, NavigationList, ListItem, NavbarWrapperMobile } from '../styling/navbarStyling';

const Navbar = ({ finalPriceCount, itemsCartNumber }) => {
    return (
        <NavbarContainer>
            <NavbarWrapper>
                <NavigationLinksContainer>
                    <NavigationList>
                        <ListItem><Link to="/about">About</Link></ListItem>
                        <ListItem><Link to="/products">Products</Link></ListItem>
                        <ListItem ><Link to="/contact">Contact</Link></ListItem>
                    </NavigationList>
                </NavigationLinksContainer>
                <NavbarLogo><Link to="/">CousMetics</Link></NavbarLogo>
                <UserInteractionsContainer>
                    <SearchInputWrapper>
                        <SearchInput />
                        {/* Search Icon */}
                        <Search style={{ color: "gray" }} />
                    </SearchInputWrapper>
                    {/* Person-user Icon */}
                    <PersonSharp />
                    <Badge badgeContent={itemsCartNumber} color="secondary" max={9} >
                        <Link to="/cart">
                            {/* Shopping Cart Icon */}
                            <ShoppingCartSharp />
                        </Link>
                    </Badge>
                    {finalPriceCount} €
                </UserInteractionsContainer>
            </NavbarWrapper>
            <NavbarWrapperMobile>
                <NavbarLogo><Link to="/">CousMetics</Link></NavbarLogo>
                <MenuIcon style={{ fontSize: "36px" }} />
            </NavbarWrapperMobile>
        </NavbarContainer>
    )
}

Navbar.propTypes = {
    finalPriceCount: PropTypes.number,
    itemsCartNumber: PropTypes.number
}

export default Navbar
