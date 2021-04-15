import styled from "styled-components";

export const ContainerNavbar = styled.nav`
  grid-area:a;
  height: 60px;
  width: 92%;
  display: flex;
  margin:0 auto;
  align-items:center;
  justify-content: space-between;
  /* padding: 0 3rem 0 0rem; */
  
  .nav_icon{
    display: none;
  }

  .nav-icon > i {
    font-size: 26px;
    color: #a5aaad;
  }

  .navbar__left > a{
    margin-right: 30px;
    text-decoration:none;
    color: #252733;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .navbar__left .active_link{
    color: #265acc;
    border-bottom: 3px solid #265acc;
    padding-bottom: 12px;
  }

  .navbar__right{
    display: flex;
    justify-content: center;
    align-items:center;
  }

  .navbar__right > a{
    margin-left: 20px;
    text-decoration: none;
  }

  .navbar__right > a > img{
    border-radius: 50%;
    border: 2px solid #DFE0EB;
  }

  .navbar__right > a  > i {
    color: #a5aaad;
    font-size: 16px;
    border-radius: 50px;
    background: #fff;
    box-shadow: 2px 2px 5px #d9d9d9 , -2px -2px 5px #fff;
    padding: 7px;
  }

  .navbar__center{
    margin-right: 2rem;
    padding-right:2rem;
    border-right: 1px solid #d9d9d9;
    position: relative;

    span > span.dot__notification{
      height: 5px;
      width: 5px;
      background:#265acc;
      border-radius: 50%;
      position: absolute;
      left:43%;
      z-index: 9999;
    }

  }

  .navbar__center span{
    margin-left: 1rem;
    cursor: pointer;
   
  }

  
 
  @media screen  and ( max-width: 978px){
    .nav_icon{
      display: inline;
    }

  }

  @media screen and ( max-width: 480px){
    .nav__left{
      display: none;
    }

  }
`;


