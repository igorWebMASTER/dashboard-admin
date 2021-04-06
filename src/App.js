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

    return (
        <div className="container">
            <Navbar />
            <DashboardMenu />
            <DashboardContent />
        </div>
    );
}

export default App;
