import React from 'react';
import { ActionType } from "../../utils/constants";
import { iActivity } from '../../utils/interfaces';
import "./activity.scss";

type ActivityItemProps = {
  activity: iActivity
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {

  const paraFormatter = () => {
    if (activity.action === ActionType.INCREASED_QUOTA) {
      return (
        <p><span>{activity.person.name}</span> increased <span>{activity.target}'</span>s quota.</p>
      )
    } else if (activity.action === ActionType.ADDED_LEADS) {
      return (
        <p><span>{activity.person.name}</span> added new leads to <span>{activity.target}.</span></p>
      )
    } else if (activity.action === ActionType.ARCHIVED_TEAM) {
      return (
        <p><span>{activity.person.name}</span> archived the team <span>{activity.target}.</span></p>
      )
    }
  };

  return (
    <div className='itemDiv'>
      <img
        src={activity.person.avatar}
        alt="avatar"
        height={36}
        width={36}
      />
      <div className='itemContent'>
        <div>
          {paraFormatter()}
        </div>
        <p>{activity.created_at}</p>
      </div>
    </div>
  )
}

export default ActivityItem