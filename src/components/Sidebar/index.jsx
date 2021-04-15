import React from 'react'
import { ContainerSidebar } from './style'

function Sidebar({sidebarOpen, closeSideBar} ) {
  return (
    <ContainerSidebar>
      <div className={sidebarOpen ? "siderbar-responsive" : ""} id="sidebar">
          <div className="sidebar_tittle">
            <div className="sidebar__img">
              <img src="https://pagtel.com.br/img/logo_pagtel.png" alt=""/>
              <h1>Pagtel</h1>
            </div>

            <i 
                  className="fa fa-times" 
                  id="sidebarIcon" 
                  onClick={() => closeSideBar()}
              > </i>
          </div>
          
          <div className="sider__menu">
            <div className="siderbar__link active_menu_link">
                <i className="fa fa-home"> </i>
                <a href=""> Dashboard</a>
            </div>
            <div className="sidebar__link">
                <a href="">
                 <i className="fa fa-user-secret"></i>
                  Admin
              </a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-building-to"></i>
              <a href="">Recargas</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-wrench"></i>
              <a href="">Ativação</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-wrench"></i>
              <a href="">Portabilidade</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-question"></i>
              <a href="">Listas</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-calendar-check-o"></i>
              <a href="">Exportações</a>
            </div>
          </div>
      </div>  
    </ContainerSidebar>
  )
}

export default Sidebar