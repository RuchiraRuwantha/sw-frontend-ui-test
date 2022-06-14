import CommonContent from "../components/shared/commonContent/commonContent";
import { ReactComponent as IconCampaign } from "../assets/images/icon-campaign.svg";
import Shape from "../assets/images/Shape.svg";
import './landingPage.scss';

const Campaign = () => {

    return (
        <div className="pageContent">
            <div className="tabs">
                <div className="contentHeader">
                    <div className="pageTitle">
                        <IconCampaign opacity={0.6} fill="gray" />
                        <p>Campaigns</p>
                    </div>
                    <div className="createBtn" style={{ marginRight: 0 }}>
                        <img
                            src={Shape}
                            alt="Shape"
                            width={16}
                            height={16}
                        />
                        <p>CREATE NEW CAMPAIGN</p>
                    </div>
                </div>
                <div className="commonContentDiv">
                    <CommonContent />
                </div>
            </div>
        </div>
    )
}

export default Campaign;