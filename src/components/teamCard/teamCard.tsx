import React from "react";
import defaultStar from "../../assets/images/star_default.png";
import activeStar from "../../assets/images/star_active.svg";
import convercation from "../../assets/images/icon-conversations-small.png";
import leads from "../../assets/images/icon-leads-small.png";
import "./teamCard.scss";
import { iTeam } from "../../utils/interfaces";

type TeamCardProps = {
  team: iTeam
}
const TeamCard: React.FC<TeamCardProps> = ({ team }) => {

  return (
    <>
      <div className="teamDiv">
        <div className="cardTopContent">
          <div className="header">
            <div className="titleDiv">
              <img
                src={team.image}
                alt="logo"
                width={36}
                height={36}
                className="teamImage"
              />
              <div className="cardTitle">
                <p><strong>{team.name}</strong></p>
                <p>Created {team.created_at}</p>
              </div>
            </div>
            <img
              src={team.is_favorited ? activeStar : defaultStar}
              alt="star"
              width={16}
              height={16}
            />
          </div>
          <div className="description">
            <p className="line">
              {team.description}
            </p>
          </div>
        </div>
        <div className="bottomContent">
          <div className="campaignDiv">
            <img
              src={convercation}
              alt="convercation"
              width={16}
              height={15}
            />
            <p className="cardBottomPara">{team.campaigns_count} Campaigns</p>
          </div>
          <div className="leadDiv">
            <img
              src={leads}
              alt="leads"
              width={16}
              height={15}
            />
            <p className="cardBottomPara">{team.leads_count} Leads</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamCard;