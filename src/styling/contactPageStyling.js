import styled from "styled-components";

export const ContactPageContainer = styled.div`
padding: 20px 0px;
display: flex;
flex-direction: column;
`;

export const ContactPageMap = styled.div`
flex: 1;
text-align: center;
width: 800px;
height: 400px`;

export const BrandInformationGeneralContainer = styled.div`
display: flex;
flex-direction: row;
padding: 30px 50px;
@media (max-width: 768px) {
    flex-direction: row;
  }`;

export const BrandContactDetailList = styled.div`
flex: 1;`;

export const BrandContactDetailListItem = styled.div`
font-size: 18px;
padding: 15px 0;
font-family: "Montserrat", sans-serif;`;

export const UserMessageContactFormContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
justify-content: space-between`;

export const UserMessageContactForm = styled.form`
padding: 30px 50px;
display: flex;
flex-direction: column;
flex: 1`;

export const UserMessageContactFormLabel= styled.label`
 line-height: 30px;
  font-family: "Montserrat", sans-serif;
`;

export const UserMessageContactFormInput = styled.input`
width: 40%`;

export const ContactPageFormWrapper = styled.div`
height: auto;`;
