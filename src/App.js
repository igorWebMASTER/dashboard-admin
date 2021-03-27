import { useState } from 'react';
import DashboardMenu from './components/DashboardMenu';
import DashboardContent from './components/DashboardContent';
import Navbar from './components/NavBar';

function App() {
  const [openMenuDashboard, setOpenMenuDashboard ] = useState(false);

  const openSidebar =  () => {
    setOpenMenuDashboard(true);
  }

  const closeSidebar = () => {
    setOpenMenuDashboard(false);
  }

  return (
    <div className="container">
      <Navbar sidebarOpen={openSidebar} openSidebar={openSidebar} />
      <h1>Rect dashboard</h1>
    </div>
  );
}

export default App;
