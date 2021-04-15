import React from 'react';
import Routes from './routes';
import { GlobalStyles } from './styles/global';


function App() {
    // const [openMenuDashboard, setOpenMenuDashboard] = useState(false);

    // const openSidebar = () => {
    //     setOpenMenuDashboard(true);
    // };

    // const closeSidebar = () => {
    //     setOpenMenuDashboard(false);
    // };

    return (
        <div className="container">
            <Routes />
            <GlobalStyles />
        </div>
    );
}

export default App;
