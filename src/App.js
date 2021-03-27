import { useState } from 'react';
import DashboardMenu from './components/DashboardMenu';
import DashboardContent from './components/DashboardContent';

function App() {
  const [openMenuDashboard, setOpenMenuDashboard ] = useState(false);

  const openMenu =  () => {
    setOpenMenuDashboard(true);
  }

  const closeSidebar = () => {
    setOpenMenuDashboard(false);
  }

  return (
    <div className="App">
      <DashboardMenu />
      <DashboardContent />
    </div>
  );
}

export default App;
