import styled from "styled-components";

export const ContainerNavbar = styled.nav`
  grid-area:a;
  height: 60px;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  
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
    color: #a5aaad;
    font-size: 16px;
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
  }

  .navbar__center span{
    margin-left: 1rem;
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


