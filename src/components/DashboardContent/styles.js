import styled from 'styled-components';

export const ContainerDashboard = styled.div`
  grid-area:a;
  height: 100%;
  
  span:first-of-type{
    font-size: 1.5rem;
    color: #a5aaad;
  }

  .text-inner{
    font-size: 3rem;
    font-weight: 700;
    margin-top:0.8rem;
  }
`;

export const CardsInfoContainer = styled.div`
  margin-top:5rem;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 1rem;
  flex-wrap: wrap;
  transition: all 200ms;

  >  div  {
    flex: 1 1 10rem;
    width: 20rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    
    margin: 10px;

    /* grayscale / white */

    background: #FFFFFF;
    /* grayscale / divider */

    border: 1px solid #DFE0EB;
    box-sizing: border-box;
    border-radius: 8px;

    
  }

  >  div:hover{
    border: 1px solid #3751FF;
    color: #3751FF;
    cursor: pointer;
  }

`;

export const MainCharts = styled.div`
  width: 95%;
  margin:0 auto;
  height: 35rem;
  display: flex;
  border: 1px solid #DFE0EB;
  border-radius: 8px;
  margin-top:2rem;
  flex-wrap: wrap;

  > .chart-graph{
    width:75%;
    margin: 1rem 1rem;
  }

  > .chart-graph > span{
    margin-top: 1rem;
  }

  .info-charts{
    border-left: 1px solid #DFE0EB;
    width:19%;
    margin-left: 1rem;
    height: 100%;
    display: flex;
    margin: auto 0;
    text-align: center;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;

    + div{
      margin-top: 1rem;
    }

    div{
      width: 100%;
      height: 4rem;
      line-height:2rem;
      border-bottom: 1px solid #DFE0EB;
    }
  }

`;