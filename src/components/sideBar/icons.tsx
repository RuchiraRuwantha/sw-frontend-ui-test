import React from 'react'
import { ReactComponent as IconLeads } from "../../assets/images/icon-leads.svg";
import { ReactComponent as IconReports } from "../../assets/images/icon-reports.svg";
import { ReactComponent as IconTeams } from "../../assets/images/icon-teams.svg";
import { ReactComponent as IconCampaign } from "../../assets/images/icon-campaign.svg";

type IconsProps = {
    title: string;
    opacity: number;
}

const Icons: React.FC<IconsProps> = ({ opacity, title }) => {

    if (title === "icon-leads") {
        return (<IconLeads opacity={opacity} fill="white" />)
    } else if (title === "icon-reports") {
        return (<IconReports opacity={opacity} fill="white" />)
    } else if (title === "icon-teams") {
        return (<IconTeams opacity={opacity} fill="white" />)
    } else if (title === "icon-campaign") {
        return (<IconCampaign opacity={opacity} fill="white" />)
    }
    return null;
}

export default Icons