import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";
import React from "react";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return (
        <div className="d-none d-lg-block">
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="bold-weight">Who to follow</span>
                </li>
                {
                    who.map(who => {
                        return(<WhoToFollowListItem who={who}/>);
                    })
                }
            </ul>
        </div>
    );
}

export default WhoToFollowList;