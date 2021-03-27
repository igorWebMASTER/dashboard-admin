import styled from 'styled-components';

export const ContainerMenu = styled.div`
  min-height: 100vh;
  max-width:20rem;
  background: var(--gray-700);
  color:#fff;

`;

export const ContentMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #A4A6B3;
  padding: 2rem 3rem; 

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
`;


