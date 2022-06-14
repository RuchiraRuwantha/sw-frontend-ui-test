import React from "react";
import "./tab.scss";

type TabContentProps = {
    id: string;
    activeTab: string;
    children: any;
    title: string
};

const TabContent: React.FC<TabContentProps> = ({ id, activeTab, children, title }) => {
    return (
        activeTab === id ?
            <div className="tabContentDiv">
                <div className="tabContentTitle">
                    <p>{title}</p>
                </div>
                <div className="TabContent">
                    {children}
                </div>
            </div>
            : null
    );
};

export default TabContent;