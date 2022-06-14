import React, { useEffect, useState } from 'react'
import { ApiResponseRestructure, GetPath } from '../../utils/helpers';
import mailIcon from "../../assets/images/icon-mail.png";
import activityIcon from "../../assets/images/activity.png";
import caret_down from "../../assets/images/caret_down.png";
import { useLocation } from 'react-router-dom';
import { Pages } from '../../utils/constants';
import ActivityModelPortal from '../activity/activityModelPortal';
import './navbar.scss';

const Navbar = () => {
    const [data, setData] = useState<{ [key: string]: any }>([]);
    const [tabName, setTabName] = useState<string>("");
    const [showActivitiesIcon, setShowActivitiesIcon] = useState<boolean>(false);
    const [showActivitiesModel, setShowActivitiesModel] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/807ba601-b71c-4a02-8d9f-44700a20791e/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220614T121223Z&X-Amz-Expires=86400&X-Amz-Signature=a1f8f3bdbf9dabc3a1c4917f1f5450d5533c44b2cb788004a033a441d75fb9b7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22&x-id=GetObject')
            .then(res => res.text())
            .then(results => {
                const val = ApiResponseRestructure(results);
                setData(val);
            })
    }, []);

    useEffect(() => {
        if (Pages.filter(item => GetPath(item.href) === GetPath(location.pathname)).length > 0) {
            let temp = location.pathname.substring(1);
            setTabName(temp.charAt(0).toUpperCase() + temp.slice(1).toLowerCase());
            if (temp === "teams") {
                setShowActivitiesIcon(true);
            } else {
                setShowActivitiesIcon(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <div className='navbarDiv'>
            <div className='leftSide'>
                <div className='narwhal'>
                    <p>NARWHAL</p>
                </div>
                <div className='tabname'>
                    <p>{tabName}</p>
                </div>
            </div>
            <div className='rightSide'>
                {
                    showActivitiesIcon && <img className='activityIcon' src={activityIcon} alt="activityIcon" height={30} width={30} onClick={() => setShowActivitiesModel(true)} />
                }
                <div className='notification'>
                    <img src={mailIcon} alt="mailIcon" width={22} height={22} />
                    <div>{data.current_user?.notifications_count}</div>
                </div>
                <div className='userDiv'>
                    <p>Hello, {data.current_user?.name}</p>
                    <img className='userAvatar' width={36} height={36} src={data.current_user?.avatar} alt="avatar" />
                    <img src={caret_down} height={6} width={8} alt="caret_down" />
                </div>
            </div>
            <ActivityModelPortal activities={data.activities} isOpen={showActivitiesModel} setShowActivitiesModel={() => setShowActivitiesModel(false)} />
        </div>
    )
}

export default Navbar