import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box; 
  }
  body {
    font-family: 'Poppins', sans-serif;
    background: #293241;
    color: #f7fff7;
    background-image: url('https://res.cloudinary.com/dpj7zvqzs/image/upload/v1617109349/Untitled_design_6_dnbajx.png');
    background-attachment: fixed;
    overflow-x: hidden;
    height:100vh;
  }
  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
  }
  `