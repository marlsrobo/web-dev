import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";

const Tuiter = () => {
    return(
        <>
            <h1>Tuiter</h1>
            <NavigationSidebar active="home"/>
            <WhoToFollowListItem who={{
                avatarIcon: '../images/virgingalactic.png',
                userName: 'Virgin Galactic',
                handle: 'virgingalactic',
            }}/>
            <Link to="/hello">Hello</Link> |
            <Link to="/labs">Labs</Link>
        </>
    )
};

export default Tuiter;