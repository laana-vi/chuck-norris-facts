import styled from "styled-components";

export const StyledPreviousSearch = styled.div`
display: flex;
flex-direction: row;
margin: 10px;
padding: 5px;
font-family: 'Poppins', sans-serif;
font-size: 1.1em;
color:#f7fff7;
border: 1px solid #f7fff7;
border-radius:5px;

p:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #f7fff7;
}
button {
    background:transparent;
    border: none;
    color: #f7fff7;
    margin-left: 5px;
    outline: none;
}
button:hover {
    cursor: pointer;
    transform: scale(1.2)
}

`