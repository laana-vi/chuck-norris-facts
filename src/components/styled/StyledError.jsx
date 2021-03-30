import styled from "styled-components";

export const StyledError = styled.div`
display: flex;
justify-content: center;
margin: 20px 10px;
padding: 10px;
border: 2px solid #640909;
background: #a31313;
color: #dab3b3;
font-weight: 700;
border-radius: 5px;
visibility: ${({ error }) => !error && 'hidden'};
`