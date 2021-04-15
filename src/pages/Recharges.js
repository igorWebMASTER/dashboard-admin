import React from 'react'

import DashboardMenu from '../components/DashboardMenu';
import Navbar from '../components/Navbar';
import RechargesContent from '../components/RechargesContent';

export default function Recharges() {
  return (
    <>
      <DashboardMenu />
      <Navbar title={'Recargas'} />  
      <RechargesContent />
    </>
  )
}
