import React from "react";
import ReactDOM from "react-dom";
import ActivityTile from "./activityTile";
import { iActivity } from "../../utils/interfaces";
import "./activity.scss";

type ActivityModelPortalProps = {
    activities: iActivity[];
    isOpen: boolean;
    setShowActivitiesModel: () => void;
}

const ActivityModelPortal: React.FC<ActivityModelPortalProps> = ({ isOpen, setShowActivitiesModel, activities }) => {

    const containerElement: HTMLElement = document.getElementById('root')!;
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="activityModalDiv">
                <ActivityTile activities={activities} setShowActivitiesModel={setShowActivitiesModel} />
            </div>
        </div>,
        containerElement)
}

export default ActivityModelPortal;