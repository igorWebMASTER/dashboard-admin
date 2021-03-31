import { useState } from 'react';
import DashboardMenu from './components/DashboardMenu';
import DashboardContent from './components/DashboardContent';
import Navbar from './components/NavBar';
import Sidebar from './components/Sidebar';

function App() {
    const [openMenuDashboard, setOpenMenuDashboard] = useState(false);

    const openSidebar = () => {
        setOpenMenuDashboard(true);
    };

    const closeSidebar = () => {
        setOpenMenuDashboard(false);
    };

<<<<<<< HEAD
    return (
        <div className="container">
            <Navbar />
            <DashboardMenu />
            <DashboardContent />
        </div>
    );
=======
  return (
    <div className="container">
      <Navbar  />
      <DashboardMenu />
      <DashboardContent />
    </div>
  );
>>>>>>> d621ac1bff4e7e2b6ee0a1bbd26f373ec56a69f4
}

export default App;
