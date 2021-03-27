import {ContainerNavbar} from './style';

import Avatar  from 'avataaars';

const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
      <ContainerNavbar>
          <div className="nav_icon" onClick={() =>  openSidebar()}>
            <i className="fa fa-bars"></i>
          </div>

          <div className="navbar__left">
            <a href="//#endregion">Recargas</a>
            <a href="@">Subscribers</a>
            <a href="@" className="active_link">Ativações</a>
          </div>

          <div className="navbar__right">
            <a href="">
              <i className="fa fa-search"></i>
            </a>
            <a href="">
              <i className="fa fa-search"></i>
            </a>
            <a href="">
              <i className="fa fa-clock-0"></i>
            </a>
            <a href="">
              <Avatar
                avatarStyle='Circle'
                topType='ShortHairShortWaved'
                accessoriesType='Prescription01'
                hairColor='Platinum'
                facialHairType='BeardMedium'
                facialHairColor='Brown'
                clotheType='ShirtScoopNeck'
                clotheColor='PastelBlue'
                eyeType='Surprised'
                eyebrowType='UpDownNatural'
                mouthType='Tongue'
                skinColor='Pale'
                width={30}
              />
            </a>
          </div>
      </ContainerNavbar>
    )
}

export default Navbar;