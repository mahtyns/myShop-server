import styled from "styled-components";

export const HomeProductCategoriesGeneralContainer = styled.div`
margin-top: 3rem;
margin-bottom: 3rem;
width: 100%`;

export const HomeProductCategoriesImagesWrapper = styled.div`
width: 90%;
display: flex;
flex-direction: row;
padding: 2rem;
margin: 0 auto;
justify-content: space-between`;

export const HomeProductCategoriesItem = styled.div`
flex: 1;
width: 300px;
height: 250px;
margin: 5px;
position: relative`;

export const HomeProductCategoriesPicture = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

export const HomeProductCategoriesCTA = styled.button`
padding: 13px 50px;
background-color: white;
position: absolute;
text-transform: uppercase;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: none;
font-family: "Montserrat", sans-serif;
 &:hover {
    color: white;
    background-color:#827b6e;
  }
`;