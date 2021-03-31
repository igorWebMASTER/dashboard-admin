import {ContainerNavbar} from './style';
import {FaBell, FaSearch, FaHamburger} from 'react-icons/fa';

import AvatarMaker from '../../assets/AvatarMaker.svg';

const Navbar = ({sidebarOpen, openMenuDashboard}) => {
    return (
      <ContainerNavbar>
          {/* <div className={openMenuDashboard && 'block'} onClick={() =>  openMenuDashboard()}>
             <FaHamburger />
          </div> */}

          <div className="navbar__left">
            <a href="//#endregion">Overview</a>
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
              </span>
            </div>   


            <span>Jones Ferdinan</span>
            <a href="">
                <img src={AvatarMaker} alt="" width="30"/>
            </a>
          </div>
      </ContainerNavbar>
    )
}

export default Navbar;