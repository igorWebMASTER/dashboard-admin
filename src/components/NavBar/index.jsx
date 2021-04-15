import React from 'react'
import {ContainerNavbar} from './style';
import {FaBell, FaSearch, FaHamburger} from 'react-icons/fa';

import AvatarMaker from '../../assets/AvatarMaker.svg';
function Navbar ({title}){
    return (
      <>
      <ContainerNavbar>
          {/* <div className={openMenuDashboard && 'block'} onClick={() =>  openMenuDashboard()}>
             <FaHamburger />
          </div> */}

          <div className="navbar__left">
            <a href="#endregion">{title}</a>
            {/* <a href="@">Subscribers</a>
            <a href="@" className="active_link">Ativações</a> */}
          </div>
          <div className="navbar__right">
            <div className="navbar__center">
              <span> 
                <FaSearch color="#C5C7CD" />
              </span>
              <span>
                <FaBell color="#C5C7CD" />
                <span className="dot__notification"></span>
              </span>
            </div>   


            <span>Igor Ribeiro</span>
            <a href="">
                <img src={AvatarMaker} alt="" width="30"/>
            </a>
          </div>
      </ContainerNavbar>
      </>
    )
}

export default Navbar;