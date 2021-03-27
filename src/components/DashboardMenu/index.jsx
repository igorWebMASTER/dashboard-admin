import React from 'react'

import { ContainerMenu, ContentMenu } from './style';
import {FaRocket } from 'react-icons/fa'

export default function index() {
  return (
    <ContainerMenu>
      <ContentMenu>
        <div className="menu">
            <img src="https://pagtel.com.br/img/logo_pagtel.png" alt=""/> DashboardMenu
        </div>

          <div>
            <img src={FaRocket} alt=""/> Overview
          </div>
          <div>
            <img src="" alt=""/> Recargas
          </div>
          <div>
            <img src="" alt=""/> Portabilidade
          </div>
          <div>
            <img src="" alt=""/> Ativação
          </div>
      </ContentMenu>
    </ContainerMenu>
  )
}
