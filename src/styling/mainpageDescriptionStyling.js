import styled from "styled-components";

export const MainDescriptionGeneralContainer = styled.div`
margin: 5rem 0;`

export const MainpageDescriptionWrapper = styled.div`
padding: 4rem;
display: flex;
width: 70%;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin: 0 auto;
@media (max-width: 985px) {
    flex-direction: column;
    padding: 0
  }
`

export const MainpageDescriptionImg = styled.img`
width: 25rem;
height: auto;
border-radius: 25rem 25rem 0 0;
box-shadow: 1rem 1rem 0 #827b6e;
@media (max-width: 985px) {
    width:90%;
    margin-top: 5em
  }
`
export const MainpageDescriptionText = styled.div`
padding: 5rem;
font-size: 1.2rem;
line-height: 2rem;
font-family: "Montserrat", sans-serif;
@media (max-width: 985px) {
    font-size: 16px;
    padding: 3.5rem;
    width: 100%
  }
`
