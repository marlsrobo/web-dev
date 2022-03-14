import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";
import React from "react";

const WhoToFollowList = () => {
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