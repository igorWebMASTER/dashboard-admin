import React from 'react'

import DashboardMenu from '../components/DashboardMenu';
import DashboardContent from '../components/DashboardContent';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <DashboardMenu />
      <Navbar title={'Detalhes'}/>
      <DashboardContent />
    </>
  )
}
