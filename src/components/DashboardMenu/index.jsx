import React from 'react'

import { ContainerMenu, ContentMenu } from './style';
import {FaRocket, FaTicketAlt } from 'react-icons/fa'
import {AiFillPieChart} from 'react-icons/ai'

export default function index() {
  return (
    <ContainerMenu>
      <ContentMenu>
        <div className="menu">
            <img src="https://pagtel.com.br/img/logo_pagtel.png" alt=""/> Dashboard
        </div>

          <div>
            <AiFillPieChart color="#a5aaad"/><span>Overview</span>
          </div>
          <div>
            <FaTicketAlt color="#a5aaad"/> <img src="" alt=""/><span>Recargas</span>
          </div>
          <div>
            <AiFillPieChart color="#a5aaad"/> <img src="" alt=""/><span>Portabilidade</span>
          </div>
          <div>
            <AiFillPieChart color=" #a5aaad"/> <img src="" alt=""/><span>Ativação</span>
          </div>
          <div>
            <AiFillPieChart color="#a5aaad"/> <span>Overview</span>
          </div>
          <div>
            <FaTicketAlt color="#a5aaad"/> <img src="" alt=""/><span>Recargas</span>
          </div>
          <div>
            <AiFillPieChart color="#a5aaad"/> <img src="" alt=""/><span>Portabilidade</span>
          </div>
          <div>
            <AiFillPieChart color=" #a5aaad"/> <img src="" alt=""/><span>Ativação</span>
          </div>
      </ContentMenu>
    </ContainerMenu>
  )
}
