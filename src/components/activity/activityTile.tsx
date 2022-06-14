import React from 'react'
import { iActivity } from '../../utils/interfaces';
import ActivityItem from './activityItem';
import "./activity.scss";

type ActivityTileProps = {
  activities: iActivity[];
  setShowActivitiesModel?: () => void;
}

const ActivityTile: React.FC<ActivityTileProps> = ({ activities, setShowActivitiesModel }) => {
  return (
    <div>
      <div className='activityTitle'>
        <p>Activity</p>
        <button className='closeBtn' onClick={setShowActivitiesModel}>X</button>
      </div>
      <div className='activityItems'>
        {activities && activities.length > 0 && activities.map((item: iActivity, index: number) => <ActivityItem activity={item} key={index} />)}
      </div>
    </div>
  )
};

export default ActivityTile;