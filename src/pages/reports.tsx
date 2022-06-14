import CommonContent from '../components/shared/commonContent/commonContent';
import { ReactComponent as IconReports } from "../assets/images/icon-reports.svg";
import Shape from "../assets/images/Shape.svg";
import './landingPage.scss';

function Reports() {
    return (
        <div className='pageContent'>
            <div className="tabs">
                <div className="contentHeader">
                    <div className="pageTitle">
                        <IconReports opacity={0.6} fill="gray" />
                        <p>Reports</p>
                    </div>
                    <div className="createBtn">
                        <img
                            src={Shape}
                            alt="Shape"
                            width={16}
                            height={16}
                        />
                        <p>CREATE NEW REPORT</p>
                    </div>
                </div>
                <div className="commonContentDiv">
                    <CommonContent />
                </div>
            </div>
        </div>
    )
}

export default Reports