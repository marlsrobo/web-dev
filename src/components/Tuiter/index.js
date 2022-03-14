import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList";

const Tuiter = () => {
    return(
        <>
            <h1>Tuiter</h1>
            <NavigationSidebar active="home"/>
            <WhoToFollowList/>
            <Link to="/hello">Hello</Link> |
            <Link to="/labs">Labs</Link>
        </>
    )
};

export default Tuiter;