import './Navbar.css'

const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
      <nav className="navbar">
        <div className="nav_icon">
          <i className="fa fa-bars"></i>
        </div>

        <div className="navbar_left">
          <a href="//#endregion">Recargas</a>
          <a href="@">Subscribers</a>
          <a href="@" className="active_link">Ativações</a>
        </div>
      </nav>
    )
}

export default Navbar;