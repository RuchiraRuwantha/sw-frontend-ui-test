import SideBar from '../sideBar/sideBar';
import { Outlet } from "react-router-dom";
import Navbar from '../navbar/navbar';
import './main.scss';

function Main() {
    return (
        <div className='container'>
            <div className='sidebarDiv'>
                <SideBar />
            </div>
            <main className='main'>
                <Navbar />
                <Outlet />
                <div className='miniSidebarDiv'>
                    <SideBar />
                </div>
            </main>
        </div>
    )
}

export default Main