import styled from 'styled-components';

export const ContainerDashboard = styled.div`
  grid-area:a;
  height: 100%; 
  margin-top: 3rem;
  
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
  display: flex;
  max-width:94%;
  margin:4rem auto 0 auto;
  align-items:center;
  justify-content: space-between;
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
  max-width:93%;

  margin:0 auto;
  height: auto;
  background:#fff;
  display: flex;
  border: 1px solid #DFE0EB;
  border-radius: 8px;
  margin-top:2rem;
  flex-wrap: nowrap;

  > .chart-graph{
    width:75%;
    margin: 1rem 1rem;
    flex: 1;
  }

  > .chart-graph > span{
    margin-top: 1rem;
  }

  .info-charts{
    
    border-left: 1px solid #DFE0EB;
    width:22%;
    flex: 1;
    height: 100%;
    display: flex;
    /* margin: auto 0; */
    text-align: center;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
    flex-wrap:nowrap;

    + div{
      margin-top: 1rem;
    }

    div{
      width: 100%;
      height: 2rem;
      line-height:2.3rem;
      border-bottom: 1px solid #DFE0EB;
      flex: 1 1 80px;
    }

    div:last-child{
      border-bottom: 0px;
    }
  }

  @media screen and (max-width:576px){
    &  {
      
      flex-direction: column;

      .info-charts{
        width: 100%;
        border-left:0;
      }
    }
  }

`;

export const ContentUsers = styled.div`
  max-width: 93%;
  margin:0 auto;  
  height: auto;
  display: flex;
  margin-top:2rem;
  flex-wrap: nowrap;

  .content-users-left{
    flex: 1 1 50%;
    width: 45%;
    background:#fff;
    border-radius: 8px;
    height: 20rem;
    border: 1px solid #DFE0EB;

    header{
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 1.25rem;

      span{
        font-size: 0.8rem;
        color:var(--gray-700)
      }

      a{
        text-decoration:none;
        font-weight: 400;
        color:#3751FF;
      }
    }

    main{
      display: flex;
      flex-direction: column;
      width:100%;
      flex-wrap: nowrap;

      & > div{
        border-bottom: 1px solid #DFE0EB;
        padding-top: 0.4rem;
        padding-bottom:0.4rem;
        padding-left:1.25rem;
        padding-right:1.25rem;


        flex: 1 1 3.2rem;
        display: flex;
        align-items:center;
        justify-content: space-between

        
      }

      span{
          font-size: 0.8rem;
        }

      & > div:last-child{
        border-bottom:0;  
      }
    }

  }


  .content-users-right{
    flex: 1 1 50%;
    width: 45%;
    height: 20rem;
    border: 1px solid #DFE0EB;
    border-radius: 8px;
    background:#fff;
    margin-left: 2rem;

    header{
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 1.25rem;

      span{
        font-size: 0.8rem;
        color:var(--gray-700)
      }

      a{
        text-decoration:none;
        font-weight: 400;
        color:#3751FF;
      }
    }

    main{
      display: flex;
      flex-direction: column;
      width:100%;
      flex-wrap: nowrap;

      & > div{
        border-bottom: 1px solid #DFE0EB;
        padding-top: 0.4rem;
        padding-bottom:0.4rem;
        padding-left:1.25rem;
        padding-right:1.25rem;


        flex: 1 1 3.2rem;
        display: flex;
        align-items:center;
        justify-content: space-between;

        span input{
          margin-right: 1rem;
        }
        span{
          color:#343434;
        }


        .label-todo{
          max-width: 10rem;
          height: 1.5rem; 
          padding: 0.5rem;
          line-height: 1rem;
          display: flex;
          align-items:center;
          border-radius: calc(1.5rem * 3);
          color: #fff; 
          text-transform:uppercase;

        }


        .progress{
          background:#FEC400;
        }

        .done{
          background:#29CC97;
        }

        .default{
          background: #F0F1F7;
          color:#9FA2B4;
        }
      }

      span{
          font-size: 0.8rem;
        }

      & > div:last-child{
        border-bottom:0;  
      }
    }

  }

  

`;