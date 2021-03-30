import styled from "styled-components";

export const StyledPagination = styled.div`
display: flex;
justify-content: center;
align-content: center;
align-items: center;
button {
    background: transparent;
    border: none;
    color: #f7fff7;
    font-size: 1em;
    font-weight: 700;
    margin: 50px 5px 5px 5px;
    border-right: 1px solid #f7fff7;
    border-left: 1px solid #f7fff7;
    padding: 10px 20px;
    outline: none;
}
button:hover {
    transform: scale(1.1);
}
.active {
    background : #f7fff7;
    color: #293241;
}

@media screen and (max-width: 615px){
    button {
    padding: 10px;
}
}
@media screen and (max-width: 550px){
    button {
    padding:5px;
}
}

@media screen and (max-width: 420px){
    button {
    margin: 50px 3px 5px 3px;
    padding:3px;
}
}

@media screen and (max-width: 330px){
    button {
    margin: 50px 1px 5px 1px;
    padding: 2px;
}
}

`