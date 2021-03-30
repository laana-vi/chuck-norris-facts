import styled from "styled-components";

export const StyledDetailedJoke = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
align-content: center;
justify-content: center;
flex-direction: column;
margin-top: 150px;
background-color: #293241;
border-radius: 5px;
border : none;
padding: 20px;
max-width: 80%;
box-sizing: border-box;
box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);


button {
    align-self: flex-start;
    background:transparent;
    border: none;
    color: #f7fff7;
    outline: none;
}

button:hover {
    cursor: pointer;
    transform: scale(1.2)
}
img {
    margin-bottom: 30px;
}
`