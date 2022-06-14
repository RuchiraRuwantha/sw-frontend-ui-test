import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import iconHelp from "../../assets/images/icon-help.svg";
import swLogoWhite from "../../assets/images/sw-logo-white.png";
import { Pages } from '../../utils/constants';
import { GetPath } from '../../utils/helpers';
import Icons from './icons';
import './sideBar.scss'

function SideBar() {

    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex);
    let location = useLocation();

    function changeActiveIndex(newIndex: string) {
        localStorage.setItem("lastActiveIndex", newIndex);
        setActiveIndex(parseInt(newIndex));
    }

    useEffect(() => {
        const activeItem = Pages.findIndex(item => GetPath(item.href) === GetPath(location.pathname))
        changeActiveIndex(activeItem.toString());
    }, [location]);

    return (
        <div className='sidebar-parent'>
            <div className='iconDiv' style={{ display: 'flex' }}>
                <div className='navIconDiv' style={{ display: 'flex' }}>
                    <div className='logo'>
                        <img src={swLogoWhite} alt="sw-logo-white" />
                    </div>
                    {
                        Pages.map((item, index) => {
                            return (
                                <Link key={item.title} to={item.href}>
                                    <div className="sidebar-item" style={index === activeIndex ? { background: '#2995DA' } : { background: '' }}>
                                        <Icons opacity={index === activeIndex ? 1 : 0.3} title={item.title} />
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className='logo' style={{ bottom: 0 }}>
                    <img src={iconHelp} alt="icon-help" />
                </div>
            </div>
            {/* <div className="behind-the-scenes"></div> */}
        </div>
    )
}

export default SideBar