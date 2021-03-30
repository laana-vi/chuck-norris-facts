import styled from "styled-components";

export const StyledJokes = styled.div`
display: flex;
flex-direction: column;
margin-top: 50px;
margin-bottom: 30px;
background-color: #293241;
border-radius: 5px;
border : none;
padding: 20px;
max-width: 80%;
box-sizing: border-box;
box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
visibility: ${({ searchResult }) => !searchResult && 'hidden'};
`