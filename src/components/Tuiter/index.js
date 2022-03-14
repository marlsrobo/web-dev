import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryList from "./PostSummaryList";
import ExploreScreen from "./ExploreScreen";

const Tuiter = () => {
    return(
        <>
            <h1>Tuiter</h1>
            <Link to="/hello">Hello</Link> |
            <Link to="/labs">Labs</Link>
            <ExploreScreen/>
        </>
    )
};

export default Tuiter;