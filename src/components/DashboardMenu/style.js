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
  position: fixed;


  @media screen and (max-width: 576px){
    &  {
      display: none !important;
    }
  }
  
`;

 

export const ContentMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #A4A6B3;
  /* padding: 1rem 2rem;  */

  line-height:4rem;
  text-align: left;

  transition: color 300ms;

  .active-link{
    background:#3f4049;
    color:#DDE2FF;
    opacity: 0.8;

    svg{
      color:#fff !important;
    }
  }


  & > div{
    padding-left: 2rem;
    padding-right: 2rem;
    cursor: pointer;
  }

  .menu{
    display: flex;
    align-items: center;
    line-height:2rem;
    vertical-align:middle;
    margin-bottom: 2rem;
    padding: 1rem 2rem;
    img{
      max-width:100px;
    }
  }

  span{
    margin-left: 1rem;
  }
`;


