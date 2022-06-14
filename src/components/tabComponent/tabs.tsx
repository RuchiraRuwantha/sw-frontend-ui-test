import { useEffect, useState } from "react";
import { ApiResponseRestructure } from "../../utils/helpers";
import { iTeam } from "../../utils/interfaces";
import ActivityTile from "../activity/activityTile";
import TabContent from "../shared/tabContent/tabContent";
import TeamCard from "../teamCard/teamCard";
import TabNavItem from "./tabNavItem";
import { ReactComponent as CompaniesIcon } from "../../assets/images/icon-teams.svg";
import searchIcon from "../../assets/images/icon-search.svg";
import Shape from "../../assets/images/Shape.svg";
import "./tabs.scss";

const Tabs = () => {

  const [activeTab, setActiveTab] = useState("All");
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/807ba601-b71c-4a02-8d9f-44700a20791e/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220614T121223Z&X-Amz-Expires=86400&X-Amz-Signature=a1f8f3bdbf9dabc3a1c4917f1f5450d5533c44b2cb788004a033a441d75fb9b7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22&x-id=GetObject')
      .then(res => res.text())
      .then(results => {
        //json in the response is not properly formatted. To format it correctly, a custom function is being used.
        const val = ApiResponseRestructure(results);
        setData(val);
      })
  }, []);

  return (
    <div className="tabs">
      <div className="topContent">
        <div className="headerDiv">
          <div className="titleDiv">
            <CompaniesIcon opacity={0.6} fill="gray" />
            <p className="title">Teams</p>
          </div>
          <div className="createBtn">
            <img src={Shape} alt="Shape" width={16} height={16} />
            <p>CREATE NEW TEAM</p>
          </div>
        </div>
        <div className="miniSearch">
          <img src={searchIcon} alt="searchIcon" height={15} width={15} style={{ marginRight: '10px' }} />
          <p>Search team name ...</p>
        </div>
        <div className="navDiv">
          <ul className="nav">
            <TabNavItem key="All" title="All" id="All" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabNavItem key="Favorites" title="Favorites" id="Favorites" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabNavItem key="Archived" title="Archived" id="Archived" activeTab={activeTab} setActiveTab={setActiveTab} />
          </ul>
          <div className="search">
            <img src={searchIcon} alt="searchIcon" height={15} width={15} style={{ marginRight: '10px' }} />
            <p>Search team name ...</p>
          </div>
        </div>
      </div>
      <div className="tabContentContainer">
        <div className="outlet">
          <TabContent id="All" activeTab={activeTab} title="All Teams">
            {data && data.teams.length > 0 && data.teams.map((item: iTeam, index: string) =>
              <TeamCard
                key={index}
                team={item}
              />
            )}
          </TabContent>
          <TabContent id="Favorites" activeTab={activeTab} title="Favorite Teams">
            {data && data.teams.length > 0 && data.teams.map((item: iTeam, index: string) => {
              if (item.is_favorited) {
                return (
                  <TeamCard
                    key={index}
                    team={item}
                  />
                )
              }
              return null;
            }
            )}
          </TabContent>
          <TabContent id="Archived" activeTab={activeTab} title="Archived Teams">
            {data && data.teams.length > 0 && data.teams.map((item: iTeam, index: string) => {
              if (item.is_archived) {
                return (
                  <TeamCard
                    key={index}
                    team={item}
                  />
                )
              }
              return null;
            }
            )}
          </TabContent>
          {/* <div className="miniActivityDiv">
            {data && data.activities.length > 0 && <ActivityTile activities={data.activities} />}
          </div> */}
        </div>
        <div className="activityDiv">
          {data && data.activities.length > 0 && <ActivityTile activities={data.activities} />}
        </div>
      </div>
    </div>
  )
}

export default Tabs;