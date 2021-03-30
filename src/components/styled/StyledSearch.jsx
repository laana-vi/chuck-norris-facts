import styled from "styled-components";

export const StyledSearch = styled.div`
display: flex;
justify-content: center;
    .search-container {
        display: flex;
        align-content: flex-start;

    .search-input {
        font-family: 'Poppins', sans-serif;
        font-size: 1.1em;
        font-weight: 700;
        padding: 5px;
        margin-right: 10px;
        border: none;
        border-radius: 5px;
        color: #293241;
    }
    .search-button {
        font-family: 'Poppins', sans-serif;
        font-size: 1.1em;
        padding: 4px 9px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background: transparent;
        border: 2px solid #f7fff7;
        display: flex;
        justify-content: center;
        align-items: center;
    } 
    .icon {
        color: #f7fff7;
    }
}
`