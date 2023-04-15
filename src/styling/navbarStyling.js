import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 60px;
  background-color: rgb(249, 245, 240);
  width: 100%;
  @media (max-width: 768px) {
    height: 100px;
  }
`;

export const NavbarWrapper = styled.div`
  padding: 0px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLogo = styled.div`
  flex: 1;
  font-family: "MonteCarlo", cursive;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

export const NavigationLinksContainer = styled.div`
  flex: 1;
`;

export const UserInteractionsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
`;

export const SearchInputWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #d2d2d2;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 5px;
`;

export const SearchInput = styled.input`
  background: none;
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  padding: 0px 10px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;

  &:hover {
    text-decoration: underline;
    color: black;
  }
  &:visited {
    text-decoration: none;
  }
`;

export const NavbarWrapperMobile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1.5em;
  @media (min-width: 768px) {
    display: none;
  }
  `

  export const NavBarMenuMobile = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100vh;
  width: 100%;
  background-color: #827b6e;
  align-items: center`
  
  export const NavigationListMobile = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0
`;

export const ListItemMobile = styled.li`
  padding: 0px 10px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5em;
  margin: 1em 0;

  &:hover {
    text-decoration: underline;
    color: black;
  }
  &:visited {
    text-decoration: none;
  }
`;