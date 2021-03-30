import styled from "styled-components";

export const ContainerSidebar = styled.div`
  #sidebar{
    background: #020509;
    overflow-y: auto;
    padding: 20px;
    grid-area:b;
    transition: all 0.2;
  }

  .sidebar__title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .sidebar__img{
    display: flex;
    align-items: center;
  }

  .sidebar__title > div > img{
    width: 75px;
    object-fit: contain;
  }


  .sidebar__title > div> h1{
      font-size: 18px;
      display: inline;
  }


  .sidebar__title > i{
    font-size: 18px;
    display: none;
  }

  .sidebar__menu > h2{
    color: #3ea175;
    font-size: 16px;
    margin-top: 15px;
    margin-bottom:5px;
    padding: 0 10px;
    font-weight: 700;
  }

  .sidebar_link{
    color: #f3f4f6;
    padding: 10px;
    border-radius: 3px;
    margin-bottom: 5px;
  }

  .active_menu_link{
    background: rgba(62, 161, 117, 0.3);
    color: #3ea175;
  }

  .active_menu_link a{
    color: #3ea175 !important;
  }

  .sidebar__link > a{
    text-decoration: none;
    color: #a5aaad;
    font-weight: 700;
  }

  .sidebar__link > i{
    margin-right: 10px;
    font-size: 18px;
  }

  .sidebar__logout{
    margin-top: 20px;
    padding: 10px;
    color: #e65061;
  }

  .sidebar__logout > a{
    text-decoration: none;
    color:#e65061;
    font-weight: 700;
    text-transform: uppercase;
  }

  .sidebar_logout > i{
    margin-right: 10px;
    font-size: 18px;
  }

  .sidebar_responsive{
    display: inline !important;
    z-index: 9999 !important;
    left: 0 !important;
    position: absolute !important;
  }

  
  @media screen and( max-width: 978px){
    #sidebar{
      display: none;
    }

    .sidebar__title > i{
      display: inline;
    }
  }
`;
