import CommonContent from "../components/shared/commonContent/commonContent";
import { ReactComponent as IconLeads } from "../assets/images/icon-leads.svg";
import Shape from "../assets/images/Shape.svg";
import './landingPage.scss';

const Leads = () => {

    return (
        <div className="pageContent">
            <div className="tabs">
                <div className="contentHeader">
                    <div className="pageTitle">
                        <IconLeads opacity={0.6} fill="gray" />
                        <p>Leads</p>
                    </div>
                    <div className="createBtn">
                        <img
                            src={Shape}
                            alt="Shape"
                            width={16}
                            height={16}
                        />
                        <p>CREATE NEW LEAD</p>
                    </div>
                </div>
                <div className="commonContentDiv">
                    <CommonContent />
                </div>
            </div>
        </div>
    )
}

export default Leads;