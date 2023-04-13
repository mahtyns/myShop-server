import React from 'react'
import PropTypes from 'prop-types';

import { SearchFilterProductContainer, SearchFilterWrapper, SearchProductInput, SortProductDropdown } from '../styling/productShopStyling'

const SearchFilterProductBar = ({ searchProductByTyping, chooseSortingOptionFromDropdownList, resetAllFilters }) => {
    return (
        <SearchFilterProductContainer>
            <SearchFilterWrapper>
                <SearchProductInput placeholder='Search...' type="text" onChange={searchProductByTyping} />
                <SortProductDropdown onChange={chooseSortingOptionFromDropdownList}>
                    <option>Sort By:</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                </SortProductDropdown>
                <p>Filter</p>
                <button onClick={resetAllFilters}>Reset all filters</button>
            </SearchFilterWrapper>
        </SearchFilterProductContainer>
    )
}

SearchFilterProductBar.propTypes = {
    searchProductByTyping: PropTypes.func,
    chooseSortingOptionFromDropdownList: PropTypes.func,
    resetAllFilters: PropTypes.func
}


export default SearchFilterProductBar