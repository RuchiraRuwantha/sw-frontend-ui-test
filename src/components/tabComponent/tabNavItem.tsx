import React from 'react';

type TabNavItemProps = {
    id: string;
    title: string;
    activeTab: string;
    setActiveTab: (activeTab: string) => void;
}
const TabNavItem: React.FC<TabNavItemProps> = ({ id, title, activeTab, setActiveTab }) => {

    const handleClick = () => {
        setActiveTab(id)
    }

    return (
        <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
            {title}
        </li>
    )
};

export default TabNavItem;