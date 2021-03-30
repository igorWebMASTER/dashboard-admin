import { createGlobalStyle } from 'styled-components';

export const GlobalStyles =  createGlobalStyle`
    *{
      margin:0;
      padding:0;
      outline:0;
      box-sizing: border-box;
    }

    :root{
      --gray-700: #363740;
    }


    ::-webkit-scrollbar{
      width: 5px;
      height: 6px;
    }

    ::-webkit-scrollbar-track{
      box-shadow: inset 0 0 5px #a5aaad;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover{
      background: #a5aaad;
    }

    html{
      @media (max-width: 720px){
        font-size: 87.5%; /// 14px;
      }
      
      @media (max-width: 1080px){
        font-size: 93.75%; /// 15px;
      }
    }

    body{
      font-family: "Mulish", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .text-primary{
      color: #a5aaad;
      font-size: 1rem;
      font-weight: 700;
    }

    .font-bold{
      font-weight: 700;
    }

    .text-title{
      color: #2e4a66;
    }

    .text-lightblue{
      color: #469cac;
    }

    .text-red{
      color: #cc3d38;
    }

    .text-yellow{
      color: #a98921;
    }

    .text-green{
      color: #3b9668;
    }

    .container{
      display: grid;
      height: 100vh;
      grid-template: 
            "b b a" auto
            "b b c" 2ch
            "b b c" 1em / 20% 20px 1fr;
    }


    @media screen and ( max-width: 978px){
      .container{
        grid-template-columns: 1fr;
        grid-template-rows: 0.2fr 3fr;
        grid-template-areas: "nav main"
      }
    }
`;

