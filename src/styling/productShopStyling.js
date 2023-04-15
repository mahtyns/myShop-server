import styledComponents from "styled-components";
import styled from "styled-components";

//ProductShop.jsx component styling
export const ProductShopContainer = styled.div`
  width: 100%;
`;

// Products.jsx components styling
export const ProductsContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  padding: 30px;
  justify-content: space-evenly;
  text-align: center;
  flex-wrap: wrap;
`;

// ProductItem styling - for each product from array in data.js file
export const ProductItemContainer = styled.div`
  flex: 1 1 1 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 40px 20px;
`;

export const ProductItemImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  font-family: "Montserrat", sans-serif;
`;

export const ProductName = styled.h1`
  font-size: 24px;
  margin: 10px 0;
  letter-spacing: 1px;
`;

export const ProductPrice = styled.h2`
  font-size: 20px;
  color: #827b6e;
  letter-spacing: 2px;
`;

export const ProductDescr = styled.p`
  font-size: 16px;
  color: gray;
  margin: 5px 0px;
  text-transform: uppercase;
`;

export const AddCartButton = styled.button`
  background-color: black;
  color: white;
  padding: 15px 25px;
  font-size: 14px;
  border: none;
  margin: 10px 0px;
  cursor: pointer;
  text-transform: uppercase;
`;

export const ProductStock = styled.p`
  font-size: 14px;
  margin: 10px 0 0 0;
`;


// Styling for search and filter bar
export const SearchFilterProductContainer = styled.div`
width: 90%;
display: flex;
flex-direction: row;
justify-content: flex-end;`;

export const SearchFilterWrapper = styled.div`
width: 40%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`;

export const SearchProductInput = styled.input`
background: transparent;
border: 1px solid rgba(0,0,0,0.4);
border-radius: 3px;
width: 300px;
height: 30px;
 &:focus {
    outline: none;
  }`;

  
export const SortProductDropdown = styled.select`
background: transparent;
border: 1px solid rgba(0,0,0,0.4);
border-radius: 3px;
width: 200px;
height: 30px;
 &:focus {
    outline: none;
  }`;