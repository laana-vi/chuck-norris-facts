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

.try-again {
    max-width: 500px;
}

@media screen and (max-width: 520px){
    .try-again {
    max-width: 400px;
}
}

@media screen and (max-width: 370px){
    .try-again {
    max-width: 300px;
}
}

@media screen and (max-width: 370px){
    .try-again {
    max-width: 300px;
}
}

`