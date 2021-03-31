import styled from 'styled-components';

export const ContainerMenu = styled.div`
  min-height: 100vh;
  max-width:20rem;
  background: var(--gray-700);
  color:#fff;
  grid-area: b;
  overflow-y: auto;
  transition: all 0.2;
  z-index:99999;
<<<<<<< HEAD
  position: sticky;


  @media screen and (max-width: 576px){
    &  {
      display: none !important;
    }
  }
  
`;

 
=======
  position: absolute;

  .block{
    display: block !important;
  }
`;


>>>>>>> d621ac1bff4e7e2b6ee0a1bbd26f373ec56a69f4

export const ContentMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #A4A6B3;
  padding: 1rem 2rem; 

  line-height:4rem;
  text-align: left;

  .menu{
    display: flex;
    align-items: center;
    justify-content: center;
    line-height:2rem;
    vertical-align:middle;
    margin-bottom: 2rem;
    img{
      max-width:100px;
    }
  }

  span{
    margin-left: 1rem;
  }
`;


